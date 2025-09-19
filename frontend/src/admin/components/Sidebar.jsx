import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import sidebarContent from "../data/sidebarContent";
import adminRouteData from "../data/adminRouteData";

const Sidebar = () => {
  const { pathname } = useLocation();
  const slug = pathname.split("/").filter(Boolean)[1];
  const [currentSlug, setCurrentSlug] = useState(slug);
  return (
    <aside className="admin__sidebar fixed top-0 h-screen left-0 w-[25rem] bg-neutral-200 flex flex-col justify-between p-8">
      <ul className="flex flex-col">
        {adminRouteData.map(
          (data, index) =>
            data.sidebar && (
              <Link
                key={index}
                className={`a-text--sidebar flex items-baseline gap-4 ${
                  data.slug === currentSlug ? "bg-neutral-100" : ""
                }`}
                to={data.path}
                onClick={() => setCurrentSlug(data.slug)}
              >
                <i className={`${data?.icon_class}`}></i>
                {data.sidebar_title}
              </Link>
            )
        )}
      </ul>
    </aside>
  );
};

export default Sidebar;
