import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ImageCards = ({ categoryID, title, description }) => {
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

  const getBanner = (id) => {
    switch (id) {
      case "68e0acabaf8a46edb6f645aa":
        return "/client/banner_refridgerator.png";
      case "68e0ab97af8a46edb6f64564":
        return "/client/banner_washing_machine.png";
    }
  };

  const getBackgroundColor = (id) => {
    switch (id) {
      case "68e0acabaf8a46edb6f645aa":
        return "#ffd4d6";
    }
  };

  return (
    <section
      className="mx-auto my-4 bg-neutral-200"
      // style={{ backgroundColor: getBackgroundColor(categoryID) }}
    >
      <div className="relative h-[25rem]">
        <img
          src={getBanner(categoryID)}
          alt="refridgerator banner image"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-12 left-16">
          <div className="text-white  text-[3rem] font-medium">{title}</div>
          <div className="text-white/70">{description}</div>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-4 w-[95%] mx-auto py-8">
        {products.map((product) => (
          <Link to={`/product/${product.variant._id}`}>
            <div className="bg-white p-4 flex flex-col gap-6">
              <img
                src={product.variant.images[0]}
                alt="product image"
                className="w-full h-[15rem] object-contain"
              />
              <div className="text-center leading-[2.2rem]">
                <div className="text-[1.8rem] font-medium">
                  {product.product_title.split(" ").slice(0, 3).join(" ")}
                </div>
                <div className="text-gray-700">{product.brand}</div>
                <div className="font-medium text-[2rem] mt-4">
                  ₹ {product.variant.price}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ImageCards;
