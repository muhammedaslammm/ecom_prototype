import express from "express";
import { createProductSection } from "../controllers/producSectionController.js";

let router = express.Router();

router.post("/product-sections", createProductSection);

export default router;
