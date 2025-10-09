import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext, WishlistContext } from "@/contexts";

export const useProduct = () => {
  let [product, setProduct] = useState(null);
  let navigate = useNavigate();
  const { id } = useParams();
  let BACKEND_URL = import.meta.env.VITE_BACKEND_URL_2;

  useEffect(() => {
    const getProductData = async () => {
      try {
        let response = await fetch(`${BACKEND_URL}/api/products/${id}`, {
          method: "GET",
        });
        let data = await response.json();
        if (!response.ok) throw new Error(data.message);
        else {
          console.log("product:", data.product);
          setProduct(data.product);
        }
      } catch (error) {
        console.log("error:", error.message);
      }
    };
    getProductData();
  }, []);

  const { addToWishList } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);

  const addProductToWishlist = (product) => {
    const response = addToWishList(product);
    if (response.success) navigate("/wishlist");
    else window.alert(response.message);
  };

  const handleAddToCart = (product) => {
    const response = addToCart(product);
    if (response.success) {
      navigate("/cart");
    } else {
      if (window.confirm(response.message + ". Go to cart?")) {
        navigate("/cart");
      }
    }
  };

  return { product };
};
