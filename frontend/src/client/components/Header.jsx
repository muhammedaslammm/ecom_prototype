import { useContext, useState } from "react";
import categories from "../../data/categories";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { UserContext } from "../../contexts";
import { toast } from "sonner";

const Header = ({ state }) => {
  const { pathname } = useLocation();
  const [page] = pathname.split("/").filter(Boolean);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <header className="bg-neutral-50">
      {page === "home" && (
        <div className="text-white bg-gradient-to-r from-[#84a7ab] to-[#cfb97c] text-center text-[1.6rem] font-medium py-3">
          All new projectors and laptops are out here in the store. grab now!
        </div>
      )}

      <div className="header w-full flex justify-between">
        <div className="left flex items-center gap-6">
          <Link to={`/home`}>
            <div className="logo--header">prototype</div>
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
          <ul className="options flex gap-[2.8rem] text-[1.5rem] font-semibold text-neutral-800">
            <Link to={`/cart`} className="capitalize cursor-pointer">
              cart
            </Link>
            <Link to={`/wishlist`} className="capitalize cursor-pointer">
              wishlist
            </Link>
            <Link to={`/profile`} className="capitalize cursor-pointer">
              profile
            </Link>
            <li className="capitalize cursor-pointer">
              {state ? "logout" : "sign in"}
            </li>
          </ul>
        </nav>
      </div>

      <nav className="bg-white border-t shadow-[0_12px_rgba(0,0,0)] border-neutral-200">
        <ul className="flex w-[90%] mx-auto text-black">
          {categories.map((category) => (
            <div className="relative group" key={category.slug}>
              <div className="capitalize text-[1.5rem] py-[1.2rem] px-4 cursor-pointer hover:bg-[#e3e3e3] transition">
                {category.slug === "home" ? (
                  <Link to={`/${category.slug}`}>{category.name}</Link>
                ) : (
                  <span>{category.name}</span>
                )}
              </div>

              {category.sub_categories && (
                <div className="absolute border border-neutral-200 flex flex-col flex-wrap bg-white w-[70rem] h-[30rem] py-4 px-6 opacity-0 pointer-events-none translate-y-[1.5rem] group-hover:opacity-100 group-hover:translate-y-0 duration-200 ease-out group-hover:pointer-events-auto z-50">
                  {category.sub_categories.map((sub_category) => (
                    <div
                      key={sub_category.slug}
                      className="text-[1.7rem] mb-[1rem] flex flex-col gap-[.8rem]"
                    >
                      <div className="text-black font-medium capitalize cursor-pointer">
                        {sub_category.name}
                      </div>
                      {sub_category.sub_categories && (
                        <ul className="flex flex-col gap-[.5rem]">
                          {sub_category.sub_categories.map((sub_category_2) => (
                            <Link
                              key={sub_category_2.slug}
                              className="text-gray-500 hover:text-gray-800 capitalize cursor-pointer"
                              to={`/${category.slug}/${sub_category.slug}/${sub_category_2.slug}`}
                            >
                              {sub_category_2.name}
                            </Link>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
