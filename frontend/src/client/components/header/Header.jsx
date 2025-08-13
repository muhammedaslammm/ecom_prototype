import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { CategoryContext } from "../../../contexts";
import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";

const Header = ({ state }) => {
  const { pathname } = useLocation();
  const [page] = pathname.split("/").filter(Boolean);
  return (
    <header className="bg-neutral-50">
      {page === "home" && (
        <div className="text-white bg-gradient-to-r from-[#84a7ab] to-[#cfb97c] text-center text-[1.6rem] font-medium py-3">
          All new projectors and laptops are out here in the store. grab now!
        </div>
      )}
      <HeaderTop />
      <HeaderBottom />
    </header>
  );
};

export default Header;
