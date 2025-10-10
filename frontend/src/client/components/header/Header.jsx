import { useLocation } from "react-router-dom";
import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";
import { HeaderBottom2 } from "./HeaderBottom2";

const Header = ({ state }) => {
  const { pathname } = useLocation();
  const [page] = pathname.split("/").filter(Boolean);
  return (
    <header
      className="fixed left-0 right-0 top-0 z-100"
      style={{ backgroundColor: "white" }}
    >
      <div
        className="text-white text-center text-[1.6rem] font-medium py-[.5rem]"
        style={{ backgroundColor: "#b00015" }}
      >
        New Equipments are available in 10% discount
      </div>
      <HeaderTop />
      <HeaderBottom2 />
    </header>
  );
};

export default Header;
