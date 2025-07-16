import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gradient-to-br from-[#f3e8ff] to-white min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto text-gray-800">
        {/* Title */}
        <h1 className="text-5xl font-bold mb-16 text-center text-[#6b21a8]">
          Privacy Policy
        </h1>

        {/* Intro Text */}
        <p className="mb-12 text-xl leading-8 text-gray-700 text-center max-w-3xl mx-auto">
          Your privacy is important to us. This policy explains how we collect,
          use, and safeguard your information when you use our website or
          services.
        </p>

        {/* Section: Information We Collect */}
        <section className="bg-white shadow-md rounded-2xl p-8 mb-12 border border-purple-100">
          <h2 className="text-3xl font-semibold text-[#6b21a8] mb-5">
            Information We Collect
          </h2>
          <ul className="list-disc space-y-3 pl-6 text-xl text-gray-700">
            <li>Personal identification (name, email, phone number)</li>
            <li>Order and transaction details</li>
            <li>Device and browser data</li>
            <li>Interaction and usage behavior on our platform</li>
          </ul>
        </section>

        {/* Section: How We Use Your Information */}
        <section className="bg-white shadow-md rounded-2xl p-8 mb-12 border border-purple-100">
          <h2 className="text-3xl font-semibold text-[#6b21a8] mb-5">
            How We Use Your Information
          </h2>
          <p className="text-xl leading-8 text-gray-700">
            We use your data to enhance your shopping experience, fulfill
            orders, provide customer support, personalize recommendations, and
            share promotional offers or updates.
          </p>
        </section>

        {/* Section: Data Protection */}
        <section className="bg-white shadow-md rounded-2xl p-8 mb-12 border border-purple-100">
          <h2 className="text-3xl font-semibold text-[#6b21a8] mb-5">
            Data Protection
          </h2>
          <p className="text-xl leading-8 text-gray-700">
            We implement industry-standard security protocols to protect your
            information. Access to personal data is strictly controlled and
            monitored.
          </p>
        </section>

        {/* Section: Your Rights */}
        <section className="bg-white shadow-md rounded-2xl p-8 mb-12 border border-purple-100">
          <h2 className="text-3xl font-semibold text-[#6b21a8] mb-5">
            Your Rights
          </h2>
          <p className="text-xl leading-8 text-gray-700">
            You may request access, correction, deletion, or restriction of your
            personal data. For any concerns, please reach out via our{" "}
            <a
              href="/contact"
              className="text-[#6b21a8] underline hover:text-purple-700 font-medium"
            >
              Contact Page
            </a>
            .
          </p>
        </section>

        {/* ✅ New Section: Third-Party Services */}
        <section className="bg-white shadow-md rounded-2xl p-8 mb-16 border border-purple-100">
          <h2 className="text-3xl font-semibold text-[#6b21a8] mb-5">
            Third-Party Services
          </h2>
          <p className="text-xl leading-8 text-gray-700">
            We may use trusted third-party tools or services for analytics,
            payment processing, or marketing. These partners are obligated to
            comply with data protection regulations and cannot use your data for
            unrelated purposes.
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

export default PrivacyPolicy;
