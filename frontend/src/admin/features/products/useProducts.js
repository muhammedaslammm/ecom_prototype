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

  // auto generating product variants
  useEffect(() => {
    if (selectedCategory) {
      const product_variants = generateVariantsWithSKU({
        categoryTitle: selectedCategory,
        category_variants: categoryDataInputs.variants,
      });
      console.log("product variants:", product_variants);
      setProductVariants(product_variants);
    }
  }, [selectedCategory]);

  const handleCategory = (title) => {
    setSelectedCategory(title);
  };

  return {
    selectedCategory,
    handleCategory,
    categoryDataInputs,
    setCategoryDataInputs,
    productVariants,
    productErrors,
  };
};

export default useProducts;
