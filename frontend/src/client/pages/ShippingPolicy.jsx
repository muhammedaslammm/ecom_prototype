import React from "react";

const ShippingPolicy = () => {
  return (
    <div className="px-6 sm:px-12 py-12 max-w-6xl mx-auto text-gray-800 bg-white">
      <h1 className="text-5xl sm:text-6xl font-bold text-center text-[#bc46c2] mb-16">
        Shipping Policy
        <div className="w-24 h-1 bg-[#cfb97c] mx-auto mt-4 rounded"></div>
      </h1>

      {/* Delivery Coverage */}
      <section className="mb-16 bg-white rounded-2xl p-8 shadow-lg border border-[#cfb97c]">
        <h2 className="text-3xl font-semibold text-[#bc46c2] mb-6 flex items-center gap-3">
          🚚 Delivery Coverage
        </h2>
        <p className="text-xl leading-8">
          We deliver across 10,000+ pin codes in India. Whether you're in a
          metro or a remote area, our extensive logistics network ensures your
          order reaches you swiftly and safely.
        </p>
      </section>

      {/* Delivery Time */}
      <section className="mb-16 bg-white rounded-2xl p-8 shadow-lg border border-[#cfb97c]">
        <h2 className="text-3xl font-semibold text-[#bc46c2] mb-6 flex items-center gap-3">
          ⏱️ Delivery Timeframe
        </h2>
        <ul className="list-disc pl-8 space-y-4 text-xl text-gray-700">
          <li>📦 Standard Delivery: 3–7 business days</li>
          <li>⚡ Express Delivery: 1–3 business days (on eligible products)</li>
          <li>🌍 Remote Areas: May take 7–10 business days</li>
        </ul>
      </section>

      {/* Shipping Charges */}
      <section className="mb-16 bg-white rounded-2xl p-8 shadow-lg border border-[#cfb97c]">
        <h2 className="text-3xl font-semibold text-[#bc46c2] mb-6 flex items-center gap-3">
          💸 Shipping Charges
        </h2>
        <p className="text-xl leading-8">
          We offer <strong>free shipping</strong> on most orders. Some low-cost
          or heavy items may include a small shipping fee, clearly mentioned
          during checkout.
        </p>
      </section>

      {/* Order Tracking */}
      <section className="mb-16 bg-white rounded-2xl p-8 shadow-lg border border-[#cfb97c]">
        <h2 className="text-3xl font-semibold text-[#bc46c2] mb-6 flex items-center gap-3">
          🔍 Track Your Order
        </h2>
        <p className="text-xl leading-8">
          Once your order is shipped, you'll receive a tracking link via SMS and
          email. You can also track your order status in the{" "}
          <strong>"My Orders"</strong> section of your account.
        </p>
      </section>

      {/* Undelivered Orders */}
      <section className="mb-16 bg-white rounded-2xl p-8 shadow-lg border border-[#cfb97c]">
        <h2 className="text-3xl font-semibold text-[#bc46c2] mb-6 flex items-center gap-3">
          ❗ Failed Delivery Attempts
        </h2>
        <p className="text-xl leading-8 mb-4">
          If we're unable to deliver your order after multiple attempts, the
          product will be returned to the warehouse, and a refund will be
          processed.
        </p>
        <ul className="list-disc pl-8 space-y-4 text-xl text-gray-700">
          <li>Please ensure your address & phone number are accurate</li>
          <li>Keep your phone available for delivery coordination</li>
        </ul>
      </section>

      {/* International Shipping */}
      <section className="mb-16 bg-white rounded-2xl p-8 shadow-lg border border-[#cfb97c]">
        <h2 className="text-3xl font-semibold text-[#bc46c2] mb-6 flex items-center gap-3">
          🌐 International Shipping
        </h2>
        <p className="text-xl leading-8">
          Currently, we ship only within India. International shipping is not
          available yet, but we’re working to expand globally soon!
        </p>
      </section>

      {/* New Section - Packaging & Sustainability */}
      <section className="mb-16 bg-white rounded-2xl p-8 shadow-lg border border-[#cfb97c]">
        <h2 className="text-3xl font-semibold text-[#bc46c2] mb-6 flex items-center gap-3">
          📦 Packaging & Sustainability
        </h2>
        <p className="text-xl leading-8 mb-4">
          We use eco-friendly, recyclable packaging materials to reduce our
          environmental footprint. Our commitment is to ensure your order
          arrives safely while supporting a greener planet.
        </p>
        <ul className="list-disc pl-8 space-y-4 text-xl text-gray-700">
          <li>Biodegradable boxes and packing fillers</li>
          <li>Minimal plastic usage in packaging</li>
          <li>Encouraging customers to recycle or reuse packaging</li>
        </ul>
      </section>

      {/* Help Section */}
      <section className="mb-16 bg-white rounded-2xl p-8 shadow-lg border border-[#cfb97c]">
        <h2 className="text-3xl font-semibold text-[#bc46c2] mb-6 flex items-center gap-3">
          📞 Need Help with Delivery?
        </h2>
        <p className="text-xl leading-8">
          For delivery delays or tracking issues, contact our support team at{" "}
          <a
            href="mailto:support@yourstore.com"
            className="underline font-semibold text-[#bc46c2]"
          >
            support@yourstore.com
          </a>{" "}
          or call <strong>1800-000-000</strong>.
        </p>
      </section>
    </div>
  );
};

export default ShippingPolicy;
