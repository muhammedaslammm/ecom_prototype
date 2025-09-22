import { Product, Parent, Variant } from "../models/productModel.js";
import Category from "../models/categoryModel.js";
import { Types } from "mongoose";

export const validateSKU = async (req, res) => {
  console.log("req.body:", req.body);
  let { skuArray } = req.body;
  let matchingSKUs = (await Variant.find({ sku: { $in: skuArray } })).map(
    (variant) => variant.sku
  );
  console.log("matching skus:", matchingSKUs);
  if (matchingSKUs.length) {
    return res
      .status(409)
      .json({ message: "Some SKUs are already created.", SKUs: matchingSKUs });
  }
  return res.status(200).json({ message: "Variants can be created" });
};

export const createProduct = async (req, res) => {
  let { general_data, sections, variants, category } = req.body;
  // structuring sections
  let new_sections = Object.values(
    Object.values(sections).reduce((object, section) => {
      if (!object[section.section]) {
        object[section.section] = {
          title: section.section,
          details: [{ label: section.label, value: section.value }],
        };
      } else
        object[section.section].details.push({
          label: section.label,
          value: section.value,
        });
      return object;
    }, {})
  );

  // structuring parent data
  let parent_data = {
    product_type: "parent",
    product_title: general_data.product_title,
    brand: general_data.brand,
    description: general_data.description,
    category,
    sections: new_sections,
  };

  try {
    // create parent product;
    let parent_product = await Parent.create(parent_data);
    let getVariantData = (variant) => {
      return {
        parentId: parent_product._id,
        sku: variant.sku,
        price: variant.price,
        stock: variant.stock,
        images: variant.images,
        variant_details: variant.attributes,
      };
    };

    // creating variant products
    let variantsArray = variants.map((variant) => getVariantData(variant));
    console.log("variant_array:", variantsArray);
    await Variant.insertMany(variantsArray);

    await Category.updateOne(
      { _id: category },
      { $inc: { categoryProductCount: 1 } }
    );
    res.status(200).json({ message: "success" });
  } catch (error) {
    console.log("error:", error.message);
    if (error.code === 11000) {
      return res.status(409).json({ message: "Duplicate SKU or Unique Field" });
    }
    return res.status(500).json({ message: error.message });
  }
};

export const getProducts = async (req, res) => {
  let { filter, current_page } = req.query;
  let products = [];
  try {
    switch (filter) {
      case "admin-products":
        let limit = 7;
        let pipeline = [
          {
            $lookup: {
              from: "products",
              localField: "_id",
              foreignField: "parentId",
              as: "variants",
            },
          },
          {
            $addFields: { total_variants: { $size: "$variants" } },
          },
          {
            $lookup: {
              from: "categories",
              localField: "category",
              foreignField: "_id",
              as: "category",
            },
          },
          {
            $unwind: "$category",
          },
          {
            $project: {
              product_title: 1,
              category: "$category.title",
              brand: 1,
              total_variants: 1,
            },
          },
          { $skip: limit * (current_page - 1) },
          { $limit: limit },
        ];
        products = await Parent.aggregate(pipeline);
        console.log("products:", products);
        break;
      default:
        break;
    }
    res.status(200).json({ message: "success", products });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
