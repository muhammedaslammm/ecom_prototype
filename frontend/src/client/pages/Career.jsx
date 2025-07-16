import React from "react";

const Career = () => {
  return (
    <div className="px-4 sm:px-6 py-12 max-w-6xl mx-auto text-black bg-white">
      <h1 className="text-3xl sm:text-5xl font-extrabold mb-12 text-center text-[#bc46c2]">
        Careers at <span className="text-[#cfb97c]">Prototype</span>
        <div className="w-24 h-1 bg-[#cfb97c] mx-auto mt-3 rounded"></div>
      </h1>

      {/* Intro */}
      <section className="mb-14">
        <div className="bg-neutral-100 p-6 sm:p-8 rounded-xl shadow-md transition hover:shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-[#bc46c2]">
            🚀 Join Our Journey
          </h2>
          <p className="text-base sm:text-lg leading-7 text-gray-800">
            At <strong>Prototype</strong>, we’re redefining the online shopping
            experience. We’re looking for bold thinkers, passionate creators,
            and tech-driven minds to be part of our growing team. Whether you're
            into coding, design, logistics, or strategy—we've got a place for
            you.
          </p>
        </div>
      </section>

      {/* Roles */}
      <section className="mb-20">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-center text-[#bc46c2]">
          🌟 Open Roles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              title: "💻 Software Engineering",
              desc: "Build robust tech for millions—frontend, backend, or full-stack.",
            },
            {
              title: "🎨 Design & UX",
              desc: "Shape user experiences that delight and drive engagement.",
            },
            {
              title: "📦 Operations & Logistics",
              desc: "Streamline delivery, inventory, and fulfillment strategies.",
            },
            {
              title: "📈 Marketing & Growth",
              desc: "Drive customer acquisition and retention through smart campaigns.",
            },
            {
              title: "🛒 Customer Support",
              desc: "Deliver empathy, resolve issues, and earn trust with every chat.",
            },
            {
              title: "🧠 Product Management",
              desc: "Bridge business needs and tech execution to build features users love.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-neutral-100 rounded-xl p-6 sm:p-7 shadow-md hover:shadow-xl transition border-l-4 border-[#bc46c2]"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#bc46c2]">
                {item.title}
              </h3>
              <p className="text-gray-800 text-sm sm:text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Perks */}
      <section className="mb-20 bg-gradient-to-r from-[#fef9ff] to-[#fffdf8] p-6 sm:p-8 rounded-xl shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-5 text-[#cfb97c]">
          ✨ Perks & Benefits
        </h2>
        <ul className="list-disc pl-5 sm:pl-6 text-base sm:text-lg space-y-3 text-gray-800">
          <li>Flexible work hours & hybrid/remote options</li>
          <li>Medical insurance, wellness support & mental health care</li>
          <li>Annual learning budget for courses, books, and conferences</li>
          <li>Performance bonuses & employee stock options</li>
          <li>
            Inclusive, vibrant team culture with regular offsites & events
          </li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="mb-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-[#bc46c2]">
          📬 Apply Now
        </h2>
        <p className="text-gray-800 text-base sm:text-lg mb-2">
          Send your resume and portfolio to{" "}
          <span className="text-[#cfb97c] font-semibold">
            careers@example.com
          </span>
        </p>
        <p className="text-gray-800 text-base sm:text-lg">
          Tell us why you're excited to join <strong>Prototype</strong> and how
          you’ll make an impact.
        </p>
      </section>

      {/* Footer Note */}
      <div className="text-center text-xs sm:text-sm text-gray-500 mt-12">
        &copy; {new Date().getFullYear()} Prototype Careers. All rights
        reserved.
      </div>
    </div>
  );
};

export default Career;
