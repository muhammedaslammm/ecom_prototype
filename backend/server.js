import mongoose from "mongoose";
import dotevn from "dotenv";
import app from "./app.js";
dotevn.config();
// import config from "./config.js";

const PORT = process.env.PORT || 1000;
const CONNECTION_STRING = process.env.CONNECTION_STRING || "samplestring";

const connectDB = async () => {
  try {
    await mongoose.connect(CONNECTION_STRING);
    app.listen(PORT, () =>
      console.log(
        `Database connected\nServer listening for request via port ${PORT}`
      )
    );
  } catch (error) {
    console.error(
      "database connection failed. server not listening for request\n",
      error
    );
  }
};

connectDB();
