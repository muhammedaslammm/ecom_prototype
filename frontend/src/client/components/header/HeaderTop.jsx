import { Link } from "react-router-dom";

const HeaderTop = () => {
  return (
    <div className="border border-neutral-300">
      <div className="header w-full flex justify-between">
        <div className="left flex items-center gap-8">
          <Link to={`/home`}>
            <div className="leading-[2.4rem] uppercase text-[2.5rem]">
              <span className="text-[#b00015] font-semibold">prototype</span>{" "}
              <br /> <span className="text-black font-medium">site</span>
            </div>
          </Link>
          <div className="flex items-center space-x-3">
            <div className="relative">
              <input
                type="search"
                placeholder="Search for products..."
                className="w-[38rem] px-4 py-4 bg-neutral-200 text-[1.5rem] placeholder:text-neutral-600 placeholder:font-medium rounded-md focus:outline-none focus:ring-2 outline-none"
              />
              <button className="absolute h-full right-4">
                <i className="fa-solid fa-magnifying-glass text-[1.8rem] text-neutral-600 cursor-pointer"></i>
              </button>
            </div>
          </div>
        </div>

        <nav>
          <ul className="options flex gap-[2.8rem] text-[1.6rem] font-medium text-neutral-800">
            <Link to={`/cart`} className="capitalize cursor-pointer">
              cart
            </Link>
            <Link to={`/wishlist`} className="capitalize cursor-pointer">
              wishlist
            </Link>
            <Link to={`/profile`} className="capitalize cursor-pointer">
              profile
            </Link>
            <div>
              <button>
                <span
                  className="py-2 px-6"
                  style={{ backgroundColor: "#b00015", color: "white" }}
                >
                  Sign Up
                </span>
                <span
                  className="py-2 px-6"
                  style={{
                    backgroundColor: "white",
                    color: "black",
                  }}
                >
                  Sign In
                </span>
              </button>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HeaderTop;
