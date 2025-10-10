import EmptyPage from "../components/EmptyPage";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } =
    useContext(CartContext);
  const navigate = useNavigate();

  const handleQuantityChange = (id, delta) => {
    updateQuantity(id, delta);
  };

  const subtotal = getCartTotal();

  return (
    <div className="w-[95%] mx-auto text-black my-8 bg-[#fdf8ff]  p-6 md:p-10">
      {cartItems.length === 0 ? (
        <EmptyPage title="cart" />
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="space-y-6 w-full lg:w-8/12">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 sm:p-8 gap-6 border transition"
              >
                <div className="flex flex-col items-start w-4/6">
                  {/* Title and Price */}
                  <div>
                    <h2 className="text-[1.8rem] font-medium leading-[2.3rem] text-[#222]">
                      {item.parent.product_title}
                    </h2>
                    <p className=" font-medium text-[1.8rem] my-6">
                      <span className="text-[1.8rem]">Rs {item.price}</span>
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center border border-neutral-300 rounded-md w-[10rem] text-[1.6rem]">
                    <button
                      className="px-3 py-1 font-bold"
                      onClick={() => handleQuantityChange(item._id, -1)}
                    >
                      -
                    </button>
                    <span className="px-4 py-1">{item.quantity}</span>
                    <button
                      className="px-3 py-1 font-bold"
                      onClick={() => handleQuantityChange(item._id, 1)}
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Product Image */}
                <div className="w-2/6 h-[20rem] rounded-lg  p-4">
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-full h-full object-contain rounded-md"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="w-full lg:w-4/12 self-start rounded-xl p-6 sm:p-8 bg-white border border-[#bc46c2]/30 shadow space-y-6">
            <h2 className="text-[2.2rem] font-bold">Cart Totals</h2>

            <div className="flex justify-between text-[1.6rem] text-neutral-700">
              <span>Subtotal</span>
              <span>{subtotal.toFixed(2)} AED</span>
            </div>

            <details className="text-[1.5rem] cursor-pointer">
              <summary className="font-medium">Add a coupon</summary>
              <div className="flex flex-col gap-4 mt-2">
                <input
                  type="text"
                  placeholder="Enter coupon code"
                  className="border border-neutral-400 text-neutral-800 outline-0 p-2 rounded-md w-full"
                />
                <button className="py-3 w-full bg-[#b00015] text-white font-semibold rounded-md transition">
                  Apply Coupon
                </button>
              </div>
            </details>

            <div className="flex justify-between text-[1.6rem] font-medium border-t border-neutral-300 pt-4">
              <span>Total</span>
              <span className="font-bold">{subtotal.toFixed(2)} AED</span>
            </div>

            <button
              onClick={() => navigate("/checkout")}
              className="w-full text-[1.6rem] bg-black text-white font-bold py-3 rounded-md transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
