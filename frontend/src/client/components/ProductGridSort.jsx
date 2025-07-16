import { useEffect } from "react";
import productSort from "../../data/productSort";
const ProductGridSort = ({ handleSorting, sort }) => {
  useEffect(() => {
    handleSorting(productSort[0]);
  }, []);

  return (
    <div className="relative group flex flex-col items-end cursor-pointer">
      <button className="capitalize text-[1.4rem] bg-white border border-gray-400 rounded-[.3rem] py-[.3rem] w-[20rem]">
        sort by <span>{sort.sort}</span>
      </button>
      <ul className="opacity-0 absolute top-full translate-y-[.7rem] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex flex-col gap-[.3rem] w-full">
        {productSort.map((sort) => (
          <li
            className="capitalize text-[1.4rem] bg-white border border-gray-400 rounded-[.3rem] py-[.3rem] px-[1rem] hover:bg-neutral-200 "
            onClick={() => handleSorting(sort)}
          >
            {sort.sort}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductGridSort;
