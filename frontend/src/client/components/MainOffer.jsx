import offers from "../../data/offers";
import { useState, useEffect } from "react";

const MainOffers = () => {
  const [mainOffer, setMainOffers] = useState(null);
  useEffect(() => {
    const main = offers.find((offer) => offer.home_offer_main);
    setMainOffers(main);
  }, []);
  return mainOffer ? (
    <div className="mx-auto flex gap-8 my-[7rem]">
      <div className="relative h-[20rem] w-full">
        <img
          src={mainOffer.image}
          alt=""
          className="rounded-[.8rem] object-cover h-full w-full"
        />
        <div className="absolute bottom-[6rem] left-[3rem]">
          <h2 className="text-[2.5rem] font-semibold text-white">
            {mainOffer.title}
          </h2>
          <p className="text-[1.8rem] text-neutral-400">
            {mainOffer.description}
          </p>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default MainOffers;
