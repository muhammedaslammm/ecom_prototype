import { Link, useNavigate } from "react-router-dom";
import AdminElseBlock from "../../components/AdminElseBlock";
import useCategories from "./useCategories";

const Categories = () => {
  const { categories } = useCategories();

  return (
    <section className="a-section--container">
      <div>
        {categories.length ? (
          <div className="a-section--box w-full max-w-[90rem] min-h-screen h-full space-y-8">
            <div className="flex flex-row justify-between items-center gap-8 ">
              <div className="flex gap-4 w-full max-w-[40rem]">
                <div className="relative bg-white rounded-[1rem] w-full ">
                  <input
                    type="search"
                    name=""
                    id=""
                    className="a-input"
                    placeholder="Search here ..."
                  />
                  <button className="absolute right-0 top-[50%] -translate-[50%] text-neutral-600 text-[1.4rem]">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </div>
              </div>
              <Link
                className="a-text--button bg-black text-white"
                to="/admin/category-management/manage-category"
              >
                Add new category
              </Link>
            </div>
            <div className="table w-full border border-neutral-300 rounded-[.5rem] p-8">
              <div className="grid grid-cols-4 gap-50 pb-3 border-b border-neutral-300">
                <div className="a-text--table_head">category title</div>
                <div className="a-text--table_head text-center">level</div>
                <div className="a-text--table_head text-center">parent</div>
                <div className="a-text--table_head text-center">options</div>
              </div>
              {categories.map((c) => (
                <div className="grid grid-cols-4 gap-50 py-5 border-b border-neutral-300 last:border-b-0">
                  <div className="a-text--table_data">{c.title}</div>
                  <div className="a-text--table_data text-center">
                    {c.level}
                  </div>
                  <div className="a-text--table_data text-center">
                    {c.parent?.title ? c.parent.title : "-"}
                  </div>
                  <div className="a-text--table_data text-neutral-500 text-center">
                    <i className="fa-solid fa-gear"></i>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <AdminElseBlock
            title={"Add the first category"}
            section_note={"Start adding categories to group your products."}
            path={"/admin/category-management/manage-category"}
            button_text={"add category"}
          />
        )}
      </div>
    </section>
  );
};

export default Categories;
