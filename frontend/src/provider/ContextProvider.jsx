import WishlistProvider from "./WishlistProvider";
import CartProvider from "./CartProvider";
import UserProvider from "./UserProvider";
import CategoryProvider from "./CategoryProvider";
import OfferProvider from "./OfferProvider";
import CouponProvider from "./CouponProvider";

const ContextProvider = ({ children }) => {
  return (
    <CouponProvider>
      <UserProvider>
        <CartProvider>
          <CategoryProvider>
            <OfferProvider>
              <WishlistProvider>{children}</WishlistProvider>
            </OfferProvider>
          </CategoryProvider>
        </CartProvider>
      </UserProvider>
    </CouponProvider>
  );
};

export default ContextProvider;
