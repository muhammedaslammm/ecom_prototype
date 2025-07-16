import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    image: { type: String },
    level: { type: Number, required: true },
    parent: {
      type: mongoose.Schema.Types.ObjectId,
      default: null,
      ref: "category",
    },
    sections: [
      {
        section_title: { type: String },
        attributes: [
          {
            label: String,
            field_type: String,
            options: { type: [String], default: null },
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

const Category = mongoose.model("category", CategorySchema);

export default Category;
