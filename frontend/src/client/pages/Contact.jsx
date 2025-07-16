import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="px-4 sm:px-6 py-12 max-w-6xl mx-auto text-black bg-white">
      <motion.h1
        className="text-3xl sm:text-5xl font-extrabold mb-12 text-center text-[#bc46c2]"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact <span className="text-[#cfb97c]">Us</span>
        <div className="w-24 h-1 bg-[#cfb97c] mx-auto mt-3 rounded"></div>
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10">
        {/* Contact Form */}
        <motion.div
          className="bg-neutral-100 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg border-l-4 border-[#bc46c2] space-y-6"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-[#bc46c2]">
            📝 Send a Message
          </h2>
          {submitted && (
            <p className="text-green-600 font-medium">
              Thank you! We'll get back to you soon.
            </p>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#bc46c2] text-sm sm:text-base"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#bc46c2] text-sm sm:text-base"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#bc46c2] text-sm sm:text-base"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#bc46c2] text-white py-3 rounded-xl hover:bg-[#a33eb1] transition font-semibold text-sm sm:text-base"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="bg-[#fef9ff] rounded-2xl p-6 sm:p-8 shadow-md border-l-4 border-[#cfb97c] space-y-6"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-[#cfb97c]">
            📬 Contact Information
          </h2>
          <div className="space-y-4 text-slate-700 text-sm sm:text-base">
            <p>
              📧 <strong>Email:</strong>{" "}
              <span className="text-[#bc46c2]">support@example.com</span>
            </p>
            <p>
              📞 <strong>Phone:</strong>{" "}
              <span className="text-[#bc46c2]">+971 50 123 4567</span>
            </p>
            <p>
              📍 <strong>Location:</strong>{" "}
              <span className="text-[#bc46c2]">
                Dubai, United Arab Emirates
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
