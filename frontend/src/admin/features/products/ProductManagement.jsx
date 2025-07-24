import { useState } from "react";

import useCategories from "../categories/useCategories";
import CategoryBox from "./CategoryBox";
import useProducts from "./useProducts";
import CategoryList from "./CategoryList";

const ProductManagement = () => {
  // const { categories } = useCategories();
  // const { category } = useProducts(); // ✅ Add setter here
  // const [isOpen, setIsOpen] = useState(false);
  // const levelCategories = categories.filter((category) => category.level === 1);
  const { categories } = useCategories();
  const levelCategories = categories.filter((category) => category.level === 1);
  console.log("level categories:", levelCategories);

  return (
    <section className="flex gap-6 mb-8">
      <div className="w-[60%] a-section--box flex flex-col gap-2">
        <div className="space-y-2">
          <label className="a-section--title block">Product Title</label>
          <input
            type="text"
            name="name"
            placeholder="Eg: Samsung Galaxy S21"
            className="a-input"
          />
        </div>

        <div className="flex gap-2">
          <div className="w-full">
            <div className="a-section--title ">Brand Name</div>
            <input
              type="text"
              name="brand"
              placeholder="Eg: Samsung"
              className="a-input"
            />
          </div>
          <div className="w-full">
            <div className="a-section--title">Category</div>
            <div className="relative group">
              <div className="a-input cursor-pointer">Your category</div>
              {/* {isOpen && <CategoryBox categories={levelCategories} />} */}

              <CategoryList categories={levelCategories} />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="a-section--title block">Description</label>
          <textarea
            name="description"
            placeholder="Eg: A premium Android smartphone with AMOLED display..."
            rows={10}
            className="a-input"
          />
        </div>
      </div>

      {/* Right: Placeholder */}
      <div className="w-[40%] a-section--box">
        <div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default ProductManagement;
