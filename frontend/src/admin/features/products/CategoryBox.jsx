import CategoryItem from "./CategoryItem";

const CategoryBox = ({ categories, level }) => {
  return (
    <div className="absolute w-full left-full right-0 p-4 bg-neutral-100 shadow-sm">
      {categories.map((category) => (
        <button
          name="category"
          className="block w-full text-start text-[1.4rem] p-[.5rem] cursor-pointer hover:bg-neutral-50"
        >
          <CategoryItem category={category} level={level} />
        </button>
      ))}
    </div>
  );
};
export default CategoryBox;
