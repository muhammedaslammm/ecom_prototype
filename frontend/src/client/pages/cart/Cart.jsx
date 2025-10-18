import { CartContext } from "@/provider/CartProvider";
import { UserContext } from "@/provider/UserContext";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart } = useContext(CartContext);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/register/log-in");
  }, [user]);

  if (!user) return;
  return (
    <section className="w-[95%] min-h-[50rem] mx-auto py-4">
      <div className="flex gap-4">
        <div className="w-4/6 flex flex-col gap-4">
          {cart ? (
            cart?.items.map((item) => (
              <div className="border border-neutral-300 p-8 bg-white flex items-start gap-[4rem]">
                <div className="text-[1.8rem] leading-[2.4rem] ">
                  <div className="font-medium">
                    {item?.productId?.parentId?.product_title}
                  </div>
                  <div className="mt-4 mb-8">
                    {item?.productId?.parentId?.brand}
                  </div>
                  <div className="text-[1.8rem] font-medium">
                    Price : {item?.productId?.price}
                  </div>
                </div>

                <div>
                  <img
                    src={item?.productId?.images[0]}
                    alt="product image"
                    className="w-[10rem] h-[10rem] object-cover"
                  />
                </div>
              </div>
            ))
          ) : (
            <div className="border border-neutral-300 p-6 bg-neutral-300">
              <div className="text-[2rem] font-medium">Your Cart is Empty.</div>
              <div>Add products to cart to make a combined purchase!</div>
            </div>
          )}
        </div>
        <div className="w-2/6 min-h-[40rem] border border-neutral-300 bg-white flex flex-col justify-between p-8">
          <div className="text-[1.8rem] font-medium flex items-center justify-between">
            <div>Cart Total</div>
            <div>{cart?.cartTotal || "0.00"}</div>
          </div>
          {cart?.items.length > 0 && (
            <Link
              className="button bg-black text-white text-center font-medium"
              to="/checkout"
            >
              Checkout
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default Cart;
