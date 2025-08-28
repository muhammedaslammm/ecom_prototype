import { useEffect, useState } from "react";
import { generateVariantsWithSKU } from "./utils/generateVariantsWithSKU";

const useProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categoryDataInputs, setCategoryDataInputs] = useState({
    variants: [],
    sections: [],
  });
  const [productVariants, setProductVariants] = useState([]);
  const [productErrors, setProductErrors] = useState({});
  const [categories, setCategories] = useState([]);
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL_1;

  // auto generating product variants
  useEffect(() => {
    if (selectedCategory) {
      const product_variants = generateVariantsWithSKU({
        categoryTitle: selectedCategory,
        category_variants: categoryDataInputs.variants,
      });
      if (product_variants.length)
        setCategoryDataInputs((prev) => ({
          ...prev,
          variants: product_variants,
        }));
      console.log("product variants:", product_variants);
    }
  }, [selectedCategory]);

  useEffect(() => {
    const getCategories = async () => {
      const response = await fetch(
        `${BACKEND_URL}/api/categories?filter=all-category`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setCategories(data.categories);
    };
    getCategories();
  }, []);

  const handleCategory = (title) => {
    setSelectedCategory(title);
  };

  const getChildCategories = (id) => {
    return categories.filter((category) => {
      if (category.parent && category.parent._id === id) return category;
    });
  };

  return {
    categories,
    selectedCategory,
    handleCategory,
    categoryDataInputs,
    setCategoryDataInputs,
    productVariants,
    productErrors,
    getChildCategories,
  };
};

export default useProducts;
