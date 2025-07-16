import { useEffect, useState } from "react";
import { CouponContext } from "../contexts";
import coupons from "../data/coupons";

const CouponProvider = ({ children }) => {
  const [appCoupons, setAppCoupons] = useState(null);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    const getData = async () => {
      setAppCoupons(coupons);
      setLoad(true);
    };
    getData();
  });

  const getHomeCoupon = () => {
    const home_coupon = coupons.find((coupon) => coupon.location === "home");
    if (home_coupon)
      return {
        success: true,
        message: "coupon for home found",
        coupon: home_coupon,
      };
    else return { success: false, message: "coupon for home couldn't found" };
  };

  const value = { load, getHomeCoupon };
  return (
    <CouponContext.Provider value={value}>{children}</CouponContext.Provider>
  );
};

export default CouponProvider;
