import mongoose from "mongoose";

const Schema = new mongoose.Schema(
  {
    section_title: { type: String },
    data_structure: { type: String, enum: ["text", "list"] },
  },
  { discriminatorKey: "data_structure", _id: false }
);

const Section = mongoose.model("Section", Schema);

export default Section;
