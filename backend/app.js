import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./routers/userRouter.js";
import categoryRouter from "./routers/categoryRouter.js";
import productRouter from "./routers/productRouter.js";
import sectionRouter from "./routers/sectionRouter.js";
import searchRouter from "./routers/searchRouter.js";
import cartRouter from "./routers/cartRouter.js";
import productSectionRouter from "./routers/productSectionRouter.js";
import Sample from "./sampleCreation.js";
import path from "path";

const app = express();
const allowedURLs = [
  "https://ecom-prototype-one.vercel.app",
  "http://localhost:5173",
  "http://localhost:3000",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedURLs.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("request not allowed"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  })
);

app.use(cookieParser());
app.use(express.json());

app.use(
  "/sample_images",
  express.static(path.join(process.cwd(), "sample_images"))
);

app.use("/api", userRouter);
app.use("/api", categoryRouter);
app.use("/api", productRouter);
app.use("/api", sectionRouter);
app.use("/api", searchRouter);
app.use("/api", cartRouter);
app.use("/api", productSectionRouter);

app.get("/api/sample-products", async (req, res) => {
  try {
    let limit = 20;
    let { query, current_page } = req.query;
    console.log("query:", query);
    let totalProducts = await Sample.countDocuments({
      title: { $regex: query, $options: "i" },
    });
    let products = await Sample.find({
      title: { $regex: query, $options: "i" },
    })
      .skip((current_page - 1) * limit)
      .limit(limit);
    let totalPages = Math.ceil(totalProducts / limit);
    res.json({ products, totalPages, totalProducts });
  } catch (error) {
    console.log("error", error.message);
    res.status(500).json({ message: error.message });
  }
});

export default app;
