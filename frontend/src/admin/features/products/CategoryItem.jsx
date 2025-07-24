import useCategories from "../categories/useCategories";
import CategoryBox from "./CategoryBox";

const CategoryItem = ({ category, level }) => {
  const { getChildCategories } = useCategories();
  const categories = getChildCategories(category._id);
  return (
    <div className="relative">
      <button>{category.title}</button>
      <CategoryBox categories={categories} level={level + 1} />
    </div>
  );
};

export default CategoryItem;
