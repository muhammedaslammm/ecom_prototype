import React, { createContext, useState, useEffect, useContext } from "react";

export const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cart, setCart] = useState([]);
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL_2;

  const clearCart = () => {
    setCartItems([]);
  };

  useEffect(() => {
    const getCart = async () => {
      try {
        let response = await fetch(`${BACKEND_URL}/api/cart`, {
          method: "GET",
          credentials: "include",
        });
        const result = await response.json();
        if (!response.ok) throw new Error(result.message);
        setCart(result.cart);
      } catch (error) {
        console.error("Error in Cart Fetch:", error.message);
      }
    };
    getCart();
  }, []);

  const getCart = () => {};

  const addToCart = async (productId) => {
    try {
      let response = await fetch(`${BACKEND_URL}/api/cart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ productId }),
      });
      let result = await response.json();
      if (response.status === 401) {
        return toast.error(
          "You cannot access the route without proper authentication"
        );
      }
      if (!response.ok) throw new Error(result.message);
      setCart(result.cart);
      console.log("product successfully added to cart :", result.cart);
    } catch (error) {
      console.error(error.message);
    }
  };

  const removeFromCart = (id) => {};

  const updateQuantity = () => {};

  const getCartTotal = () => {};

  const value = {
    items: cart?.items || [],
    cart,
    addToCart,
    getCart,
    removeFromCart,
    updateQuantity,
    getCartTotal,
    clearCart,
    cartItems,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
