import jwt from "jsonwebtoken";
import config from "../config.js";

const verifyUser = (req, res, next) => {
  let token = req.cookies?.token;
  try {
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "No token found. Authentication failed!",
      });
    }
    const decoded = jwt.verify(token, config.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res
      .status(401)
      .json({ success: false, message: "Invalid or expired Token!" });
  }
};

export default verifyUser;
