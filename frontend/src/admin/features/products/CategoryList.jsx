import { useState } from "react";
import useCategories from "../categories/useCategories";

const CategoryList = ({ categories }) => {
  const { getChildCategories } = useCategories();
  const [history, setHistory] = useState([{ categories: categories }]);
  let currentCategories = history[history.length - 1];

  const getChildrens = (id) => {
    const childrens = getChildCategories(id);
    if (childrens.length > 0)
      setHistory((prevHistory) => [...prevHistory, { categories: childrens }]);
  };
  const handleBackButton = () => {
    setHistory((prevHistory) => prevHistory.slice(0, -1));
  };

  return (
    <div className="absolute w-full shadow-sm bg-white p-4 hidden group-hover:block transition">
      {history.length > 1 && (
        <div
          className="cursor-pointer text-[1.4rem] p-2"
          onClick={handleBackButton}
        >
          {`<- Back`}
        </div>
      )}
      {currentCategories.categories.map((category) => (
        <div
          className="p-2 text-[1.4rem] hover:bg-neutral-200 cursor-pointer"
          onClick={() => getChildrens(category._id)}
        >
          {category.title}
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
