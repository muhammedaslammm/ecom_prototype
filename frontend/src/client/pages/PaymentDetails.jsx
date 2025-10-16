import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Address from "../components/Address";
import { CartContext } from "@/provider/CartProvider";

const PaymentDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { clearCart } = useContext(CartContext);

  const { address, paymentMethod, items, total } = location.state;

  const getPaymentMethodName = (method) => {
    if (method === "cod") return "Cash on Delivery";
    if (method === "bank") return "Bank Transfer";
    if (method === "online") return "Online Payment";
    return method;
  };

  const handlePayment = () => {
    alert("Payment successful!");
    clearCart();

    navigate("/order-summary", {
      state: {
        address,
        paymentMethod,
        items,
        total,
      },
    });
  };

  return (
    <div className="w-[90%] mx-auto my-4 gap-10 text-neutral-800">
      <button
        onClick={() => navigate(-1)}
        className="text-[#bc46c2] underline text-[1.6rem] hover:text-[#a63aad] mb-4 cursor-pointer"
      >
        Back
      </button>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-9/12 space-y-4">
          {/* Products */}
          <div className="items grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="border border-neutral-300 p-6 rounded-[.5rem] bg-white flex gap-8"
              >
                <div className="left min-w-0 font-medium space-y-4">
                  <p className="truncate text-[1.5rem] text-neutral-600">
                    {item.title}
                  </p>
                  <p className="text-[1.8rem]">Rs {item.price.toFixed(2)}</p>
                </div>
                <div className="right">
                  <div className="image w-[7rem]">
                    <img src={item.image} alt={item.title} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Address */}
          <Address address={address} />

          {/* Payment method */}
          <div className="bg-purple-50 border border-neutral-300 rounded-[.5rem] p-6 text-[1.7rem]">
            <p className="font-semibold">Payment Method:</p>
            <p>{getPaymentMethodName(paymentMethod)}</p>
          </div>

          {/* Bank Details */}
          <div className="bg-white border border-neutral-300 p-6 rounded-[.5rem] space-y-4">
            <h3 className="font-medium text-[1.7rem]">Bank Account Details:</h3>
            <div className="details leading-[2.5rem] text-[1.7rem]">
              <p className="text-neutral-600">
                Bank Name:{" "}
                <span className="font-medium text-neutral-900">
                  National Bank
                </span>
              </p>
              <p className="text-neutral-600">
                Account Holder:{" "}
                <span className="font-medium text-neutral-900">John Doe</span>
              </p>
              <p className="text-neutral-600">
                Account Number:{" "}
                <span className="font-medium text-neutral-900">9876543210</span>
              </p>
              <p className="text-neutral-600">
                IFSC Code:{" "}
                <span className="font-medium text-neutral-900">
                  NBIN0001234
                </span>
              </p>
              <p className="text-neutral-600">
                Branch:{" "}
                <span className="font-medium text-neutral-900">
                  Dubai Main Branch
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Payment Summary */}
        <div className="flex flex-col gap-4 w-full lg:w-3/12 bg-white p-6 border border-gray-300 self-start">
          <h3 className="capitalize text-[1.5rem] font-medium">
            payment total
          </h3>
          <div className="flex flex-col text-[1.7rem]">
            <div className="flex justify-between">
              <p className="capitalize">product total</p>
              <p className="font-medium">{total.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p className="capitalize">discount</p>
              <p className="font-medium">0</p>
            </div>
            <div className="flex justify-between py-4 mt-4 border-t border-neutral-400">
              <p className="capitalize">total</p>
              <p className="font-medium">{total.toFixed(2)}</p>
            </div>
            <button
              onClick={handlePayment}
              className="bg-[#bc46c2] mt-16 text-white text-[1.7rem] font-medium py-[.85rem] rounded-[.3rem] cursor-pointer hover:bg-[#a63aad]"
            >
              Confirm Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
