import { Link } from "react-router-dom";
import { useSearch } from "./useSearch";
import { Spinner } from "phosphor-react";

const HeaderTop = () => {
  const { query, setQuery, open, setOpen, loading, suggessions, submitQuery } =
    useSearch();
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
            <form className="relative" onSubmit={submitQuery}>
              <input
                type="search"
                placeholder="Search for products..."
                className="w-[38rem] px-4 py-4 bg-neutral-200 text-[1.5rem] placeholder:text-neutral-600 placeholder:font-medium rounded-md focus:outline-none focus:ring-2 outline-none"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button className="absolute h-full right-4" type="submit">
                <i className="fa-solid fa-magnifying-glass text-[1.8rem] text-neutral-600 cursor-pointer"></i>
              </button>
              {open && (
                <div className="absolute top-18 p-6 bg-white text-black left-0 right-0 z-30">
                  {loading && (
                    <div className="flex items-center justify-center">
                      <Spinner className="w-[3rem] h-[3rem] animate-spin" />
                    </div>
                  )}
                  {suggessions.length > 0 ? (
                    suggessions.map((suggestion) => (
                      <Link
                        className="flex items-center justify-between p-1 hover:bg-neutral-200 cursor-pointer"
                        to={`/product/${suggestion.variant._id}`}
                        onClick={() => setOpen(false)}
                      >
                        <div>
                          {suggestion.product_title
                            .split(" ")
                            .slice(0, 7)
                            .join(" ")}
                        </div>
                        <img
                          src={suggestion.thumbnail}
                          alt={`${suggestion.product_title
                            .split(" ")
                            .slice(0, 4)
                            .join(" ")} image`}
                          className="w-[3rem] h-[3rem] object-cover"
                        />
                      </Link>
                    ))
                  ) : (
                    <div>No match found !</div>
                  )}
                </div>
              )}
            </form>
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
