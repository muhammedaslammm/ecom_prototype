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
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL_1;

  //   understand how searching works. does, query matches and shows all the products or just one product for n number of products!
  //   also check whether the current workflow is correct or not. when a search suggession is clicked, the query is again used in backend to get all matching products.

  useEffect(() => {
    let url = `${BACKEND_URL}/api/products?filter=search&query=${encodeURIComponent(
      query
    )}`;
    let fetchProducts = async () => {
      try {
        let response = await fetch(url, {
          method: "GET",
        });
        if (!response.ok)
          throw new Error("Failed to get products based on search");
        let data = await response.json();
        setProducts(data.products);
      } catch (error) {}
    };
    fetchProducts();
  }, [query]);

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
