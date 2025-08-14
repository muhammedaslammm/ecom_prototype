import { useContext } from "react";
import { CategoryContext } from "../../../contexts";

const HeaderBottom = () => {
  const { categories, navbarCategories } = useContext(CategoryContext);
  return <div></div>;
};

export default HeaderBottom;
