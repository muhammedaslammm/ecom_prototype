import React from "react";

const Store = () => {
  return (
    <div className="px-4 sm:px-6 py-12 max-w-6xl mx-auto text-gray-800 bg-white">
      <h1 className="text-3xl sm:text-5xl font-bold mb-12 text-center text-[#bc46c2]">
        Our Store
        <div className="w-24 h-1 bg-[#cfb97c] mx-auto mt-3 rounded"></div>
      </h1>

      {/* Intro Section */}
      <section className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-[#bc46c2]">
          🛍 One-Stop Shopping Destination
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 leading-8">
          Welcome to your trusted online store—where convenience meets quality.
          From electronics and fashion to groceries and home essentials, we
          offer a wide range of products across all categories. With millions of
          items and unbeatable deals, our store is designed for every type of
          shopper.
        </p>
      </section>

      {/* Categories */}
      <section className="mb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: "📱 Electronics & Gadgets",
            desc: "Latest smartphones, smartwatches, audio gear, and more—direct from top brands.",
          },
          {
            title: "👚 Fashion & Lifestyle",
            desc: "Trendy clothing, shoes, and accessories for men, women, and kids.",
          },
          {
            title: "🏠 Home Essentials",
            desc: "Furniture, kitchenware, appliances, and everything you need to make your house a home.",
          },
          {
            title: "🥫 Grocery & Daily Needs",
            desc: "Fresh groceries, pantry staples, snacks, and more delivered to your doorstep.",
          },
          {
            title: "💻 Laptops & Accessories",
            desc: "High-performance laptops, gaming gear, and accessories from leading tech brands.",
          },
          {
            title: "🎁 Gifts & Offers",
            desc: "Exclusive offers, seasonal deals, and curated gift ideas for all occasions.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2 text-[#cfb97c]">
              {item.title}
            </h3>
            <p className="text-gray-700 text-base">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Delivery Info */}
      <section className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-[#bc46c2]">
          🚚 Fast & Reliable Delivery
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 leading-8">
          We deliver across 10,000+ cities and towns with real-time tracking,
          safe packaging, and flexible delivery options. Our logistics partners
          ensure your order reaches you on time, every time.
        </p>
      </section>

      {/* Store Experience */}
      <section className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-[#cfb97c]">
          🏢 Physical Store Experience (Coming Soon)
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 leading-8">
          We're working on launching physical experience centers where you can
          touch, feel, and explore our best products before purchase. Stay tuned
          for updates on our store locations!
        </p>
      </section>

      {/* 🔥 New Section - Why Shop With Us */}
      <section className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-[#cfb97c]">
          ⭐ Why Shop With Us?
        </h2>
        <ul className="text-lg sm:text-xl text-gray-700 leading-8 list-disc pl-6 space-y-2">
          <li>Curated quality from trusted brands</li>
          <li>Lightning-fast delivery and easy returns</li>
          <li>24/7 customer support and order tracking</li>
          <li>Secure payments and frequent discounts</li>
          <li>Seamless mobile and desktop experience</li>
        </ul>
      </section>

      {/* Final Section */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-[#bc46c2]">
          🛒 Your Store, Your Way
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 leading-8">
          Whether you shop from the comfort of your home or explore deals on the
          go through our app, our store adapts to your lifestyle. Experience
          seamless navigation, secure checkout, and lightning-fast delivery.
        </p>
      </section>
    </div>
  );
};

export default Store;
