import { Product, Parent, Variant } from "../models/productModel.js";
import { Types } from "mongoose";

export const validateSKU = async (req, res) => {};

export const createProduct = async (req, res) => {
  let { general_data, sections, variants } = req.body;
  console.log("variants:", variants);
  // structuring sections
  let new_sections = Object.values(
    Object.values(sections).reduce((object, section) => {
      if (!object[section.section]) {
        object[section.section] = {
          title: section.section,
          details: [{ label: section.label, value: section.value }],
        };
      } else
        object[section.section].details.push({
          label: section.label,
          value: section.value,
        });
      return object;
    }, {})
  );

  // structuring parent data
  let parent_data = {
    product_type: "parent",
    product_title: general_data.product_title,
    brand: general_data.brand,
    description: general_data.description,
    sections: new_sections,
  };

  try {
    // create parent product;
    let parent_product = await Parent.create(parent_data);

    // creating variant products
    for (let variant of variants) {
      console.log("attributes:", variant.attributes);
      await Variant.create({
        parentId: parent_product._id,
        sku: variant.sku,
        price: variant.price,
        stock: variant.stock,
        images: variant.images,
        variant_details: variant.attributes,
      });
    }
    res.status(200).json({ message: "success" });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({ message: "Duplicate SKU or Unique Field" });
    }
    return res.status(500).json({ message: error.message });
  }
};

export const getProducts = async (req, res) => {
  let { filter, current_page } = req.query;
  let products = [];
  try {
    switch (filter) {
      case "admin-all":
        let limit = 7;
        products = await Parent.find()
          .skip(limit * (current_page - 1))
          .limit(limit);
        break;
      default:
        break;
    }
    res.status(200).json({ message: "success", products });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
