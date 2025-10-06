import { useEffect, useState } from "react";

const ImageCards = ({ categoryID }) => {
  let [products, setProducts] = useState([]);
  let BACKEND_URL = import.meta.env.VITE_BACKEND_URL_1;
  useEffect(() => {
    let getProducts = async () => {
      try {
        let response = await fetch(
          `${BACKEND_URL}/api/products?filter=home&category=${categoryID}&product_limit=5`,
          { method: "GET" }
        );
        let data = await response.json();
        if (!response.ok) throw new Error(data.message);
        else {
          console.log("products:", data.products);
          setProducts(data.products);
        }
      } catch (error) {
        console.error(error.message);
      }
    };
    getProducts();
  }, []);

  return (
    <section>
      <div className="grid grid-cols-5 gap-4">
        {products.map((product) => (
          <div className="bg-white p-4">
            <img
              src={product.variant.images[0]}
              alt="product image"
              className="w-full h-[20rem] object-contain"
            />
            <div>
              <div>
                {product.product_title.split(" ").slice(0, 3).join(" ")}
              </div>
              <div></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageCards;
