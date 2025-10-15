import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId },
  productId: { type: mongoose.Schema.Types.ObjectId },
  totalAmount: Number,
});

const Cart = mongoose.model("cart", Schema);

export default Cart;
