import { useLocation } from "react-router-dom";
import sidebarContent from "../data/sidebarContent";

const getPageTitle = () => {
  const { pathname } = useLocation();
  const path = pathname.split("/").filter(Boolean)[1];
  const title_object = sidebarContent.find((content) => content.slug === path);
  return { title: title_object.title, icon_class: title_object.icon_class };
};

export default getPageTitle;
