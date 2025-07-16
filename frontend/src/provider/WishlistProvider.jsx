import { createContext, useState } from "react";
import { WishlistContext } from "../contexts";

const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const addToWishList = (product) => {
    let addedToWishlist = false;
    setWishlist((prev) => {
      const matchingProduct = prev.find((pro) => pro.id === product.id);
      if (!matchingProduct) {
        addedToWishlist = true;
        return [...prev, product];
      }
      return prev;
    });

    if (addedToWishlist) return { success: true };
    else
      return { success: false, message: "Product already added to wishlist" };
  };

  const removeFromWishlist = (productId) => {
    setWishlist((prev) => prev.filter((item) => item.id !== productId));
  };

  const value = {
    wishlist,
    addToWishList,
    removeFromWishlist,
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;
