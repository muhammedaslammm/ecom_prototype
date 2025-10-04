import { Section, Banner, Listing } from "../models/sectionModel.js";
import cloudinary from "../utils/cloudinary.js";
import uploadToCloudinary from "../utils/uploadToCloudinary.js";

export const createSection = async (req, res) => {
  let data = req.body;
  console.log("data:", data);
  console.log("files:", req.files);
  for (let file of req.files) {
    let uploadResult = await uploadToCloudinary(file.buffer, data.section_type);
    if (!data[file.fieldname]) data[file.fieldname] = [uploadResult];
    else data[file.fieldname].push(uploadResult);
  }
  try {
    let new_section = await Section.create({
      section_type: data.section_type,
      ...data,
    });
    console.log("new section created:", new_section);
    res.status(200).json({ message });
  } catch (error) {
    console.log("error:", error.message);
    res.status(500).json({ message: error.message });
  }
};
