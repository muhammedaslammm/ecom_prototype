import { useEffect, useState } from "react";
import { CategoryContext } from "../contexts";
import { toast } from "sonner";

const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [navbarCategories, setNavbarCategories] = useState([]);

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL_1;
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          `${BACKEND_URL}/api/categories?filter=all`,
          {
            method: "GET",
          }
        );
        const data = await response.json();
        if (!response.ok) throw new Error(data.message);
        setCategories(data.categories);
      } catch (error) {
        console.log(
          "category fetching error in category provider.",
          error.message
        );
        toast.warning("Category fetching failed");
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    let matching_categories = categories.filter((category) => category.navbar);
    setNavbarCategories(matching_categories);
  }, [categories]);

  const values = { categories, navbarCategories };
  return (
    <CategoryContext.Provider value={values}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
