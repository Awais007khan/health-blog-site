//Integrating EmailJS for form submission
"use client";

import { useRef } from "react";

import emailjs from "@emailjs/browser";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact Us",
  description: "Contact HealthBlog",
};

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zg9lpaa",
        "template_1mldso8",
        form.current,
        "d_eXgUjBTsjuxWJg3",
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        () => {
          alert("Failed to send message.");
        },
      );
  };

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-r from-green-50 to-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>

          <p className="text-lg text-gray-600">
            We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="bg-white shadow-xl rounded-3xl p-10">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-green-600"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-green-600"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-green-600"
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Your Message"
              required
              className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-green-600"
            ></textarea>

            <button className="bg-green-600 text-white px-8 py-4 rounded-xl hover:bg-green-700 transition">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
