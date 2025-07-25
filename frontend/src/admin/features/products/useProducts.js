import { useState } from "react";

const useProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categoryDataInputs, setCategoryDataInputs] = useState({
    variants: [],
    sections: [],
  });

  const handleCategory = (id) => {
    setSelectedCategory(id);
  };

  return {
    selectedCategory,
    handleCategory,
    categoryDataInputs,
    setCategoryDataInputs,
  };
};

export default useProducts;
