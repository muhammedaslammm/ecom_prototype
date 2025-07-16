import { useEffect, useState } from "react";
import { OfferContext } from "../contexts";
import offerdata from "../data/offerdata";

const OfferProvider = ({ children }) => {
  const [offers, setOffers] = useState(null);
  useEffect(() => {
    setOffers(offerdata);
  }, []);

  const value = { offers };
  return (
    <OfferContext.Provider value={value}>{children}</OfferContext.Provider>
  );
};

export default OfferProvider;
