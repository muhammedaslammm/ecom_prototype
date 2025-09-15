import { useState } from "react";
import { Link } from "react-router-dom";
import AdminElseBlock from "../../components/AdminElseBlock";
import useProducts from "./useProducts";
import ShimmerContainer from "../../components/ShimmerContainer";

const Products = () => {
  let { products } = useProducts();
  return (
    <section className="a-section--container">
      <div>
        {products === null ? (
          <ShimmerContainer />
        ) : products.length ? (
          <div className="a-section--box w-full max-w-full min-h-[88svh] flex flex-col gap-2">
            <div className="flex flex-row justify-between items-center gap-4">
              <div className="flex gap-4 w-full max-w-[50rem]">
                <div className="bg-white w-full">
                  <input
                    type="search"
                    className="bg-neutral-100 w-full py-[.8rem] px-4 text-[1.3rem] font-medium rounded-[.3rem]"
                    placeholder="Search category here ..."
                  />
                </div>
                <button className="search a-text--button text-black bg-neutral-200">
                  Search
                </button>
              </div>
              <Link
                className="a-text--button !text-[1.2rem] text-white bg-black/80 hover:bg-black !py-3 transition !rounded-[.3rem]"
                to="product-management"
              >
                Add new product
              </Link>
            </div>
            <div className="w-full border-0 border-neutral-300 bg-white">
              <div className="grid grid-cols-4 py-4 px-4 border-0 border-neutral-200 text-[1.3rem] font-semibold text-neutral-700">
                <div>Product Title</div>
                <div>Category</div>
                <div className="">Variants</div>
              </div>
              {products.map((product) => (
                <div className="py-4 px-4 border-b-0 border-neutral-200 last:border-b-0 text-[1.3rem] text-neutral-800 items-center even:bg-neutral-100">
                  <div>{product.product_title}</div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <AdminElseBlock
            title={"Add the first product"}
            section_note={
              "Start adding your products in the application for you customers to access."
            }
            path={"product-management"}
            button_text={"add product"}
          />
        )}{" "}
      </div>
    </section>
  );
};

export default Products;
