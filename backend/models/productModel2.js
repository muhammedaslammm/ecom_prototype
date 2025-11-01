import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  product_title: { type: String },
  brand: { type: mongoose.Schema.Types.ObjectId, ref: "brands" },
  make: { type: mongoose.Schema.Types.ObjectId, ref: "makes" },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "category" },
});
