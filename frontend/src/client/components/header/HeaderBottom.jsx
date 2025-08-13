// import { useContext, useState } from "react";
// import { CategoryContext } from "../../../contexts";

// const HeaderBottom = () => {
//   const { navbarCategories, categories } = useContext(CategoryContext);

//   const [openCategory, setOpenCategory] = useState(null); // level 1
//   const [openSubCategory, setOpenSubCategory] = useState(null); // level 2

//   // Get children of a category
//   const getChildren = (parentId) => {
//     return categories.filter(
//       (cat) =>
//         cat.parent && (cat.parent._id === parentId || cat.parent === parentId)
//     );
//   };

//   return (
//     <nav className="bg-gray-900 text-white relative">
//       {/* Top-level categories - horizontal */}
//       <ul className="flex gap-6 px-4 py-3">
//         {navbarCategories.map((cat) => {
//           const children = getChildren(cat._id);
//           return (
//             <li
//               key={cat._id}
//               className="cursor-pointer hover:text-yellow-400 relative"
//               onClick={() =>
//                 setOpenCategory(openCategory === cat._id ? null : cat._id)
//               }
//             >
//               {cat.title}

//               {/* 1st Level Dropdown */}
//               {openCategory === cat._id && children.length > 0 && (
//                 <ul className="absolute top-full left-0 bg-white text-black shadow-lg min-w-[200px] py-2 z-50">
//                   {children.map((child) => {
//                     const subChildren = getChildren(child._id);
//                     return (
//                       <li
//                         key={child._id}
//                         className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex justify-between items-center"
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           setOpenSubCategory(
//                             openSubCategory === child._id ? null : child._id
//                           );
//                         }}
//                       >
//                         <span>{child.title}</span>
//                         {subChildren.length > 0 && (
//                           <span className="text-gray-500">{">"}</span>
//                         )}

//                         {/* 2nd Level Dropdown */}
//                         {openSubCategory === child._id &&
//                           subChildren.length > 0 && (
//                             <ul className="absolute top-0 left-full bg-white text-black shadow-lg min-w-[200px] py-2 z-50">
//                               {subChildren.map((sub) => (
//                                 <li
//                                   key={sub._id}
//                                   className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                                 >
//                                   {sub.title}
//                                 </li>
//                               ))}
//                             </ul>
//                           )}
//                       </li>
//                     );
//                   })}
//                 </ul>
//               )}
//             </li>
//           );
//         })}
//       </ul>
//     </nav>
//   );
// };

// export default HeaderBottom;
import { useContext, useState } from "react";
import { CategoryContext } from "../../../contexts";

const HeaderBottom = () => {
  const { navbarCategories, categories } = useContext(CategoryContext);
  const [openPath, setOpenPath] = useState([]); // Tracks hierarchy of open category IDs

  const getChildren = (parentId) => {
    return categories.filter(
      (cat) =>
        cat.parent && (cat.parent._id === parentId || cat.parent === parentId)
    );
  };

  const toggleCategory = (categoryId, level) => {
    setOpenPath((prev) => {
      const newPath = [...prev];
      newPath[level] = newPath[level] === categoryId ? null : categoryId;
      return newPath.slice(0, level + 1);
    });
  };

  const renderCategories = (cats, level = 0) => {
    return (
      <ul
        className={`absolute top-full left-0 bg-white text-black shadow-lg min-w-[200px] py-2 z-50`}
        style={{ marginLeft: level > 0 ? "200px" : "0" }}
      >
        {cats.map((cat) => {
          const children = getChildren(cat._id);
          const isOpen = openPath[level] === cat._id;

          return (
            <li
              key={cat._id}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer relative"
              onClick={(e) => {
                e.stopPropagation();
                toggleCategory(cat._id, level);
              }}
            >
              {cat.title}
              {children.length > 0 && (
                <span className="absolute right-2 text-gray-500">{">"}</span>
              )}

              {isOpen &&
                children.length > 0 &&
                renderCategories(children, level + 1)}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className="relative z-50">
      {/* Header Navigation */}
      <nav className="bg-gray-900 text-white relative">
        <ul className="flex gap-6 px-4 py-3">
          {navbarCategories.map((cat) => {
            const children = getChildren(cat._id);
            const isOpen = openPath[0] === cat._id;

            return (
              <li
                key={cat._id}
                className="cursor-pointer hover:text-yellow-400 relative"
                onClick={() => toggleCategory(cat._id, 0)}
              >
                {cat.title}
                {isOpen && children.length > 0 && renderCategories(children, 1)}
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Card under Header */}
      {openPath.length > 0 && (
        <div className="bg-gray-100 shadow-md p-4 relative z-40">
          <p className="text-gray-700 font-medium">
            Selected category:{" "}
            {categories.find((c) => c._id === openPath[0])?.title || "—"}
          </p>
          <p className="text-sm text-gray-500 mt-1">
            You can place banners, offers, or extra category info here.
          </p>
        </div>
      )}
    </div>
  );
};

export default HeaderBottom;
