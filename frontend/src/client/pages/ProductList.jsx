import { useLocation, useParams } from "react-router-dom";
import BreadCrumps from "../components/BreadCrumps";
import ProductlistSidebar from "../components/ProductlistSidebar";
import ProductlistBody from "../components/ProductlistBody";
import getCategories from "../utils/getCategories";
import { useEffect, useState } from "react";

const ProductList = () => {
  const { category } = useParams();
  const [categoryObject, setCategoryObject] = useState(null);
  const [products, setProducts] = useState([]);
  const [sidebar, setSidebar] = useState([]);
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL_2;

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(
          `${BACKEND_URL}/api/products?filter=product-list&category=${category}`,
          {
            method: "GET",
          }
        );
        let data = await response.json();
        if (!response.ok) throw new Error(error.message);
        else {
          console.log("product list from backend:", data.products);
          setProducts(data.products);
        }
      } catch (error) {
        console.log("error:", error.message);
      }
    };
    getProducts();
  }, [category]);

  useEffect(() => {
    const getCategory = async () => {
      try {
        let response = await fetch(
          `${BACKEND_URL}/api/categories/${category}?filter=product-list`,
          { method: "GET" }
        );
        let data = await response.json();
        if (!response.ok) throw new Error(data.message);
        else {
          setCategoryObject(data.category);
        }
      } catch (error) {
        console.error(error.message);
      }
    };
    getCategory();
  }, [category]);

  useEffect(() => {
    let brands = [...new Set(products.map((product) => product.brand))];
    let obj1 = {
      head: "Brands",
      data: brands,
    };
    let obj2 = {
      head: "Colors",
      data: ["Red", "Black", "White", "Silver", "Maroon"],
    };
    setSidebar([obj1, obj2]);
  }, [products]);

  return (
    <main className="bg-pattern">
      <div className="product-list w-[90%] mx-auto my-4 pt-1 ">
        <div className="flex gap-6 my-2">
          <ProductlistSidebar sidebar={sidebar} />
          <ProductlistBody
            products={products}
            categoryObject={categoryObject}
          />
        </div>
      </div>
    </main>
  );
};

export default ProductList;
