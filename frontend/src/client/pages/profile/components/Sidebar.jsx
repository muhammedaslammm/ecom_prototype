import { UserContext } from "@/provider/UserContext";
import { useContext } from "react";
import { User, Bag, Cube, Lock } from "phosphor-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { user, logoutUser } = useContext(UserContext);
  return (
    <aside className="p-4 border bg-white w-1/6 flex flex-col justify-between gap-8">
      <div className="flex flex-col">
        <Link className="text--links hover:bg-neutral-200 transition-colors flex gap-3 items-center">
          <User className="w-[1.8rem] h-[1.8rem]" weight="bold" />
          Profile
        </Link>

        {user && (
          <>
            <Link className="text--links hover:bg-neutral-200 transition-colors flex gap-3 items-center">
              <Bag className="w-[1.8rem] h-[1.8rem]" weight="bold" />
              Wishlist
            </Link>
            <Link className="text--links hover:bg-neutral-200 transition-colors flex gap-3 items-center">
              <Cube className="w-[1.8rem] h-[1.8rem]" weight="bold" />
              Orders
            </Link>
            <div
              className="text--links hover:bg-neutral-200  transition-colors flex gap-3 items-center text-red-600"
              onClick={logoutUser}
            >
              <Lock className="w-[1.8rem] h-[1.8rem]" weight="bold" />
              Logout
            </div>
          </>
        )}
      </div>
      {user ? (
        <div className="flex items-center gap-3 font-medium px-2 text-[1.4rem]">
          <User className="w-[1.8rem] h-[1.8rem]" weight="bold" />
          {user?.username}
        </div>
      ) : (
        <Link
          className="text-[1.3rem] bg-[#b00015] text-white font-medium py-2 text-center"
          to="/register/log-in"
        >
          Log In
        </Link>
      )}
    </aside>
  );
};

export default Sidebar;
