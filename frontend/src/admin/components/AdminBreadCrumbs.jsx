import { Link } from "react-router-dom";
import { CaretRight } from "phosphor-react";

const AdminBreadCrumbs = ({ data, length }) => {
  return (
    length > 1 && (
      <div className="flex items-center gap-4 text-[1.4rem] text-neutral-500 ">
        {data.map((d) => (
          <>
            <Link to={d.path}>{d.title}</Link>
            <div className="last:hidden">
              <CaretRight />
            </div>
          </>
        ))}
      </div>
    )
  );
};

export default AdminBreadCrumbs;
