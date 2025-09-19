import express from "express";
import {
  createProduct,
  getProducts,
  validateSKU,
} from "../controllers/productController.js";
const router = express.Router();

router.post("/products", createProduct);
router.get("/products", getProducts);
router.post("/products/validate-sku", validateSKU);

export default router;
