import { Link, useLocation } from "react-router-dom";
import sidebarContent from "../data/sidebarContent";
import { CaretRight } from "phosphor-react";

const AdminBreadCrumps = () => {
  const { pathname } = useLocation();
  const breadcrumps = pathname
    .split("/")
    .filter(Boolean)
    .slice(1)
    .map((path) => {
      const matching_path = sidebarContent.find(
        (content) => content.slug === path
      );
      return matching_path;
    });
  console.log("bread-crumps", breadcrumps);
  return (
    breadcrumps.length > 1 && (
      <div className="flex items-center gap-4 text-[1.4rem] text-neutral-600">
        {breadcrumps.map((breadcrump) => (
          <>
            <Link to={breadcrump.slug} className="hover:text-neutral-900">
              {breadcrump.title}
            </Link>
            <div className="last:hidden">
              <CaretRight />
            </div>
          </>
        ))}
      </div>
    )
  );
};

export default AdminBreadCrumps;
