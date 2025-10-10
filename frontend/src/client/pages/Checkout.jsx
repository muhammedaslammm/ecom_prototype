import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import images from "../assets/images";
import { CartContext } from "../../contexts";

const Checkout = () => {
  const { cartItems, getCartTotal, clearCart } = useContext(CartContext);
  const [addressSaved, setAddressSaved] = useState(true);
  const [showNewAddressForm, setShowNewAddressForm] = useState(false);
  const [address, setAddress] = useState({
    firstName: "John",
    lastName: "Philip",
    address: "St Mardianl Local Villa Street, 4509 Upstreet Road, Washinglon",
    city: "Palmaria",
    state: "Selesca",
    phone: "919087887898",
  });
  const [errors, setErrors] = useState({});
  const [payment, setPayment] = useState("bank");

  const navigate = useNavigate();
  const subtotal = getCartTotal();

  const validateForm = () => {
    let newErrors = {};
    if (!address.firstName.trim())
      newErrors.firstName = "First name is required.";
    if (!address.lastName.trim()) newErrors.lastName = "Last name is required.";
    if (!address.address.trim()) newErrors.address = "Address is required.";
    if (!address.city.trim()) newErrors.city = "City is required.";
    if (!address.state.trim()) newErrors.state = "State is required.";
    if (!address.phone.trim()) {
      newErrors.phone = "Phone is required.";
    } else if (!/^\d{10}$/.test(address.phone.trim())) {
      newErrors.phone = "Phone must be a 10-digit number.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePlaceOrder = () => {
    if (!addressSaved && showNewAddressForm) {
      if (!validateForm()) return;
    }

    const orderData = {
      address,
      paymentMethod: payment,
      items: cartItems,
      total: subtotal,
    };

    if (payment === "cod") {
      alert("Order placed successfully!");
      clearCart();
      navigate("/order-summary", { state: orderData });
    } else {
      navigate("/payment-details", { state: orderData });
    }
  };

  return (
    <div className="w-[95%] max-w-[1600px] mx-auto my-4 gap-10 text-neutral-800">
      <button
        onClick={() => navigate(-1)}
        className=" underline text-[1.6rem] mb-4 cursor-pointer"
      >
        Back
      </button>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* LEFT */}
        <div className="w-full lg:w-8/12 space-y-6 flex flex-col">
          {/* Billing address */}
          <div className="space-y-4 border border-neutral-300 bg-white p-6 md:p-8 rounded-[.5rem]">
            <h2 className="text-[1.9rem] font-semibold ">Billing address</h2>
            {addressSaved && !showNewAddressForm ? (
              <div className="space-y-4 border border-[#bc46c2]/40 p-6 rounded bg-white">
                <p className="text-[1.8rem]">
                  <strong>John Doe</strong>
                  <br />
                  Dubai, United Arab Emirates
                  <br />
                  Phone: +971 50 123 4567
                </p>
                <button
                  className=" underline text-[1.8rem] cursor-pointer"
                  onClick={() => {
                    setShowNewAddressForm(true);
                    setAddressSaved(false);
                  }}
                >
                  Use a different address
                </button>
              </div>
            ) : (
              <form className="border border-neutral-300 gap-4 bg-white p-6 rounded space-y-4">
                <h3 className="capitalize text-[1.7rem] font-medium ">
                  enter address details
                </h3>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full space-y-4">
                      <input
                        type="text"
                        placeholder="First name"
                        value={address.firstName}
                        onChange={(e) =>
                          setAddress({ ...address, firstName: e.target.value })
                        }
                        className="input--form"
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-[1.4rem]">
                          {errors.firstName}
                        </p>
                      )}
                    </div>

                    <div className="w-full space-y-4">
                      <input
                        type="text"
                        placeholder="Last name"
                        value={address.lastName}
                        onChange={(e) =>
                          setAddress({ ...address, lastName: e.target.value })
                        }
                        className="input--form"
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-[1.4rem]">
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  <input
                    type="text"
                    placeholder="Address"
                    value={address.address}
                    onChange={(e) =>
                      setAddress({ ...address, address: e.target.value })
                    }
                    className="input--form"
                  />
                  {errors.address && (
                    <p className="text-red-500 text-[1.4rem]">
                      {errors.address}
                    </p>
                  )}

                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full space-y-4">
                      <input
                        type="text"
                        placeholder="City"
                        value={address.city}
                        onChange={(e) =>
                          setAddress({ ...address, city: e.target.value })
                        }
                        className="input--form"
                      />
                      {errors.city && (
                        <p className="text-red-500 text-[1.4rem]">
                          {errors.city}
                        </p>
                      )}
                    </div>

                    <div className="w-full space-y-4">
                      <input
                        type="text"
                        placeholder="State"
                        value={address.state}
                        onChange={(e) =>
                          setAddress({ ...address, state: e.target.value })
                        }
                        className="input--form"
                      />
                      {errors.state && (
                        <p className="text-red-500 text-[1.4rem]">
                          {errors.state}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="w-full space-y-4 md:w-1/2">
                    <input
                      type="number"
                      placeholder="Phone (10 digits)"
                      value={address.phone}
                      onChange={(e) =>
                        setAddress({ ...address, phone: e.target.value })
                      }
                      className="input--form"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-[1.4rem]">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>
              </form>
            )}
          </div>

          {/* Payment */}
          <div className="space-y-4 bg-white border border-neutral-300 p-6 md:p-8 rounded-[.5rem]">
            <h2 className="text-[1.8rem] font-medium ">Payment options</h2>
            <div className="space-y-8">
              <label className="flex items-center gap-4 text-[1.75rem]">
                <input
                  type="radio"
                  checked={payment === "bank"}
                  onChange={() => setPayment("bank")}
                />
                Direct bank transfer
              </label>

              <div className="space-y-4">
                <label className="flex items-center gap-4 text-[1.75rem]">
                  <input
                    type="radio"
                    checked={payment === "online"}
                    onChange={() => setPayment("online")}
                  />
                  Online payment
                </label>
                <div className="flex flex-wrap gap-6 px-4">
                  {[
                    images.visa,
                    images.master_card,
                    images.rupay,
                    images.maestro,
                  ].map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt="card"
                      className="w-[3.5rem] h-[2rem] object-fill"
                    />
                  ))}
                </div>
              </div>

              <label className="flex items-center gap-4 text-[1.75rem]">
                <input
                  type="radio"
                  checked={payment === "cod"}
                  onChange={() => setPayment("cod")}
                />
                Cash on delivery
              </label>
            </div>
          </div>

          <button
            onClick={handlePlaceOrder}
            className="text-[1.6rem] self-end bg-black text-white font-medium py-3.5 px-6 mt-6  cursor-pointer transition duration-200"
          >
            {payment === "cod" ? "Place Order" : "Proceed to Payment"}
          </button>
        </div>

        {/* RIGHT */}
        <div className="w-full lg:w-4/12 self-start border border-neutral-300 p-6 md:p-8 bg-white rounded-[.5rem] space-y-4">
          <h2 className="text-[1.8rem] font-semibold ">Order Summary</h2>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="text-[1.65rem] border-b border-gray-300 py-3 space-y-1"
            >
              <p className="font-medium">
                {item.title} ({item.quantity}x)
              </p>
              <p className="">Rs {item.offer_price}</p>
            </div>
          ))}
          <div className="flex justify-between font-medium text-[1.8rem] mt-6">
            <span>Total</span>
            <span className="font-semibold ">Rs {subtotal.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
