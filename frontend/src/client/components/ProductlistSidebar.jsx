import { useRef, useState } from "react";

const ProductlistSidebar = ({
  sidebar_content,
  manageFilter,
  selectedLabels,
}) => {
  return (
    <div className="w-[20%]  shadow-[0_0_.5rem_rgb(220,220,220)] bg-white p-6 rounded-[.4rem]">
      {sidebar_content.map((content) => {
        if (content.data) {
          return (
            <div className="flex flex-col gap-[.5rem]">
              <h3 className="text-[1.5rem] capitalize font-medium text-gray-900">
                {content.head}
              </h3>
              <ul className="flex flex-col">
                {content.data.map((d) => (
                  <div
                    className="flex gap-4 items-center cursor-pointer"
                    onClick={() => manageFilter(content.label, d.name, d.slug)}
                  >
                    <input
                      type="checkbox"
                      checked={selectedLabels.includes(d.name)}
                    />
                    <li
                      className={`text-[1.5rem] text-gray-500 font-medium  py-[.3rem] ${
                        selectedLabels.includes(d.name) ? "text-gray-950" : ""
                      }`}
                    >
                      {d.name}
                    </li>
                  </div>
                ))}
              </ul>
            </div>
          );
        }
      })}
    </div>
  );
};

export default ProductlistSidebar;
