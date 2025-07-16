import express from "express";
import {
  logoutUser,
  signup,
  verifyState,
  signinUser,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/auth/verify", verifyState);
router.post("/auth/register", signup);
router.post("/auth/sign-in", signinUser);
router.post("/auth/logout", logoutUser);

export default router;
