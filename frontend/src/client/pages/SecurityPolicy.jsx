import React from "react";

const SecurityPolicy = () => {
  return (
    <div className="bg-gradient-to-br from-[#f3e8ff] to-white min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto text-gray-800">
        <h1 className="text-5xl font-bold mb-16 text-center text-[#6b21a8]">
          Security Policy
        </h1>

        {/* Section: Overview */}
        <section className="bg-white border border-purple-100 shadow-md rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-semibold mb-5 text-[#6b21a8]">
            Your Security Matters
          </h2>
          <p className="text-xl leading-8 text-gray-700">
            We take your online security seriously. Our platform is built on
            secure architecture and uses modern technologies to protect your
            data, privacy, and financial transactions.
          </p>
        </section>

        {/* Secure Transactions */}
        <section className="bg-white border border-purple-100 shadow-md rounded-2xl p-8 mb-10">
          <h3 className="text-2xl font-semibold mb-4 text-[#6b21a8]">
            🔒 Secure Transactions
          </h3>
          <p className="text-xl text-gray-700 leading-8">
            Payments are processed through encrypted gateways compliant with PCI
            DSS standards. We never store your card, UPI, or banking
            credentials.
          </p>
        </section>

        {/* Data Protection */}
        <section className="bg-white border border-purple-100 shadow-md rounded-2xl p-8 mb-10">
          <h3 className="text-2xl font-semibold mb-4 text-[#6b21a8]">
            🛡️ Data Protection
          </h3>
          <p className="text-xl text-gray-700 leading-8">
            Personal data is secured using SSL encryption, advanced firewalls,
            and strict access controls to prevent unauthorized intrusion.
          </p>
        </section>

        {/* Account Security */}
        <section className="bg-white border border-purple-100 shadow-md rounded-2xl p-8 mb-10">
          <h3 className="text-2xl font-semibold mb-4 text-[#6b21a8]">
            👤 Account Security
          </h3>
          <p className="text-xl text-gray-700 leading-8">
            Always use a strong, unique password and enable two-factor
            authentication (2FA). Never share your credentials with others.
          </p>
        </section>

        {/* Fraud Monitoring */}
        <section className="bg-white border border-purple-100 shadow-md rounded-2xl p-8 mb-10">
          <h3 className="text-2xl font-semibold mb-4 text-[#6b21a8]">
            ⚠️ Fraud Monitoring
          </h3>
          <p className="text-xl text-gray-700 leading-8">
            Our system monitors for unusual activity. We may temporarily lock
            accounts or reach out to confirm your identity if needed.
          </p>
        </section>

        {/* ✅ New Section: Continuous Improvements */}
        <section className="bg-white border border-purple-100 shadow-md rounded-2xl p-8 mb-10">
          <h3 className="text-2xl font-semibold mb-4 text-[#6b21a8]">
            🔁 Continuous Improvements
          </h3>
          <p className="text-xl text-gray-700 leading-8">
            Our security team constantly reviews and updates systems to stay
            ahead of emerging threats. We conduct regular audits and follow
            industry best practices.
          </p>
        </section>

        {/* Contact & Support */}
        <section className="bg-white border border-purple-100 shadow-md rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-semibold mb-4 text-[#6b21a8]">
            📧 Contact & Support
          </h3>
          <p className="text-xl text-gray-700 leading-8">
            For security concerns or if you suspect unauthorized access, contact
            our support team at{" "}
            <span className="text-[#6b21a8] font-medium">
              security@example.com
            </span>
            .
          </p>
        </section>

        {/* Footer */}
        <footer className="text-center text-base text-gray-500">
          &copy; {new Date().getFullYear()} ShopKart Pvt. Ltd. All rights
          reserved.
        </footer>
      </div>
    </div>
  );
};

export default SecurityPolicy;
