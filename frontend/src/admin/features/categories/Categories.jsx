import { Link, useNavigate } from "react-router-dom";
import AdminElseBlock from "../../components/AdminElseBlock";
import { DotsThreeVertical } from "phosphor-react";
import { useState, useEffect, useRef, useContext } from "react";
import useCategories from "./useCategories";

const Categories = () => {
  const { deleteCategory, categories } = useCategories();
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`category-management?action=update&category_id=${id}`);
  };

  return (
    <section className="a-section--container pb-8">
      <div>
        {categories.length ? (
          <div className="a-section--box w-full max-w-full min-h-[100svh] flex flex-col gap-2">
            <div className="flex flex-row justify-between items-center gap-4">
              <div className="flex gap-4 w-full max-w-[70rem]">
                <div className="bg-white w-full">
                  <input
                    type="search"
                    className="bg-neutral-100 w-full py-[.8rem] px-4 text-[1.3rem] font-medium rounded-[.3rem]"
                    placeholder="Search category here ..."
                  />
                  {/* <button className="absolute right-4 top-[50%] -translate-y-1/2 text-neutral-600 text-[1.4rem]">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button> */}
                </div>
                <button className="search a-text--button text-black bg-neutral-200">
                  Search
                </button>
              </div>
              <Link
                className="a-text--button !text-[1.2rem] !normal-case  text-white bg-[#176eb1] hover:bg-black !py-3 transition"
                to="category-management?action=create"
              >
                Add new category
              </Link>
            </div>

            {/* Table */}
            <div className="table w-full border-0 border-neutral-300 bg-white">
              <div className="grid grid-cols-4 gap-8 py-4 px-4 border-0 border-neutral-200 text-[1.3rem] font-semibold text-neutral-700">
                <div>Category Title</div>
                <div className="text-center">Level</div>
                <div className="text-center">Parent</div>
                <div className="text-center">Actions</div>
              </div>

              {categories.map((c) => (
                <div
                  key={c._id}
                  className="grid grid-cols-4 gap-8 py-4 px-4 border-b-0 border-neutral-200 last:border-b-0 text-[1.3rem] text-neutral-800 items-center even:bg-neutral-100"
                >
                  <div className="truncate font-medium">{c.title}</div>
                  <div className="text-center">{c.level}</div>
                  <div className="text-center font-medium">
                    {c.parent?.title ? c.parent.title : "-"}
                  </div>

                  {/* 3-dot button with dropdown */}
                  <div className="text-center relative" ref={dropdownRef}>
                    <button
                      className="mx-auto cursor-pointer block"
                      onClick={() =>
                        setOpenDropdownId(
                          openDropdownId === c._id ? null : c._id
                        )
                      }
                    >
                      <DotsThreeVertical size={20} weight="bold" />
                    </button>

                    {openDropdownId === c._id && (
                      <div className="absolute right-0 mt-2 w-[8rem] bg-white border border-neutral-200 rounded shadow-md z-10">
                        <ul className="flex flex-col text-[1.2rem] text-left">
                          <li
                            onClick={() => handleEdit(c._id)}
                            className="px-4 py-2 hover:bg-neutral-100 cursor-pointer"
                          >
                            Edit
                          </li>
                          <li
                            onClick={() => deleteCategory(c._id)}
                            className="px-4 py-2 hover:bg-neutral-100 cursor-pointer"
                          >
                            Delete
                          </li>
                          <li
                            onClick={() => setOpenDropdownId(null)}
                            className="px-4 py-2 hover:bg-neutral-100 text-blue-600 cursor-pointer"
                          >
                            Back
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <AdminElseBlock
            title="Add the first category"
            section_note="Start adding categories to group your products."
            path="category-management?action=create"
            button_text="add category"
          />
        )}
      </div>
    </section>
  );
};

export default Categories;
