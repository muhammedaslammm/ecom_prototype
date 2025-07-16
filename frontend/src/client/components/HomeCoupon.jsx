import { useContext, useEffect, useState } from "react";
import { CouponContext } from "../../contexts";
import CategoryTiles from "./CategoryTiles";

const HomeCoupon = () => {
  const [coupon, setCoupon] = useState(null);
  const { load, getHomeCoupon } = useContext(CouponContext);
  useEffect(() => {
    if (load) {
      const response = getHomeCoupon();
      if (response.success) setCoupon(response.coupon);
      else console.log(response.message);
    }
  }, [load]);

  return coupon ? (
    <section className="mx-auto w-full bg-whtie h-[15rem] my-4 p-2 mt-4 mb-8 flex gap-4">
      <div className="rounded-[1.5rem] text-black border border-neutral-400 bg-white grow">
        <div className=" space-x-4 leading-[2.3rem]">
          <span className="text-[3rem] font-semibold">
            {coupon.coupon_head}
          </span>{" "}
          <span className="text-[1.8rem]">{coupon.note}</span>
        </div>
      </div>
      <div className="right flex flex-col justify-center items-center bg-[#eddd98] text-black p-[3rem] leading-[2.4rem] rounded-[1.5rem]">
        <p className="text-[1.2rem] uppercase">use code</p>
        <p className="text-[4rem] font-bold">{coupon.coupon_code}</p>
      </div>
    </section>
  ) : (
    <></>
  );
};

export default HomeCoupon;
