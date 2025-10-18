import { useEffect, useState } from "react";
import ProductlistBody from "../components/ProductlistBody";
import ProductlistSidebar from "../components/ProductlistSidebar";
import { useSearchParams } from "react-router-dom";

export const SearchResult = () => {
  let [products, setProducts] = useState([]);
  let sidebar = [];
  let categoryObject = {};

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    let url = `${BACKEND_URL}/api/products?filter=search&query=${encodeURIComponent(
      query
    )}`;
    let fetchProducts = async () => {
      try {
        let response = await fetch(url, {
          method: "GET",
          credentials: "include",
        });
        if (!response.ok)
          throw new Error("Failed to get products based on search");
        let data = await response.json();
        console.log("search results:", data.products);
        setProducts(data.products);
      } catch (error) {
        console.log("error:", error.message);
      }
    };
    fetchProducts();
  }, [query]);

  return (
    <main className="bg-pattern">
      <div className="product-list w-[90%] mx-auto my-4 pt-1 ">
        <div className="flex gap-6 my-2">
          <ProductlistSidebar sidebar={sidebar} />
          <ProductlistBody
            query={query}
            products={products}
            categoryObject={categoryObject}
          />
        </div>
      </div>
    </main>
  );
};
