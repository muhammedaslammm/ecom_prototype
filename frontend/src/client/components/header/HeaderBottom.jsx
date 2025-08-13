import { useContext } from "react";
import { CategoryContext } from "../../../contexts";

const HeaderBottom = () => {
  const { navbarCategories, categories } = useContext(CategoryContext);
  return (
    <nav className="bg-white">
      <ul className="flex w-[90%] mx-auto text-black">
        {navbarCategories.map((category) => (
          <div>{category.title}</div>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderBottom;
