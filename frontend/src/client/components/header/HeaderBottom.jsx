import { useContext } from "react";
import { CategoryContext } from "../../../contexts";

const HeaderBottom = () => {
  const { navbarCategories } = useContext(CategoryContext);
  return (
    <nav className="bg-white ">
      <ul className="flex w-[90%] mx-auto text-black">
        {navbarCategories.map((category) => (
          <>
            <div className="group">
              <div className="text--body">{category.title}</div>
            </div>
          </>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderBottom;
