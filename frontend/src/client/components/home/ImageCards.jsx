import { useEffect, useState } from "react";

const ImageCards = ({ categoryID }) => {
  let [products, setProducts] = useState([]);
  let BACKEND_URL = import.meta.env.VITE_BACKEND_URL_1;
  // so far, products are only called based on category
  useEffect(() => {
    let getProducts = async () => {
      try {
        let response = await fetch(
          `${BACKEND_URL}/api/products?filter=home&cateogry=${categoryID}&product_limit=5`,
          { method: "GET" }
        );
        let data = await response.json();
        if (!response.ok) throw new Error(data.message);
        else {
          console.log("products:", [data.products]);
        }
      } catch (error) {
        console.error(error.message);
      }
    };
    getProducts();
  }, []);

  return <section></section>;
};

export default ImageCards;
