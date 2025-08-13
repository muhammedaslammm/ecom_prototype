import { useContext, useState } from "react";
import { CategoryContext } from "../../../contexts";

const HeaderBottom = () => {
  const { navbarCategories, categories } = useContext(CategoryContext);

  // Track current parent category ID (null means top-level navbar view)
  const [currentParent, setCurrentParent] = useState(null);

  // Get categories for current level
  const currentCategories = currentParent
    ? categories.filter((cat) => String(cat.parent) === String(currentParent))
    : navbarCategories;

  // Handle category click
  const handleCategoryClick = (categoryId) => {
    setCurrentParent(categoryId);
  };

  // Go back to previous level
  const handleBack = () => {
    if (!currentParent) return;
    const parentCat = categories.find(
      (cat) => String(cat._id) === String(currentParent)
    );
    setCurrentParent(parentCat?.parent || null);
  };

  return (
    <nav className="bg-white">
      <ul className="flex gap-4 w-[90%] mx-auto text-black items-center">
        {currentParent && (
          <li className="cursor-pointer text-blue-500" onClick={handleBack}>
            ← Back
          </li>
        )}

        {currentCategories.map((category) => (
          <li
            key={category._id}
            className="cursor-pointer hover:text-blue-600"
            onClick={() => handleCategoryClick(category._id)}
          >
            {category.title}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderBottom;
