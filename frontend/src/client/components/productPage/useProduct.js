import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { UserContext } from "@/provider/UserContext";
export const useProduct = () => {
  let [product, setProduct] = useState(null);
  let [productVariants, setProductVariants] = useState([]);
  let navigate = useNavigate();
  const { id } = useParams();

  const { user } = useContext(UserContext);
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

  const addtoCart = () => {
    if (!user) navigate("/register/log-in");
    
  };

  return { product, addtoCart };
};
