import backpack from "../client/assets/best_seller/backpack.png";
import net from "../client/assets/best_seller/net.png";
import speaker from "../client/assets/best_seller/speaker.png";
import sneaker from "../client/assets/best_seller/sneaker.png";
import fujicam from "../client/assets/best_seller/fujicam.png";
import office_chair from "../client/assets/best_seller/office_chair.png";
import banner from "../client/assets/best_seller/banner.jpg";

const bestSeller = {
  image: banner,
  title: "Our best sellers",
  note: "Grab our best selling products now",
  bg_color: "#deddcc",
  products: [
    {
      title: "Medium 25L Backpack Bags for daily use",
      price: "₹299",
      image: backpack,
    },
    {
      title: "Kolar polystor adults washable mosquito net",
      price: "₹399",
      image: net,
    },
    { title: "FITRIC m3 smart speaker", price: "₹399", image: speaker },
    { title: "Casual sneaker shoe for men", price: "₹1099", image: sneaker },
    {
      title: "Wooden street aquiela office chair",
      price: "3001₹",
      image: office_chair,
    },
    { title: "Fujifilm Instax Mini", price: "₹5599", image: fujicam },
  ],
};

export default bestSeller;
