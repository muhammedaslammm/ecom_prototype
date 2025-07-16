import React from "react";
import {
  HelpCircle,
  Truck,
  RefreshCcw,
  AlertTriangle,
  Clock,
} from "lucide-react";

const CancellationReturn = () => {
  return (
    <div className="px-6 py-16 max-w-7xl mx-auto bg-[#fff9fc] text-gray-800">
      {/* Header */}
      <h1 className="text-5xl font-bold mb-16 text-center text-[#bc46c2]">
        Cancellation & Return Policy
        <div className="w-24 h-1 bg-[#cfb97c] mx-auto mt-4 rounded"></div>
      </h1>

      {/* Overview */}
      <section className="mb-16 bg-white p-8 rounded-2xl shadow-md border border-[#cfb97c]">
        <div className="flex items-center gap-3 mb-4">
          <Truck className="text-[#bc46c2]" size={28} />
          <h2 className="text-3xl font-semibold text-[#bc46c2]">Overview</h2>
        </div>
        <p className="text-xl text-gray-700 leading-8">
          We understand that sometimes plans change. Our Cancellation & Return
          policy is designed to be simple, transparent, and customer‑friendly.
          Read on to learn how you can cancel an order or return a product
          within the stipulated timeframe.
        </p>
      </section>

      {/* Cancellation Policy */}
      <section className="mb-16 bg-white p-8 rounded-2xl shadow-md border border-[#cfb97c]">
        <div className="flex items-center gap-3 mb-4">
          <RefreshCcw className="text-[#bc46c2]" size={26} />
          <h2 className="text-3xl font-semibold text-[#bc46c2]">
            Cancellation Policy
          </h2>
        </div>
        <ul className="list-disc pl-6 space-y-3 text-xl text-gray-700 leading-8">
          <li>
            You can cancel an order any time <strong>before it ships</strong>.
          </li>
          <li>
            Go to <em>My Orders</em> and click “Cancel”. A full refund will be
            issued within 5–7 business days.
          </li>
          <li>
            If your order has already shipped, please initiate a return after
            delivery.
          </li>
        </ul>
      </section>

      {/* Return Policy */}
      <section className="mb-16 bg-white p-8 rounded-2xl shadow-md border border-[#cfb97c]">
        <div className="flex items-center gap-3 mb-4">
          <RefreshCcw className="text-[#bc46c2]" size={26} />
          <h2 className="text-3xl font-semibold text-[#bc46c2]">
            Return Policy
          </h2>
        </div>
        <p className="text-xl leading-8 text-gray-700 mb-4">
          Most new, unopened items are eligible for return within{" "}
          <strong>30 days</strong> of delivery.
        </p>
        <ul className="list-disc pl-6 space-y-3 text-xl text-gray-700 leading-8">
          <li>Items must be unused, unwashed, and in original packaging.</li>
          <li>
            Visit <em>My Orders</em> → “Return” to initiate the return process.
          </li>
          <li>
            Refunds are processed within 5 business days after inspection.
          </li>
        </ul>
      </section>

      {/* Common Reasons */}
      <section className="mb-16 bg-[#fef1fd] p-8 rounded-2xl shadow-inner border border-[#f0d3f6]">
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="text-[#bc46c2]" size={26} />
          <h2 className="text-3xl font-semibold text-[#bc46c2]">
            Common Reasons for Return
          </h2>
        </div>
        <ul className="list-disc pl-6 space-y-3 text-xl text-gray-700 leading-8">
          <li>Wrong, damaged, or defective item delivered.</li>
          <li>Item doesn’t match the listing or expectations.</li>
          <li>Issues with size, fit, or color.</li>
          <li>Missing accessories or components.</li>
        </ul>
      </section>

      {/* NEW SECTION: Refund Timeline */}
      <section className="mb-16 bg-white p-8 rounded-2xl shadow-md border border-[#cfb97c]">
        <div className="flex items-center gap-3 mb-4">
          <Clock className="text-[#bc46c2]" size={26} />
          <h2 className="text-3xl font-semibold text-[#bc46c2]">
            Refund Timeline
          </h2>
        </div>
        <p className="text-xl text-gray-700 leading-8">
          Once your return is received and inspected, refunds are processed
          within <strong>5 business days</strong>. It may take 2–4 extra days
          for the amount to reflect in your account, depending on your bank or
          payment provider.
        </p>
      </section>

      {/* FAQs */}
      <section className="mb-20 bg-white p-8 rounded-2xl shadow-md border border-[#cfb97c]">
        <div className="flex items-center gap-3 mb-6">
          <HelpCircle className="text-[#bc46c2]" size={26} />
          <h2 className="text-3xl font-semibold text-[#bc46c2]">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-8">
          <div>
            <h3 className="font-semibold text-xl text-black mb-1">
              How do I cancel my order?
            </h3>
            <p className="text-xl text-gray-700 leading-8">
              Go to <em>My Orders</em>, choose your order, and click “Cancel” if
              it hasn’t shipped. You’ll receive an email and refund within a
              week.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-xl text-black mb-1">
              Can I return a gift item?
            </h3>
            <p className="text-xl text-gray-700 leading-8">
              Yes! Use the gift receipt's order number. The refund goes to the
              original payment method.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-xl text-black mb-1">
              Who pays for return shipping?
            </h3>
            <p className="text-xl text-gray-700 leading-8">
              If the item is defective or incorrect, return shipping is free.
              Otherwise, a small fee may be deducted from the refund.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="mb-24 text-center">
        <h2 className="text-3xl font-semibold mb-4 text-[#bc46c2]">
          Need Help?
        </h2>
        <p className="text-xl text-gray-700 mb-6 leading-8">
          Our support team is available 24/7 to assist with cancellations,
          returns, and any other queries.
        </p>
        <a
          href="/contact"
          className="inline-block bg-[#bc46c2] hover:bg-purple-800 text-white px-8 py-3 rounded-full text-lg transition-all"
        >
          Contact Support
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} ShopKart Pvt. Ltd. All rights
        reserved.
      </footer>
    </div>
  );
};

export default CancellationReturn;
