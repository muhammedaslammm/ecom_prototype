import { useLocation } from "react-router-dom";
import adminRouteData from "../data/adminRouteData";

const useRoute = () => {
  const currentPath = useLocation();
  const routes = currentPath.pathname.split("/").filter(Boolean).slice(1);
  const current_route = routes[routes.length - 1];
  const currentPageRouteData = adminRouteData.find(
    (data) => data.slug === current_route
  );
  const breadcrumbs = routes.map((route) => {
    const match = adminRouteData.find((data) => data.slug === route);
    return match ? { title: match.breadcrumbs, path: match.path } : null;
  });
  return {
    page_title: currentPageRouteData?.page_title,
    icon_class: currentPageRouteData?.icon_class,
    breadcrumbs,
    routes_length: routes.length,
  };

  return;
};

export default useRoute;
