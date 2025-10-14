import express from "express";
import { Product } from "../models/productModel";
const router = express.Router();

router.get("/search/suggestion", async (req, res) => {
  let { query, limit } = req.query;
  try {
    if (!query || query.trim().length < 2) {
      return res.json({ result: [] });
    }
    limit = parseInt(limit);
    let pipeline = [
      {
        $search: {
          index: "product_search", // create this index on Atlas
          autocomplete: {
            query: q,
            path: ["name", "description", "brand", "category"],
            fuzzy: { maxEdits: 1, prefixLength: 1 },
          },
        },
      },
      {
        $project: {
          name: 1,
          thumbnail: 1,
          price: 1,
          score: { $meta: "searchScore" },
        },
      },
      { $sort: { score: -1 } },
      { $limit: limit },
    ];

    let result = [];
    try {
      result = await Product.aggregate(pipeline);
    } catch (error) {
      console.warn(
        "Atlas search failed, falling back to regex:",
        error.message
      );

      result = await Product.find(
        {
          $or: [
            { product_title: { $regex: query, options: "i" } },
            { brand: { $regex: query, options: "i" } },
            { description: { $regex: query, options: "i" } },
          ],
        },
        { product_title: 1, brand: 1 }
      ).limit(limit);
    }
    res.json({ result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
