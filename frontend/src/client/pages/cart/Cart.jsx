import { CartContext } from "@/provider/CartProvider";
import { UserContext } from "@/provider/UserContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  let [currentCart, setCurrentCart] = useState({});
  const { cart } = useContext(CartContext);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/register/log-in");
  }, [user]);

  useEffect(() => {
    setCurrentCart(cart)
  },[cart])

  if (!user) return;
  return (
    <section className="w-[95%] mx-auto py-4">
      <div className="flex gap-4">
        <div className="w-4/6 flex flex-col gap-4">
          {cart?.items.map((item) => (
            <div className="border border-neutral-300 p-4">
              <div>{item?.productId?.parentId?.product_title}</div>
              <div></div>
            </div>
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
