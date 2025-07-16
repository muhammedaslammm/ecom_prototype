import React from "react";

const FAQ = () => {
  return (
    <div className="px-6 sm:px-12 py-12 max-w-6xl mx-auto text-black bg-white">
      <h1 className="text-5xl sm:text-6xl font-bold mb-16 text-center text-[#bc46c2]">
        Frequently Asked Questions
        <div className="w-24 h-1 bg-[#cfb97c] mx-auto mt-4 rounded"></div>
      </h1>

      <section className="space-y-10">
        {/* 1 */}
        <div className="bg-white p-8 shadow-lg border border-[#cfb97c] rounded-2xl">
          <h2 className="text-2xl font-semibold text-[#bc46c2] mb-4">
            1. How do I place an order?
          </h2>
          <p className="text-xl text-gray-700 leading-8">
            Browse your favorite categories or use the search bar. Select a
            product, click “Add to Cart”, then proceed to checkout and choose
            your payment method.
          </p>
        </div>

        {/* 2 */}
        <div className="bg-white p-8 shadow-lg border border-[#cfb97c] rounded-2xl">
          <h2 className="text-2xl font-semibold text-[#bc46c2] mb-4">
            2. Can I cancel my order?
          </h2>
          <p className="text-xl text-gray-700 leading-8">
            Yes, you can cancel your order before it is shipped. Go to your
            Profile → Orders and click on “Cancel” next to the order you want to
            cancel.
          </p>
        </div>

        {/* 3 */}
        <div className="bg-white p-8 shadow-lg border border-[#cfb97c] rounded-2xl">
          <h2 className="text-2xl font-semibold text-[#bc46c2] mb-4">
            3. What is the return policy?
          </h2>
          <p className="text-xl text-gray-700 leading-8">
            You can return most items within 7 days of delivery. Make sure the
            product is unused and in its original condition.
          </p>
        </div>

        {/* 4 */}
        <div className="bg-white p-8 shadow-lg border border-[#cfb97c] rounded-2xl">
          <h2 className="text-2xl font-semibold text-[#bc46c2] mb-4">
            4. What payment options are available?
          </h2>
          <p className="text-xl text-gray-700 leading-8">
            We accept UPI, Debit/Credit Cards, Net Banking, and Cash on Delivery
            (COD).
          </p>
        </div>

        {/* 5 */}
        <div className="bg-white p-8 shadow-lg border border-[#cfb97c] rounded-2xl">
          <h2 className="text-2xl font-semibold text-[#bc46c2] mb-4">
            5. How long does delivery take?
          </h2>
          <p className="text-xl text-gray-700 leading-8">
            Delivery usually takes 2–5 working days depending on your location.
            You can track your order in the “Orders” section.
          </p>
        </div>

        {/* 6 */}
        <div className="bg-white p-8 shadow-lg border border-[#cfb97c] rounded-2xl">
          <h2 className="text-2xl font-semibold text-[#bc46c2] mb-4">
            6. How do I contact customer support?
          </h2>
          <p className="text-xl text-gray-700 leading-8">
            You can reach us through the Contact page, or email us at{" "}
            <a
              href="mailto:support@example.com"
              className="text-[#bc46c2] font-medium underline"
            >
              support@example.com
            </a>
            . Our team is available 24/7.
          </p>
        </div>

        {/* NEW: 7 */}
        <div className="bg-white p-8 shadow-lg border border-[#cfb97c] rounded-2xl">
          <h2 className="text-2xl font-semibold text-[#bc46c2] mb-4">
            7. Do you offer gift wrapping?
          </h2>
          <p className="text-xl text-gray-700 leading-8">
            Yes! We offer gift wrapping options at checkout for select products.
            You can also include a personalized message to make your gift extra
            special.
          </p>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
