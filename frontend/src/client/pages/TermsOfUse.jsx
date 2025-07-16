import React from "react";
import { ShieldCheck, User, FileText, Lock, Info, XCircle } from "lucide-react";

const TermsOfUse = () => {
  return (
    <div className="bg-gradient-to-br from-[#f3e8ff] to-white min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto text-gray-800">
        {/* Title */}
        <h1 className="text-5xl font-bold mb-16 text-center text-[#6b21a8]">
          Terms of Use
        </h1>

        {/* Section 1: Acceptance */}
        <section className="bg-white shadow-md rounded-2xl p-8 mb-12 border border-purple-100">
          <div className="flex items-center gap-4 mb-5">
            <ShieldCheck className="text-[#6b21a8]" size={30} />
            <h2 className="text-3xl font-semibold text-[#6b21a8]">
              1. Acceptance of Terms
            </h2>
          </div>
          <p className="text-xl leading-8 text-gray-700">
            By accessing or using our platform, you agree to comply with and be
            bound by these Terms of Use. If you do not agree to these terms,
            please do not use the website.
          </p>
        </section>

        {/* Section 2: Registration */}
        <section className="bg-white shadow-md rounded-2xl p-8 mb-12 border border-purple-100">
          <div className="flex items-center gap-4 mb-5">
            <User className="text-[#6b21a8]" size={30} />
            <h2 className="text-3xl font-semibold text-[#6b21a8]">
              2. Account Registration
            </h2>
          </div>
          <p className="text-xl leading-8 text-gray-700">
            To use certain features, you must register and create an account.
            You're responsible for keeping your login credentials safe and for
            any activity under your account.
          </p>
        </section>

        {/* Section 3: Guidelines */}
        <section className="bg-white shadow-md rounded-2xl p-8 mb-12 border border-purple-100">
          <div className="flex items-center gap-4 mb-5">
            <FileText className="text-[#6b21a8]" size={30} />
            <h2 className="text-3xl font-semibold text-[#6b21a8]">
              3. Usage Guidelines
            </h2>
          </div>
          <ul className="list-disc pl-6 space-y-3 text-xl text-gray-700">
            <li>Use the platform for legal and ethical purposes only.</li>
            <li>Do not impersonate others or provide false information.</li>
            <li>Avoid spamming, hacking, or abusing services.</li>
          </ul>
        </section>

        {/* Section 4: IP */}
        <section className="bg-white shadow-md rounded-2xl p-8 mb-12 border border-purple-100">
          <div className="flex items-center gap-4 mb-5">
            <Lock className="text-[#6b21a8]" size={30} />
            <h2 className="text-3xl font-semibold text-[#6b21a8]">
              4. Intellectual Property & Content
            </h2>
          </div>
          <p className="text-xl leading-8 text-gray-700">
            All logos, designs, text, and graphics are the intellectual property
            of our company and may not be reused or copied without permission.
          </p>
        </section>

        {/* Section 5: Changes */}
        <section className="bg-white shadow-md rounded-2xl p-8 mb-12 border border-purple-100">
          <div className="flex items-center gap-4 mb-5">
            <Info className="text-[#6b21a8]" size={30} />
            <h2 className="text-3xl font-semibold text-[#6b21a8]">
              5. Changes to Terms
            </h2>
          </div>
          <p className="text-xl leading-8 text-gray-700">
            We may update these Terms of Use at any time. Continued use of our
            platform implies your acceptance of the modified terms.
          </p>
        </section>

        {/* Section 6: Contact */}
        <section className="bg-white shadow-md rounded-2xl p-8 mb-12 border border-purple-100">
          <h2 className="text-3xl font-semibold text-[#6b21a8] mb-5">
            6. Contact Us
          </h2>
          <p className="text-xl leading-8 text-gray-700">
            For any questions about our Terms of Use, please reach out through
            our{" "}
            <a
              href="/contact"
              className="underline font-medium text-[#6b21a8] hover:text-purple-700"
            >
              Contact Page
            </a>
            .
          </p>
        </section>

        {/* ✅ New Section 7: Termination */}
        <section className="bg-white shadow-md rounded-2xl p-8 mb-16 border border-purple-100">
          <div className="flex items-center gap-4 mb-5">
            <XCircle className="text-[#6b21a8]" size={30} />
            <h2 className="text-3xl font-semibold text-[#6b21a8]">
              7. Termination of Services
            </h2>
          </div>
          <p className="text-xl leading-8 text-gray-700">
            We reserve the right to suspend or terminate your access to our
            services at any time for violations of these terms or any behavior
            that may harm our users, systems, or reputation.
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

export default TermsOfUse;
