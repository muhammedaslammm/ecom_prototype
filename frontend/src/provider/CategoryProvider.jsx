import { useEffect, useState } from "react";
import { CategoryContext } from "../contexts";
import brandCategories from "../data/brandCategories";

const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const backendURL = import.meta.env.VITE_BACKEND_URL;

  //

  const getCategories = async (filter) => {
    const query = new URLSearchParams(filter).toString();
    try {
      const response = await fetch(`${backendURL}?${query}`, {
        method: "GET",
      });
      const data = await response.json();
      if (response.ok) {
        return {
          success: true,
          data: data.data,
        };
      }
    } catch (error) {
      return { success: false, message: error.message };
    }
  };

  const createCategory = async (category) => {
    try {
      const response = await fetch("http://localhost:4000/api/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(category),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message);
      else {
        console.log(data.message);
        setCategories((prevCategories) => {
          let categoires = [...prevCategories];
          categoires.push(data.category);
          return categoires;
        });
        return { success: true, message: data.message };
      }
    } catch (error) {
      return { success: false, message: error.message };
    }
  };

  const getBrandCategories = () => {
    try {
      const value = true;
      if (value) return { success: true, categories: brandCategories };
      else {
        throw new Error("failed to get branded categories");
      }
    } catch (error) {
      return { success: false, message: "fetch failed" };
    }
  };

  const values = {
    categories,
    createCategory,
    getCategories,
    getBrandCategories,
  };

  return (
    <CategoryContext.Provider value={values}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
