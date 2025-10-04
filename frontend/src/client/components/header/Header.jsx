import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { CategoryContext } from "../../../contexts";
import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";

const Header = ({ state }) => {
  const { pathname } = useLocation();
  const [page] = pathname.split("/").filter(Boolean);
  return (
    <header className="" style={{ backgroundColor: "white" }}>
      {page === "home" && (
        <div
          className="text-white text-center text-[1.6rem] font-medium py-[.5rem]"
          style={{ backgroundColor: "#b00015" }}
        >
          New Equipments are available in 10% discount
        </div>
      )}
      <HeaderTop />
      <HeaderBottom />
    </header>
  );
};

export default Header;
