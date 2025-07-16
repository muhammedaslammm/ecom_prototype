import React from "react";

const PaymentPolicy = () => {
  return (
    <div className="px-6 sm:px-12 py-12 max-w-6xl mx-auto text-gray-800 bg-white">
      <h1 className="text-5xl sm:text-6xl font-bold text-center mb-14 text-[#bc46c2]">
        Payment Policy
        <div className="w-24 h-1 bg-[#cfb97c] mx-auto mt-4 rounded"></div>
      </h1>

      {/* Section Template */}
      {[
        {
          title: "💳 Overview",
          content: `We aim to provide a secure, fast, and convenient payment process. Our
            platform supports multiple modes of payment to ensure flexibility and
            convenience for our customers.`,
        },
        {
          title: "✅ Accepted Payment Methods",
          list: [
            "💳 Credit/Debit Cards (Visa, MasterCard, RuPay, Maestro)",
            "📱 UPI (Google Pay, PhonePe, Paytm, BHIM, etc.)",
            "🏦 Net Banking (All major banks supported)",
            "💵 Cash on Delivery (COD)",
            "🛒 EMI & Pay Later options (for eligible products)",
            "💼 Wallets (Paytm, Mobikwik, Amazon Pay)",
          ],
        },
        {
          title: "🔒 Secure Transactions",
          content: `All online transactions are encrypted using SSL (Secure Socket Layer)
          and processed through PCI-DSS compliant gateways. Your payment
          information is never stored on our servers.`,
        },
        {
          title: "📩 Payment Confirmation",
          content: `Once a payment is successful, you’ll receive an order confirmation via
          email and SMS. You can also check your status under the "My Orders"
          section.`,
        },
        {
          title: "⚠️ Failed or Cancelled Payments",
          content: `If a transaction fails, no amount is deducted. If the amount was
          debited, it will be refunded to your account within 5–7 business days.`,
          list: [
            "Check your bank SMS/email for credit confirmation.",
            "Still need help? Contact our support team.",
          ],
        },
        {
          title: "💰 Refund Policy",
          content: `Refunds are processed once product pickup or cancellation is complete.
          Funds will be credited to your original payment method within:`,
          list: [
            "UPI/Wallet: 2–3 working days",
            "Credit/Debit Card & Net Banking: 5–7 working days",
            "COD Refunds: Via bank transfer or wallet credit",
          ],
        },
      ].map((section, i) => (
        <section
          key={i}
          className="mb-14 bg-white rounded-2xl p-8 shadow-lg border border-[#cfb97c]"
        >
          <h2 className="text-3xl font-semibold mb-5 text-[#bc46c2] flex items-center gap-3">
            {section.title}
          </h2>
          {section.content && (
            <p className="text-xl leading-8 text-gray-800 mb-6">
              {section.content}
            </p>
          )}
          {section.list && (
            <ul className="list-disc pl-8 space-y-3 text-lg text-gray-700">
              {section.list.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          )}
        </section>
      ))}

      {/* New Section - Payment FAQs */}
      <section className="mb-14 bg-white rounded-2xl p-8 shadow-lg border border-[#cfb97c]">
        <h2 className="text-3xl font-semibold mb-6 text-[#bc46c2]">
          ❓ Payment FAQs
        </h2>
        <div className="space-y-6 text-lg text-gray-800 leading-8">
          <div>
            <strong>Q:</strong> Can I change my payment method after placing an
            order?
            <br />
            <strong>A:</strong> Unfortunately, payment methods cannot be changed
            once an order is confirmed. Please contact support for assistance.
          </div>
          <div>
            <strong>Q:</strong> Is it safe to save my card details?
            <br />
            <strong>A:</strong> We do not store any payment details on our
            servers. All data is handled securely by PCI-compliant gateways.
          </div>
          <div>
            <strong>Q:</strong> What should I do if my payment is declined?
            <br />
            <strong>A:</strong> Check with your bank or card issuer, then try
            again or use a different payment option.
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="mb-14 bg-white rounded-2xl p-8 shadow-lg border border-[#cfb97c]">
        <h2 className="text-3xl font-semibold mb-5 text-[#bc46c2] flex items-center gap-3">
          📞 Need Help with Payments?
        </h2>
        <p className="text-xl leading-8 text-gray-800">
          We’re here 24/7 to help. Reach out at{" "}
          <a
            href="mailto:support@yourstore.com"
            className="underline font-semibold text-[#bc46c2]"
          >
            support@yourstore.com
          </a>{" "}
          or call our toll-free number:{" "}
          <span className="font-semibold">1800-000-000</span>.
        </p>
      </section>
    </div>
  );
};

export default PaymentPolicy;
