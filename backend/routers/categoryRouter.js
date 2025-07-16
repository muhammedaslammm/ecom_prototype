import express from "express";
import {
  createCategory,
  getCategories,
  getCategoryById,
} from "../controllers/categoryController.js";
const router = express.Router();

router.get("/categories/:categoryid", getCategoryById);
router.get("/categories", getCategories);
router.post("/categories", createCategory);

export default router;
