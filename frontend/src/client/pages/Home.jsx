import Banner from "../components/Banner";
import projectors from "../../data/projectors";
import laptops from "../../data/laptops";
import { useEffect, useState } from "react";

import MainOffers from "../components/MainOffer";
import Trust from "../components/Trust";
import BrandCategory from "../components/BrandCategory";
import HomeCoupon from "../components/HomeCoupon";
import category_offer from "../../data/category_offer.js";
import DayDeal from "../components/DayDeal.jsx";
import daydeal from "../../data/daydeal.js";
import bestSeller from "../../data/bestSeller.js";
import BestSeller from "../components/BestSeller.jsx";
import NewArrivals from "../components/NewArrivals.jsx";

const Home = () => {
  const [dealProjectors, setDealProjectors] = useState([]);
  const [dealLaptops, setDealLaptops] = useState([]);
  const [categoryOffer, setCategoryOffer] = useState(null);

  // the products are filtered and stored in the above state variables.
  // these variable products are send to various components representing various sections.

  useEffect(() => {
    const filteredProjectors = projectors
      .filter((projector) => projector.offer_price < 30000)
      .slice(0, 6);
    const filteredLaps = laptops
      .filter((laptop) => laptop.offer_price < 50000)
      .slice(0, 6);

    setDealLaptops(filteredLaps);
    setDealProjectors(filteredProjectors);
  }, []);

  useEffect(() => {
    setCategoryOffer(category_offer);
  }, []);

  return (
    <div className="home">
      <Banner />
      <DayDeal daydeal={daydeal} />
      <BestSeller best_seller={bestSeller} />
      <BrandCategory />
      <NewArrivals />
      <MainOffers />
      <Trust />
    </div>
  );
};

export default Home;
