import { useContext, useState, useRef } from "react";
import { CategoryContext } from "../../../contexts";

const MAX_TOP_LEVEL = 7; // Show only first 7 in nav
const MAX_HEIGHT = 300; // Dropdown height

const HeaderBottom = () => {
  const { navbarCategories, categories } = useContext(CategoryContext);
  const [openChain, setOpenChain] = useState([]); // track drill path
  const [activeMoreCat, setActiveMoreCat] = useState(null); // track clicked More item

  // Get children of a category
  const getChildren = (parentId) => {
    if (!parentId) return [];
    return categories.filter((cat) => {
      const p = cat.parent;
      if (!p || p === "-" || p === null) return false;
      const pid = typeof p === "object" ? p._id : p;
      return String(pid) === String(parentId);
    });
  };

  // Scrollable wrapper with up/down buttons
  const ScrollableList = ({ children }) => {
    const containerRef = useRef(null);

    const scrollBy = (amount) => {
      if (containerRef.current) {
        containerRef.current.scrollBy({ top: amount, behavior: "smooth" });
      }
    };

    return (
      <div className="relative" style={{ maxHeight: `${MAX_HEIGHT}px` }}>
        {/* Scroll Up */}
        <button
          type="button"
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-gray-200 to-transparent text-xs text-gray-600 z-10"
          style={{ height: "22px" }}
          onClick={() => scrollBy(-100)}
        >
          ▲
        </button>

        {/* Scrollable content */}
        <div
          ref={containerRef}
          className="overflow-y-auto no-scrollbar"
          style={{
            maxHeight: `${MAX_HEIGHT - 44}px`,
            paddingTop: "22px",
            paddingBottom: "22px",
          }}
        >
          {children}
        </div>

        {/* Scroll Down */}
        <button
          type="button"
          className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-gray-200 to-transparent text-xs text-gray-600 z-10"
          style={{ height: "22px" }}
          onClick={() => scrollBy(100)}
        >
          ▼
        </button>
      </div>
    );
  };

  // Render one dropdown panel for given parentId
  const renderPanel = (parentId, level) => {
    const children = getChildren(parentId);
    if (!children.length) return null;

    return (
      <div
        key={parentId}
        className="absolute bg-white text-black shadow-lg min-w-[220px] z-50"
        style={{ top: "100%", left: `${level * 220}px` }}
      >
        <ScrollableList>
          <ul>
            {children.map((child) => {
              const hasKids = getChildren(child._id).length > 0;
              return (
                <li
                  key={child._id}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex justify-between items-center"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenChain((prev) => {
                      const idx = prev.indexOf(parentId);
                      if (idx === -1) {
                        return [child._id]; // fresh open
                      }
                      const newChain = [...prev.slice(0, idx + 1)];
                      if (prev[idx + 1] === child._id) {
                        // 🔥 If same child clicked again → close it
                        return newChain;
                      } else {
                        // otherwise → open this child
                        return [...newChain, child._id];
                      }
                    });
                  }}
                >
                  <span>{child.title}</span>
                  {hasKids && <span className="text-gray-500">{">"}</span>}
                </li>
              );
            })}
          </ul>
        </ScrollableList>
      </div>
    );
  };

  // Render full chain of dropdowns
  const renderChain = () => {
    return openChain.map((id, index) => renderPanel(id, index));
  };

  return (
    <nav
      className="relative"
      style={{ backgroundColor: "#121212", color: "white" }}
    >
      <ul className="flex w-[95%] mx-auto">
        {/* First N categories */}
        {navbarCategories.slice(0, MAX_TOP_LEVEL).map((cat) => (
          <li
            key={cat._id}
            className="relative text-[1.4rem] font-medium py-[.7rem] px-4 cursor-pointer hover:bg-white hover:text-black transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setActiveMoreCat(null); // reset if switching
              setOpenChain((prev) => (prev[0] === cat._id ? [] : [cat._id]));
            }}
          >
            {cat.title}
            {openChain[0] === cat._id && renderChain()}
          </li>
        ))}

        {/* If activeMoreCat exists, show it in navbar like normal */}
        {activeMoreCat && (
          <li
            key={activeMoreCat._id}
            className="relative cursor-pointer hover:text-yellow-400"
            onClick={(e) => {
              e.stopPropagation();
              setOpenChain((prev) =>
                prev[0] === activeMoreCat._id ? [] : [activeMoreCat._id]
              );
            }}
          >
            {activeMoreCat.title}
            {openChain[0] === activeMoreCat._id && renderChain()}
          </li>
        )}

        {/* More dropdown */}
        {navbarCategories.length > MAX_TOP_LEVEL && (
          <li
            className="relative cursor-pointer hover:text-yellow-400"
            onClick={(e) => {
              e.stopPropagation();
              setActiveMoreCat(null); // reset showing category
              setOpenChain((prev) => (prev[0] === "more" ? [] : ["more"]));
            }}
          >
            More ▼
            {openChain[0] === "more" && (
              <div className="absolute top-full left-0 bg-white text-black shadow-lg min-w-[220px] z-50">
                <ScrollableList>
                  <ul>
                    {navbarCategories.slice(MAX_TOP_LEVEL).map((cat) => (
                      <li
                        key={cat._id}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex justify-between items-center"
                        onClick={(e) => {
                          e.stopPropagation();
                          // 🔥 Save selected More item to navbar
                          setActiveMoreCat(cat);
                          setOpenChain([cat._id]);
                        }}
                      >
                        {cat.title}
                        {getChildren(cat._id).length > 0 && (
                          <span className="text-gray-500">{">"}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </ScrollableList>
              </div>
            )}
          </li>
        )}
      </ul>

      {/* Hide scrollbar globally */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </nav>
  );
};

export default HeaderBottom;
