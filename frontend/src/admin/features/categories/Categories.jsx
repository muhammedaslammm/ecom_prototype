import { Link } from "react-router-dom";
import AdminElseBlock from "../../components/AdminElseBlock";
import useCategories from "./useCategories";
import { DotsThreeVertical } from "phosphor-react";

const Categories = () => {
  const { categories } = useCategories();

  return (
    <section className="a-section--container pb-8">
      <div>
        {categories.length ? (
          <div className="a-section--box w-full max-w-full min-h-[100svh] flex flex-col gap-2">
            <div className="flex flex-row justify-start items-center gap-4">
              <div className="flex gap-4 w-full max-w-[30rem]">
                <div className="relative bg-white w-full">
                  <input
                    type="search"
                    className="bg-neutral-100 w-full py-[.8rem] px-4 text-[1.3rem] font-medium rounded-[.3rem]"
                    placeholder="Search category here ..."
                  />
                  <button className="absolute right-4 top-[50%] -translate-y-1/2 text-neutral-600 text-[1.4rem]">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </div>
              </div>
              <Link
                className="a-text--button !text-[1.2rem] !normal-case bg-neutral-100"
                to="/admin/category-management/manage-category"
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
                  <div className="text-center">
                    {c.parent?.title ? c.parent.title : "-"}
                  </div>
                  <div className="text-center">
                    <DotsThreeVertical
                      size={20}
                      weight="bold"
                      className="mx-auto cursor-pointer"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <AdminElseBlock
            title="Add the first category"
            section_note="Start adding categories to group your products."
            path="/admin/category-management/manage-category"
            button_text="add category"
          />
        )}
      </div>
    </section>
  );
};

export default Categories;
