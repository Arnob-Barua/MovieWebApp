// Importing necessary libraries and components
import React from "react";
import { useNavigate } from "react-router-dom";

// Main Contact component
const Contact = () => {
  // Navigation hook
  const navigate = useNavigate();

  return (
    <div className="px-8 py-12 bg-[#1F1E24] text-white">
      {/* Header */}
      <h1 className="text-2xl font-semibold text-zinc-400">
        <i
          onClick={() => {
            navigate(-1);
          }}
          className="ri-arrow-left-line hover:text-[#6556CD]"
        ></i>
        Contact Us
      </h1>

      {/* Description */}
      <p className="text-lg mb-4">
        If you have any questions, feedback, or suggestions, feel free to reach
        out to us. We'd love to hear from you!
      </p>

      {/* Contact form */}
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-lg font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-[#6556CD]"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-lg font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-[#6556CD]"
            placeholder="Your Email"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-lg font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            className="w-full p-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-[#6556CD]"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full p-3 bg-[#6556CD] rounded-lg text-lg font-medium hover:bg-[#5346bd] transition-colors"
        >
          Send Message
        </button>
      </form>

      {/* Note */}
      <p className="text-lg mb-4">
        Note: This form is for display purposes only.
      </p>
    </div>
  );
};

export default Contact;
