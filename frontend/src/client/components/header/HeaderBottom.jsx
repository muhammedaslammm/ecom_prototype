// import { useContext, useState } from "react";
// import { CategoryContext } from "../../../contexts";

// const HeaderBottom = () => {
//   const { navbarCategories, categories } = useContext(CategoryContext);

//   const [openIds, setOpenIds] = useState({});

//   const getChildren = (parentId) =>
//     categories.filter(
//       (cat) =>
//         cat.parent && (cat.parent === parentId || cat.parent?._id === parentId)
//     );

//   const collectDescendantIds = (rootId) => {
//     const out = [];
//     const stack = [rootId];
//     while (stack.length) {
//       const curr = stack.pop();
//       const kids = getChildren(curr);
//       for (const k of kids) {
//         out.push(k._id);
//         stack.push(k._id);
//       }
//     }
//     return out;
//   };

//   const toggleCategory = (id, isTopLevel = false) => {
//     setOpenIds((prev) => {
//       const willOpen = !prev[id];

//       if (willOpen) {
//         // Opening a top-level: close all other top-levels
//         if (isTopLevel) {
//           const next = {};
//           next[id] = true;
//           return next;
//         }
//         return { ...prev, [id]: true };
//       }

//       // Closing this branch + all descendants
//       const next = { ...prev };
//       delete next[id];
//       for (const d of collectDescendantIds(id)) delete next[d];
//       return next;
//     });
//   };

//   const renderMenu = (parentId, isSubMenu = false) => {
//     const children = getChildren(parentId);
//     if (children.length === 0) return null;

//     return (
//       <ul
//         className={`absolute ${
//           isSubMenu ? "top-0 left-full" : "top-full left-0"
//         } bg-white text-black shadow-lg min-w-[200px] py-2 z-50`}
//       >
//         {children.map((child) => {
//           const hasKids = getChildren(child._id).length > 0;
//           const isOpen = !!openIds[child._id];

//           return (
//             <li
//               key={child._id}
//               className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex justify-between items-center relative"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 toggleCategory(child._id, false);
//               }}
//             >
//               <span>{child.title}</span>
//               {hasKids && <span className="text-gray-500">{">"}</span>}

//               {isOpen && hasKids && renderMenu(child._id, true)}
//             </li>
//           );
//         })}
//       </ul>
//     );
//   };

//   return (
//     <nav className="bg-gray-900 text-white relative">
//       <ul className="flex gap-6 px-4 py-3">
//         {navbarCategories.map((cat) => {
//           const isOpen = !!openIds[cat._id];
//           return (
//             <li
//               key={cat._id}
//               className="cursor-pointer hover:text-yellow-400 relative"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 toggleCategory(cat._id, true); // top-level flag
//               }}
//             >
//               {cat.title}
//               {isOpen && renderMenu(cat._id, false)}
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

  const [openIds, setOpenIds] = useState({});

  const getChildren = (parentId) =>
    categories.filter(
      (cat) =>
        cat.parent && (cat.parent === parentId || cat.parent?._id === parentId)
    );

  const collectDescendantIds = (rootId) => {
    const out = [];
    const stack = [rootId];
    while (stack.length) {
      const curr = stack.pop();
      const kids = getChildren(curr);
      for (const k of kids) {
        out.push(k._id);
        stack.push(k._id);
      }
    }
    return out;
  };

  const toggleCategory = (id, isTopLevel = false, parentId = null) => {
    setOpenIds((prev) => {
      const willOpen = !prev[id];

      if (willOpen) {
        if (isTopLevel) {
          // Close all other top-levels
          const next = {};
          next[id] = true;
          return next;
        } else if (parentId) {
          // Close all siblings at the same level
          const siblings = getChildren(parentId).map((s) => s._id);
          const next = { ...prev };
          siblings.forEach((sid) => {
            delete next[sid];
            for (const d of collectDescendantIds(sid)) delete next[d];
          });
          next[id] = true;
          return next;
        }
        return { ...prev, [id]: true };
      }

      // Closing this branch and its descendants
      const next = { ...prev };
      delete next[id];
      for (const d of collectDescendantIds(id)) delete next[d];
      return next;
    });
  };

  const renderMenu = (parentId, isSubMenu = false) => {
    const children = getChildren(parentId);
    if (children.length === 0) return null;

    // This is the key change to control the horizontal positioning
    const menuPositionClasses = isSubMenu
      ? "top-0 left-full"
      : "top-full left-0";

    return (
      <ul
        className={`absolute bg-white text-black shadow-lg min-w-[200px] py-2 z-50 ${menuPositionClasses}`}
      >
        {children.map((child) => {
          const hasKids = getChildren(child._id).length > 0;
          const isOpen = !!openIds[child._id];

          return (
            <li
              key={child._id}
              className="relative px-4 py-2 hover:bg-gray-100 cursor-pointer flex justify-between items-center"
              onClick={(e) => {
                e.stopPropagation();
                toggleCategory(child._id, false, parentId);
              }}
            >
              <span>{child.title}</span>
              {hasKids && <span className="text-gray-500">{">"}</span>}
              {isOpen && hasKids && renderMenu(child._id, true)}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <nav className="bg-gray-900 text-white relative">
      <ul className="flex gap-6 px-4 py-3">
        {navbarCategories.map((cat) => {
          const isOpen = !!openIds[cat._id];
          return (
            <li
              key={cat._id}
              className="relative cursor-pointer hover:text-yellow-400"
              onClick={(e) => {
                e.stopPropagation();
                toggleCategory(cat._id, true); // top-level
              }}
            >
              {cat.title}
              {isOpen && renderMenu(cat._id, false)}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default HeaderBottom;
