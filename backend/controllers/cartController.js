import Cart from "../models/cartModel.js";
import { Product } from "../models/productModel.js";

export const getCart = async (req, res) => {
  let { _id } = req.user;
  try {
    const cart = await Cart.findOne({ userId: _id });
    res.json({ cart }); //need to use pipeline to get the product parent detials + variant details
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addToCart = async (req, res) => {
  let { productId } = req.body;
  let { _id } = req.user;
  let quantity = 1;

  // When offer model is added, first check if any offer doc is created with the respective productID
  try {
    let { price } = await Product.findOne({ _id: productId });
    let totalAmount = price * quantity;
    let item = {
      productId,
      quantity,
      totalAmount,
    };
    let cart = await Cart.findOne({ userId: _id });
    if (!cart) {
      let new_cart = await Cart.create({
        userId: _id,
        items: [item],
        cartTotal: totalAmount,
      });
      return res.status(200).json({
        message: "Product Successfully Added to Cart",
        cart: new_cart,
      });
    }

    cart.items.push(item);
    cart.cartTotal += totalAmount;

    await cart.save();

    res
      .status(200)
      .json({ message: "Product Successfully Added to Cart", cart: cart });
  } catch (error) {
    console.log("error:", error.message);
    res.status(500).json({ message: error.message });
  }
};
