import { CartContext } from "@/provider/CartProvider";
import { UserContext } from "@/provider/UserContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart } = useContext(CartContext);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/register/log-in");
  }, [user]);

  if (!user) return;
  return (
    <section className="w-[95%] mx-auto py-4">
      <div className="flex">
        <div className="w-4/6">
          {cart?.items.map((item) => (
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
