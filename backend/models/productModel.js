import mongoose from "mongoose";
// const Schema = new mongoose.Schema({
//   groupID: { type: mongoose.Schema.Types.ObjectId },
//   product_title: { type: String },
//   brand: { type: String },
//   category: { type: mongoose.Schema.Types.ObjectId },
//   stock: Number,
//   price: Number,
//   sku: { type: String, unique: true },
//   images: [String],
//   description: { type: String },
//   sections: [
//     { title: { type: String }, attributes: [{ label: String, value: String }] },
//   ],
//   variant_details: [{ label: String, value: String, code: String }],
// });

const Schema = new mongoose.Schema(
  {
    product_type: { type: String },
  },
  { discriminatorKey: "product_type", collection: "products" }
);
const Product = mongoose.model("product", Schema);

const Parent = Product.discriminator(
  "parent",
  new mongoose.Schema({
    product_title: String,
    brand: String,
    description: String,
    sections: [{ title: String, details: [{ label: String, value: String }] }],
  })
);

const Variant = Product.discriminator(
  "variant",
  new mongoose.Schema({
    parentId: { type: mongoose.Schema.Types.ObjectId },
    sku: String,
    price: Number,
    stock: Number,
    images: [String],
    variant_details: [{ label: String, value: String, code: String }],
  })
);

export { Product, Parent, Variant };
