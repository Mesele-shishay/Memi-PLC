"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import headerData from "@/components/headerData";
import footerData from "@/components/footerData";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Subtle animated background shapes */}
      <div className="pointer-events-none select-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-2xl animate-pulse delay-1000" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-br from-primary/10 to-accent/5 rounded-full blur-2xl animate-pulse delay-500" />
      </div>
      <Header {...headerData} />
      <main className="pt-28 lg:pt-36 container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-4xl z-10 relative">
        <section className="mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-4 text-primary drop-shadow-lg">
            Contact Us
          </h1>
          <p className="text-center text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
            We'd love to hear from you! Reach out for inquiries, partnerships,
            or just to say hello.
          </p>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Contact Form Card */}
            <form
              onSubmit={handleSubmit}
              className="relative bg-white/80 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/30 p-8 flex flex-col gap-6 overflow-hidden group"
            >
              {/* Animated border accent */}
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 rounded-3xl blur opacity-60 group-hover:opacity-90 transition duration-1000 group-hover:duration-200 -z-10" />
              {/* Floating shapes */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-primary/30 to-accent/20 rounded-full blur-xl opacity-40" />
              <div className="absolute bottom-0 left-0 w-10 h-10 bg-gradient-to-br from-accent/20 to-primary/10 rounded-full blur-lg opacity-30" />
              {/* Inputs with floating labels */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 text-secondary bg-transparent border-0 rounded-xl focus:outline-none peer placeholder-transparent shadow-sm ring-1 ring-primary/20 focus:ring-2 focus:ring-primary/60 transition-all"
                  placeholder=" "
                  id="contact-name"
                />
                <label
                  htmlFor="contact-name"
                  className={`absolute left-6 transition-all duration-300 pointer-events-none
                    ${
                      form.name
                        ? "top-2 text-xs text-primary font-medium"
                        : "top-4 text-base text-primary/70 peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary peer-focus:font-medium"
                    }`}
                >
                  Your Name
                </label>
                <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-accent scale-x-0 peer-focus:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 text-secondary bg-transparent border-0 rounded-xl focus:outline-none peer placeholder-transparent shadow-sm ring-1 ring-primary/20 focus:ring-2 focus:ring-primary/60 transition-all"
                  placeholder=" "
                  id="contact-email"
                />
                <label
                  htmlFor="contact-email"
                  className={`absolute left-6 transition-all duration-300 pointer-events-none
                    ${
                      form.email
                        ? "top-2 text-xs text-primary font-medium"
                        : "top-4 text-base text-primary/70 peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary peer-focus:font-medium"
                    }`}
                >
                  Your Email
                </label>
                <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-accent scale-x-0 peer-focus:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
              <div className="relative">
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 text-secondary bg-transparent border-0 rounded-xl focus:outline-none peer placeholder-transparent shadow-sm ring-1 ring-primary/20 focus:ring-2 focus:ring-primary/60 transition-all min-h-[120px] resize-none"
                  placeholder=" "
                  id="contact-message"
                />
                <label
                  htmlFor="contact-message"
                  className={`absolute left-6 transition-all duration-300 pointer-events-none
                    ${
                      form.message
                        ? "top-2 text-xs text-primary font-medium"
                        : "top-4 text-base text-primary/70 peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary peer-focus:font-medium"
                    }`}
                >
                  Your Message
                </label>
                <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-accent scale-x-0 peer-focus:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
              <button
                type="submit"
                className="relative px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group/btn overflow-hidden cursor-pointer"
                disabled={submitted}
              >
                <span className="relative z-10 flex items-center space-x-2">
                  {submitted ? (
                    <>
                      <svg
                        className="w-5 h-5 animate-bounce"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Sent!</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <svg
                        className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </>
                  )}
                </span>
              </button>
              {submitted && (
                <div className="mt-4 p-4 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30 animate-fade-in text-center text-primary font-medium">
                  Thank you for reaching out! We'll get back to you soon.
                </div>
              )}
            </form>
            {/* Map Section */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[340px] bg-gradient-to-br from-accent-50/60 via-primary-50/40 to-accent-50/30 flex items-center justify-center border border-white/30 backdrop-blur-xl">
              <iframe
                title="Our Location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=39.45%2C13.48%2C39.50%2C13.52&amp;layer=mapnik"
                className="w-full h-full min-h-[340px] rounded-3xl border-0"
                loading="lazy"
                style={{ minHeight: 340 }}
                allowFullScreen
              ></iframe>
              {/* Glassy overlay with pin icon */}
              <div className="absolute top-6 left-6 bg-white/80 rounded-xl px-5 py-3 shadow text-primary font-bold text-base flex items-center gap-2 backdrop-blur-md">
                <svg
                  className="w-5 h-5 text-primary"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21c-4.418 0-8-4.03-8-9a8 8 0 1116 0c0 4.97-3.582 9-8 9zm0-11a2 2 0 100 4 2 2 0 000-4z"
                  />
                </svg>
                Tigray, Ethiopia
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer {...footerData} />
    </div>
  );
}
