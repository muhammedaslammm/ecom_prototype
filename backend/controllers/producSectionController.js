import Section from "../models/productSections.js";

export const createProductSection = async (req, res) => {
  let data = req.body;
  try {
    let new_section = await Section.create(data);
    res
      .status(200)
      .json({ message: "New Section Created!, section:", new_section });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
