import { CartContext } from "@/provider/CartProvider";
import { useContext } from "react";

const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <section className="w-[95%] mx-auto py-4">
      <div className="flex">
        <div className="w-4/6">
          {cart.items.map((item) => (
            <div></div>
          ))}
        </div>
        <div className="w-2/6">
          <div>Cart Total : {cart?.cartTotal}</div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
