import { createSection } from "../controllers/sectionController.js";
import express from "express";
import upload from "../middlewares/multer.js";

const router = express.Router();

router.post("/sections", upload.any(), createSection);

export default router;
