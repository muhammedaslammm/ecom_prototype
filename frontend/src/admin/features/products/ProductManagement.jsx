// import { useState } from "react";

// import useCategories from "../categories/useCategories";
// import CategoryBox from "./CategoryBox";
// import CategoryItem from "./CategoryItem";
// import useProducts from "./useProducts";

// const ProductManagement = () => {
//   const { categories } = useCategories();
//   const { selectedCategory } = useProducts();
//   const [isOpen, setIsOpen] = useState(false);
//   const levelCategories = categories.filter((category) => category.level === 1);

//   return (
//     <section className="flex gap-6 mb-8">
//       <div className="w-[60%] a-section--box flex flex-col gap-2">
//         <div className="space-y-2">
//           <label className="a-section--title block">Product Title</label>
//           <input
//             type="text"
//             name="name"
//             placeholder="Eg: Samsung Galaxy S21"
//             className="a-input"
//           />
//         </div>

//         <div className="flex gap-2">
//           <div className="w-full">
//             <div className="a-section--title ">Brand Name</div>
//             <input
//               type="text"
//               name="brand"
//               placeholder="Eg: Samsung"
//               className="a-input"
//             />
//           </div>
//           <div className="w-full">
//             <div className="a-section--title">Category</div>
//             <div className="relative">
//               <div className="a-input" onClick={() => setIsOpen(!isOpen)}>
//                 {selectedCategory}
//               </div>
//               {isOpen && (
//                 <div className="absolute top-full w-full left-0 min-w-[200px] z-50">
//                   <CategoryBox categories={levelCategories} level={0} />
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         <div className="space-y-2">
//           <label className="a-section--title block">Description</label>
//           <textarea
//             name="description"
//             placeholder="Eg: A premium Android smartphone with AMOLED display..."
//             rows={10}
//             className="a-input"
//           />
//         </div>
//       </div>

//       {/* Right: Placeholder */}
//       <div className="w-[40%] a-section--box">
//         <div>
//           <div></div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductManagement;
import { useState } from "react";

import useCategories from "../categories/useCategories";
import CategoryBox from "./CategoryBox";
import CategoryItem from "./CategoryItem";
import useProducts from "./useProducts";

const ProductManagement = () => {
  const { categories } = useCategories();
  const { selectedCategory, setSelectedCategory } = useProducts(); // ✅ Add setter here
  const [isOpen, setIsOpen] = useState(false);
  const levelCategories = categories.filter((category) => category.level === 1);

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
            <div className="relative">
              <div
                className="a-input cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              >
                {selectedCategory}
              </div>
              {isOpen && (
                <div className="absolute top-full w-full left-0 min-w-[200px] z-50">
                  <CategoryBox
                    categories={levelCategories}
                    onSelect={(title) => {
                      setSelectedCategory(title); // ✅ set category
                      setIsOpen(false); // ✅ close box
                    }}
                  />
                </div>
              )}
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
