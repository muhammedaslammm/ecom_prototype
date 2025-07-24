import { useState } from "react";

const useProducts = () => {
  const [category, setCategory] = useState("Select one category");

  return { category };
};

export default useProducts;
