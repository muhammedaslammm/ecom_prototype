import { useContext, useEffect, useState } from "react";
import { CategoryContext } from "../../contexts";

const BrandCategory = () => {
  const [brandCategories, setBrandCategories] = useState();
  const { getBrandCategories } = useContext(CategoryContext);
  useEffect(() => {
    const getcategories = async () => {
      const { categories } = getBrandCategories();
      setBrandCategories(categories);
    };
    getcategories();
  }, []);

  return (
    <section className="categories  bg-[#cfd4e8] my-16 py-16 ">
      <div className="space-y-8 w-[95%] mx-auto">
        <div>
          <h3 className="text-[2.1rem] capitalize font-medium">
            {brandCategories?.title}
          </h3>
          <p className="text-[1.7rem]">{brandCategories?.note}</p>
        </div>
        <div className="flex gap-8 ">
          {brandCategories ? (
            brandCategories.items.map((item) => (
              <div className="relative w-[50rem] h-[25rem] flex bg-white  border border-neutral-100 rounded-[1rem] overflow-hidden">
                <div className="left h-full w-7/12 flex flex-col justify-between p-8 ">
                  <div className="top space-y-4">
                    <p className="text-[1.3rem] font-medium">{item.brand}</p>
                    <h2 className="text-[2rem] font-semibold leading-[2.3rem] ">
                      {item.title}
                    </h2>
                  </div>
                  <div className="bottom flex flex-col gap-[2rem]">
                    <p className="text-[1.5rem] leading-[1.7rem]">
                      {item.discount_note}
                    </p>
                    <button className="text-[1.2rem] text-white self-start bg-black py-[.4rem] px-[.8rem] rounded-[.3rem] capitalize cursor-pointer">
                      shop now
                    </button>
                  </div>
                </div>
                <div
                  className="right w-5/12 h-full "
                  style={{
                    backgroundImage: `linear-gradient(to right, ${item.linear_gradient_from}, ${item.linear_gradient_to})`,
                  }}
                >
                  <img
                    src={item.image_url}
                    alt="image"
                    className="absolute w-[70%] h-full object-contain"
                  />
                </div>
              </div>
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </section>
  );
};

export default BrandCategory;
