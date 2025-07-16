import { useLocation } from "react-router-dom";
import BreadCrumps from "../components/BreadCrumps";
import ProductlistSidebar from "../components/ProductlistSidebar";
import ProductlistBody from "../components/ProductlistBody";
import getCategories from "../utils/getCategories";
import { useEffect, useState } from "react";
import getProducts from "../utils/getProducts";
import getBanner from "../utils/getBanner";
import getProductsCount from "../utils/getProductsCount";

const ProductList = () => {
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("");
  const [products, setProducts] = useState([]);
  const [productsCountMsg, setProductsCoutMsg] = useState("");
  const [selectedLabels, setSelectedLabels] = useState([]);

  const { pathname } = useLocation();
  const path_segments = pathname.split("/").filter(Boolean);
  const slug = path_segments[path_segments.length - 1];
  const categories = getCategories(path_segments);
  const banner = getBanner(slug);
  const sidebar_content = [categories];

  useEffect(() => {
    setFilters((prevFilter) => ({
      ...prevFilter,
      category: [slug],
    }));
  }, [slug]);

  useEffect(() => {
    const filteredProducts = getProducts(filters, sort);
    const { countMessage } = getProductsCount(filteredProducts);
    setProducts(filteredProducts);
    setProductsCoutMsg(countMessage);
  }, [filters, sort]);

  const manageFilter = (filterLabel, name, slug) => {
    setSelectedLabels((prevLabels) => {
      if (prevLabels.includes(name)) {
        return prevLabels.filter((label) => label !== name);
      }
      return [...prevLabels, name];
    });
    setFilters((prevFilters) => {
      let filterValue;
      if (prevFilters[filterLabel].includes(slug)) {
        filterValue = prevFilters[filterLabel].filter(
          (value) => value !== slug
        );
      } else {
        filterValue = [...prevFilters[filterLabel], slug];
      }
      return {
        ...prevFilters,
        [filterLabel]: filterValue,
      };
    });
  };
  const handleSorting = (value) => {
    setSort(value);
  };

  return (
    <div className="product-list w-[90%] mx-auto my-4">
      <BreadCrumps path_segments={path_segments} />
      <div className="flex gap-6 my-2">
        <ProductlistSidebar
          sidebar_content={sidebar_content}
          manageFilter={manageFilter}
          selectedLabels={selectedLabels}
        />
        <ProductlistBody
          slug={slug}
          products={products}
          image={banner.image}
          countmsg={productsCountMsg}
          handleSorting={handleSorting}
          sort={sort}
        />
      </div>
    </div>
  );
};

export default ProductList;
