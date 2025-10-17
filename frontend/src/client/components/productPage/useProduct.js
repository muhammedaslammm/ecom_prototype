import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { UserContext } from "@/provider/UserContext";
import { CartContext } from "@/provider/CartProvider";
export const useProduct = () => {
  let [product, setProduct] = useState(null);
  let [productVariants, setProductVariants] = useState([]);
  let navigate = useNavigate();
  const { id } = useParams();

  const { user } = useContext(UserContext);
  const { addToCart } = useContext(CartContext);
  let BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const getProductData = async () => {
      try {
        let response = await fetch(`${BACKEND_URL}/api/products/${id}`, {
          method: "GET",
        });
        let data = await response.json();
        if (!response.ok) throw new Error(data.message);
        else {
          console.log("product:", data.products);
          setProduct(data.products[0]);
        }
      } catch (error) {
        console.log("error:", error.message);
      }
    };
    getProductData();
  }, []);

  useEffect(() => {
    const fetchVariants = async () => {
      try {
        let response = await fetch(
          `${BACKEND_URL}/api/products/${id}?filter=variant&parent=${product.parentId}`
        );
        let data = await response.json();
        if (!response.ok) throw new Error(data.message);
        else {
          console.log("product-variants:", data.products);
          setProductVariants(data.products);
        }
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchVariants();
  }, [product]);

  const addProducttoCart = async (productId) => {
    if (!user) navigate("/register/log-in");
    try {
      const response = await fetch(
        `${BACKEND_URL}/api/products/${productId}?filter=stock`,
        {
          method: "GET",
          credentials: "include",
        }
      );
      const result = await response.json();
      if (!response.ok) throw new Error(result.message);
      let fetchProduct = result.products[0];
      if (fetchProduct.stock <= 0)
        return toast.error("Sorry, This product is now out of stock.");
      // add product to cart
      const result2 = await addToCart(productId);
    } catch (error) {
      console.log("stock fetch error:", error.message);
    }
  };

  return { product, addProducttoCart };
};
