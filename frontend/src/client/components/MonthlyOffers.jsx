import { useContext, useEffect, useState } from "react";
import { OfferContext } from "../../contexts";

const MonthlyOffers = () => {
  const [monthlyOffers, setMonthlyOffers] = useState(null);
  const { offers } = useContext(OfferContext);

  useEffect(() => {
    if (offers) {
      let data = offers.find((offer) => offer.head === "monthly_offer").offers;
      setMonthlyOffers(data);
    }
  }, [offers]);

  return (
    <section className="w-[90%] mb-[10rem] bg-[#283ea8] p-8 mx-auto flex justify-start gap-8 rounded-[1rem]">
      {monthlyOffers ? (
        monthlyOffers.map((offer) => (
          <div className="h-[18rem] w-[18rem] px-12 border-3 bg-white border-[#28437d] flex justify-center items-center rounded-[2rem] first:mr-[5rem] cursor-pointer">
            <p className="text-[3rem] text-[#28437d] font-bold uppercase leading-[3rem]">
              {offer?.head}
            </p>
          </div>
        ))
      ) : (
        <></>
      )}
    </section>
  );
};

export default MonthlyOffers;
