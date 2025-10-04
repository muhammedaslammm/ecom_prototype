import express from "express";
import {
  createProduct,
  deleteProducts,
  getProducts,
  validateSKU,
} from "../controllers/productController.js";
import upload from "../middlewares/multer.js";
const router = express.Router();

router.post("/products", upload.any(), createProduct);
router.get("/products", getProducts);
router.post("/products/validate-sku", validateSKU);
router.delete("/products", deleteProducts);

export default router;
