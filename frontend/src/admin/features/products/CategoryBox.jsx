// import CategoryItem from "./CategoryItem";

// const CategoryBox = ({ categories, level }) => {
//   return (
//     <div className="absolute w-full left-full right-0 p-4 bg-neutral-100 shadow-sm">
//       {categories.map((category) => (
//         <button
//           name="category"
//           className="block w-full text-start text-[1.4rem] p-[.5rem] cursor-pointer hover:bg-neutral-50"
//         >
//           <CategoryItem category={category} level={level} />
//         </button>
//       ))}
//     </div>
//   );
// };
// export default CategoryBox;
import { useState } from "react";
import useCategories from "../categories/useCategories";

const CategoryBox = ({ categories, level }) => {
  const { getChildCategories } = useCategories();
  const [history, setHistory] = useState([{ level, categories }]);

  const current = history[history.length - 1];

  const handleCategoryClick = (category) => {
    const children = getChildCategories(category._id);
    if (children.length > 0) {
      setHistory([
        ...history,
        { level: category.level + 1, categories: children },
      ]);
    } else {
      alert(`Selected: ${category.title}`);
      // You can set the selected category here using a shared state or props
    }
  };

  const handleBack = () => {
    if (history.length > 1) {
      setHistory(history.slice(0, -1));
    }
  };

  return (
    <div className="absolute w-full left-0 p-4 bg-neutral-100 shadow-sm min-w-[200px] z-50">
      {history.length > 1 && (
        <div
          onClick={handleBack}
          className="block w-full text-start text-[1.4rem] font-medium p-2 cursor-pointer text-blue-600 hover:bg-neutral-200"
        >
          ← Back
        </div>
      )}
      {current.categories.map((category) => (
        <div
          key={category._id}
          onClick={() => handleCategoryClick(category)}
          className="block w-full text-start text-[1.4rem] p-[.5rem] cursor-pointer hover:bg-neutral-50"
        >
          {category.title}
        </div>
      ))}
    </div>
  );
};

export default CategoryBox;
