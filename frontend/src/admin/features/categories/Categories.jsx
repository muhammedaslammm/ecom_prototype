import { useContext, useEffect, useState } from "react";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";
import { CategoryContext } from "../../../contexts";
import { formatDistanceToNow, parseISO } from "date-fns";
import AdminElseBlock from "../../components/AdminElseBlock";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const pageContentLimit = 10;
  const { getCategories } = useContext(CategoryContext);

  useEffect(() => {
    const fetchCategories = async () => {
      const filter = {
        filter: "any",
        page: pageNumber,
        limit: pageContentLimit,
      };
      const response = await getCategories(filter);
      if (response.success) {
        console.log("categories:", response.data.categories);
        setCategories(response.data.categories);
      } else {
        console.log("error:", response.message);
        toast.error(response.message);
      }
    };
    fetchCategories();
  }, [pageNumber]);

  return (
    <section className="a-section--container">
      <div>
        {categories.length ? (
          <div className="a-section--box w-full max-w-[90rem] min-h-screen h-full space-y-8">
            <div className="flex flex-row justify-between items-center gap-8 ">
              <div className="flex gap-4 w-full max-w-[40rem]">
                <form className="relative bg-white rounded-[1rem] w-full ">
                  <input
                    type="search"
                    name=""
                    id=""
                    className="a-input"
                    placeholder="Search here ..."
                  />
                  <button className="absolute right-0 top-[50%] -translate-[50%] text-neutral-500 text-[1.4rem]">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </form>
                <div className="filter bg-white w-full max-w-[10rem]">
                  <div className="text-[1.4rem] text-center capitalize border border-neutral-400 p-2 px-8 rounded-[.5rem]">
                    filter
                  </div>
                </div>
              </div>
              <Link
                className="a-text--button bg-black text-white"
                to="/admin/category-management/manage-category"
              >
                <i className="fa-solid fa-plus"></i> Add new category
              </Link>
            </div>
            <div className="table w-full border border-neutral-300 rounded-[1rem] p-8">
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
