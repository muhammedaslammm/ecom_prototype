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
    <div className="w-[90%] mx-auto text-neutral-900 my-8 bg-[#fdf8ff] rounded-xl shadow-lg p-6 md:p-10 max-w-[1600px]">
      {cartItems.length === 0 ? (
        <EmptyPage title="cart" />
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="space-y-6 w-full lg:w-8/12">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between rounded-xl p-6 sm:p-8 gap-6 border border-[#bc46c2]/20 shadow-md hover:shadow-lg transition"
              >
                <div className="flex flex-col items-start">
                  {/* Title and Price */}
                  <div>
                    <h2 className="text-[1.8rem] font-semibold text-[#222]">
                      {item.title}
                    </h2>
                    <p className="text-neutral-600 font-medium text-[1.8rem] my-2">
                      Rs. {item.offer_price.toFixed(2)}{" "}
                      <span className="text-green-700 text-[1.4rem] font-semibold">
                        x {item.quantity} = Rs{" "}
                        {(item.offer_price * item.quantity).toFixed(2)}
                      </span>
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center border border-neutral-300 rounded-md w-[10rem] text-[1.6rem]">
                    <button
                      className="px-3 py-1 font-bold text-[#bc46c2]"
                      onClick={() => handleQuantityChange(item.id, -1)}
                    >
                      -
                    </button>
                    <span className="px-4 py-1">{item.quantity}</span>
                    <button
                      className="px-3 py-1 font-bold text-[#bc46c2]"
                      onClick={() => handleQuantityChange(item.id, 1)}
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Product Image */}
                <div className="w-[14rem] h-[12rem] rounded-lg bg-[#f3e5f5] p-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain rounded-md"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="w-full lg:w-4/12 self-start rounded-xl p-6 sm:p-8 bg-white border border-[#bc46c2]/30 shadow space-y-6">
            <h2 className="text-[2.2rem] font-bold text-[#bc46c2]">
              Cart Totals
            </h2>

            <div className="flex justify-between text-[1.6rem] text-neutral-700">
              <span>Subtotal</span>
              <span>{subtotal.toFixed(2)} AED</span>
            </div>

            <details className="text-[1.5rem] text-[#bc46c2] cursor-pointer">
              <summary className="font-medium">Add a coupon</summary>
              <div className="flex flex-col gap-4 mt-2">
                <input
                  type="text"
                  placeholder="Enter coupon code"
                  className="border border-neutral-400 text-neutral-800 outline-0 p-2 rounded-md w-full"
                />
                <button className="py-3 w-full bg-[#bc46c2] hover:bg-[#a03cb1] text-white font-semibold rounded-md transition">
                  Apply Coupon
                </button>
              </div>
            </details>

            <div className="flex justify-between text-[1.6rem] font-medium border-t border-neutral-300 pt-4">
              <span>Total</span>
              <span className="font-bold text-[#bc46c2]">
                {subtotal.toFixed(2)} AED
              </span>
            </div>

            <button
              onClick={() => navigate("/checkout")}
              className="w-full text-[1.6rem] bg-[#bc46c2] hover:bg-[#a03cb1] text-white font-bold py-3 rounded-md transition"
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
