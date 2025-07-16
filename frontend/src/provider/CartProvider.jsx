import React, { useContext, useState } from "react";
import { CartContext } from "../contexts";

// Provider Component
const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const clearCart = () => {
    setCartItems([]);
  };

  // ✅ Add a product to cart
  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      return {
        success: false,
        message: "Item already in cart",
      };
    }
    setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
    return {
      success: true,
      message: "Item added to cart",
    };
  };

  // ❌ Remove an item from cart
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // 🔁 Increase or decrease quantity
  const updateQuantity = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + delta),
            }
          : item
      )
    );
  };

  // 💰 Calculate total price
  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.offer_price * item.quantity,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        getCartTotal,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
