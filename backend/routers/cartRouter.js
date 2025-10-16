import express from "express";
import { addToCart, getCart } from "../controllers/cartController.js";
import verifyUser from "../middlewares/authentication2.js";
const router = express.Router();

router.get("/cart", verifyUser, getCart);
router.post("/cart", verifyUser, addToCart);

export default router;
