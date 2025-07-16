import { Link } from "react-router-dom";

const BreadCrumps = ({ path_segments }) => {
  let fullPath = "";
  return path_segments.map((path, index) => {
    fullPath = "/" + path;
    return (
      <span className="text-[1.4rem] text-gray-700 group" key={path}>
        <Link to={fullPath} className="group-hover:text-sky-700">
          {path}
        </Link>
        {index < path_segments.length - 1 && " > "}
      </span>
    );
  });
};

export default BreadCrumps;
