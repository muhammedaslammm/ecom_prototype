import WishlistProvider from "./WishlistProvider";
import CartProvider from "./CartProvider";
import CategoryProvider from "./CategoryProvider";
import { UserProvider } from "./UserContext";

const ContextProvider = ({ children }) => {
  return (
    <UserProvider>
      <CartProvider>
        <CategoryProvider>
          <WishlistProvider>{children}</WishlistProvider>
        </CategoryProvider>
      </CartProvider>
    </UserProvider>
  );
};

export default ContextProvider;
