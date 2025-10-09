import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useProducts } from "./useProducts";

const ImageCards = ({ categoryID, title, description }) => {
  let { getProducts, products } = useProducts();

  useEffect(() => {
    getProducts(categoryID);
  });

  const getBanner = (id) => {
    switch (id) {
      case "68e0acabaf8a46edb6f645aa":
        return "/client/banner_refridgerator.jpg";
      case "68e0ab97af8a46edb6f64564":
        return "/client/banner_washing_machine.png";
    }
  };

  const getColor = (id) => {
    switch (id) {
      case "68e0acabaf8a46edb6f645aa":
        return "#460809";
      case "68e0ab97af8a46edb6f64564":
        return "white";
    }
  };
  const getBackgroundColor = (id) => {
    switch (id) {
      case "68e0acabaf8a46edb6f645aa":
        return "#d4d4d4";
      case "68e0ab97af8a46edb6f64564":
        return "#080003";
    }
  };

  return (
    <section
      className="mx-auto my-4"
      style={{ backgroundColor: getBackgroundColor(categoryID) }}
    >
      <div className="relative h-[20rem]">
        <img
          src={getBanner(categoryID)}
          alt="refridgerator banner image"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute bottom-12 left-16"
          style={{ color: getColor(categoryID) }}
        >
          <div className="text-[3rem] font-medium">{title}</div>
          <div className="">{description}</div>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-4 w-[95%] mx-auto py-8">
        {products.map((product) => (
          <Link to={`/product/${product.variant._id}`}>
            <div className="bg-white p-4 flex flex-col gap-6 group">
              <img
                src={product.variant.images[0]}
                alt="product image"
                className="w-full h-[15rem] object-contain group-hover:scale-[1.1] transition-transform"
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
