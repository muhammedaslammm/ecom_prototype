import WishlistProvider from "./WishlistProvider";
import CartProvider from "./CartProvider";
import CategoryProvider from "./CategoryProvider";

const ContextProvider = ({ children }) => {
  return (
    <CartProvider>
      <CategoryProvider>
        <WishlistProvider>{children}</WishlistProvider>
      </CategoryProvider>
    </CartProvider>
  );
};

export default ContextProvider;
