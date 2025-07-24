import { useState } from "react";

const useProducts = () => {
  const [selectedCategory, setProductCategory] = useState(
    "Select one category"
  );
  return { selectedCategory };
};

export default useProducts;
