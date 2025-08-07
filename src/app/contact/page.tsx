"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import headerData from "@/components/headerData";
import { getFooterData } from "@/lib/mockApi";

export default function ContactPage() {
  const footerData = getFooterData();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    inquiryType: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [selectFocused, setSelectFocused] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      inquiryType: "",
      subject: "",
      message: "",
    });
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
          <div className="grid grid-cols-1 gap-10 items-start">
            {/* Contact Form Card */}
            <form
              onSubmit={handleSubmit}
              className="relative bg-white/80 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/30 p-8 flex flex-col gap-6 overflow-hidden group w-full"
            >
              {/* Animated border accent */}
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 rounded-3xl blur opacity-60 group-hover:opacity-90 transition duration-1000 group-hover:duration-200 -z-10" />
              {/* Floating shapes */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-primary/30 to-accent/20 rounded-full blur-xl opacity-40" />
              <div className="absolute bottom-0 left-0 w-10 h-10 bg-gradient-to-br from-accent/20 to-primary/10 rounded-full blur-lg opacity-30" />

              {/* Form Header */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-primary mb-2">
                  Get in Touch
                </h3>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </p>
              </div>

              {/* Personal Information Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName || ""}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 text-secondary bg-transparent border-0 rounded-xl focus:outline-none peer placeholder-transparent shadow-sm ring-1 ring-primary/20 focus:ring-2 focus:ring-primary/60 transition-all"
                    placeholder=" "
                    id="contact-firstName"
                  />
                  <label
                    htmlFor="contact-firstName"
                    className={`absolute left-6 transition-all duration-300 pointer-events-none
                      ${
                        form.firstName
                          ? "top-2 text-xs text-primary font-medium"
                          : "top-4 text-base text-primary/70 peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary peer-focus:font-medium"
                      }`}
                  >
                    First Name *
                  </label>
                  <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-accent scale-x-0 peer-focus:scale-x-100 transition-transform duration-300 origin-left" />
                </div>

                <div className="relative">
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName || ""}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 text-secondary bg-transparent border-0 rounded-xl focus:outline-none peer placeholder-transparent shadow-sm ring-1 ring-primary/20 focus:ring-2 focus:ring-primary/60 transition-all"
                    placeholder=" "
                    id="contact-lastName"
                  />
                  <label
                    htmlFor="contact-lastName"
                    className={`absolute left-6 transition-all duration-300 pointer-events-none
                      ${
                        form.lastName
                          ? "top-2 text-xs text-primary font-medium"
                          : "top-4 text-base text-primary/70 peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary peer-focus:font-medium"
                      }`}
                  >
                    Last Name *
                  </label>
                  <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-accent scale-x-0 peer-focus:scale-x-100 transition-transform duration-300 origin-left" />
                </div>
              </div>

              {/* Contact Information Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    Email Address *
                  </label>
                  <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-accent scale-x-0 peer-focus:scale-x-100 transition-transform duration-300 origin-left" />
                </div>

                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone || ""}
                    onChange={handleChange}
                    className="w-full px-6 py-4 text-secondary bg-transparent border-0 rounded-xl focus:outline-none peer placeholder-transparent shadow-sm ring-1 ring-primary/20 focus:ring-2 focus:ring-primary/60 transition-all"
                    placeholder=" "
                    id="contact-phone"
                  />
                  <label
                    htmlFor="contact-phone"
                    className={`absolute left-6 transition-all duration-300 pointer-events-none
                      ${
                        form.phone
                          ? "top-2 text-xs text-primary font-medium"
                          : "top-4 text-base text-primary/70 peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary peer-focus:font-medium"
                      }`}
                  >
                    Phone Number
                  </label>
                  <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-accent scale-x-0 peer-focus:scale-x-100 transition-transform duration-300 origin-left" />
                </div>
              </div>

              {/* Company Information Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    name="company"
                    value={form.company || ""}
                    onChange={handleChange}
                    className="w-full px-6 py-4 text-secondary bg-transparent border-0 rounded-xl focus:outline-none peer placeholder-transparent shadow-sm ring-1 ring-primary/20 focus:ring-2 focus:ring-primary/60 transition-all"
                    placeholder=" "
                    id="contact-company"
                  />
                  <label
                    htmlFor="contact-company"
                    className={`absolute left-6 transition-all duration-300 pointer-events-none
                      ${
                        form.company
                          ? "top-2 text-xs text-primary font-medium"
                          : "top-4 text-base text-primary/70 peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary peer-focus:font-medium"
                      }`}
                  >
                    Company Name
                  </label>
                  <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-accent scale-x-0 peer-focus:scale-x-100 transition-transform duration-300 origin-left" />
                </div>

                <div className="relative">
                  <select
                    name="inquiryType"
                    value={form.inquiryType || ""}
                    onChange={handleChange}
                    onFocus={() => setSelectFocused(true)}
                    onBlur={() => setSelectFocused(false)}
                    className="w-full px-6 py-4 text-secondary bg-transparent border-0 rounded-xl focus:outline-none peer placeholder-transparent shadow-sm ring-1 ring-primary/20 focus:ring-2 focus:ring-primary/60 transition-all appearance-none cursor-pointer"
                    id="contact-inquiryType"
                  >
                    <option value="" disabled className="text-gray-400">
                      Select Inquiry Type
                    </option>
                    <option value="general">General Inquiry</option>
                    <option value="partnership">Partnership</option>
                    <option value="support">Technical Support</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                  {(selectFocused || form.inquiryType) && (
                    <label
                      htmlFor="contact-inquiryType"
                      className="absolute left-6 top-2 text-xs text-primary font-medium transition-all duration-300 pointer-events-none bg-white/80 px-1"
                    >
                      Inquiry Type
                    </label>
                  )}
                  <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-accent scale-x-0 peer-focus:scale-x-100 transition-transform duration-300 origin-left" />
                  {/* Custom dropdown arrow */}
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-primary/60 transition-transform duration-200 peer-focus:rotate-180 peer-focus:text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Subject */}
              <div className="relative">
                <input
                  type="text"
                  name="subject"
                  value={form.subject || ""}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 text-secondary bg-transparent border-0 rounded-xl focus:outline-none peer placeholder-transparent shadow-sm ring-1 ring-primary/20 focus:ring-2 focus:ring-primary/60 transition-all"
                  placeholder=" "
                  id="contact-subject"
                />
                <label
                  htmlFor="contact-subject"
                  className={`absolute left-6 transition-all duration-300 pointer-events-none
                    ${
                      form.subject
                        ? "top-2 text-xs text-primary font-medium"
                        : "top-4 text-base text-primary/70 peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary peer-focus:font-medium"
                    }`}
                >
                  Subject *
                </label>
                <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-accent scale-x-0 peer-focus:scale-x-100 transition-transform duration-300 origin-left" />
              </div>

              {/* Message */}
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
                  Your Message *
                </label>
                <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-accent scale-x-0 peer-focus:scale-x-100 transition-transform duration-300 origin-left" />
              </div>

              {/* Submit Button */}
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
            <div className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[340px] bg-gradient-to-br from-accent-50/60 via-primary-50/40 to-accent-50/30 flex flex-col items-center justify-center border border-white/30 backdrop-blur-xl p-6">
              <h2 className="text-2xl font-bold text-primary mb-2 text-center">
                Find Us
              </h2>
              <p className="text-center text-gray-700 mb-6 max-w-md">
                Visit our office and experience our innovative workspace
                firsthand.
              </p>
              <div className="w-full h-full min-h-[340px] flex items-center justify-center">
                <iframe
                  title="Our Location"
                  src="https://www.google.com/maps?q=13.5,39.48&z=15&output=embed"
                  className="w-full h-full min-h-[340px] rounded-3xl border-0"
                  loading="lazy"
                  style={{ minHeight: 340 }}
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Contact Information Section */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-primary mb-8 text-center">
                Contact Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <svg
                      className="w-5 h-5 text-primary flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-primary text-sm uppercase tracking-wide">
                        Address
                      </h4>
                      <p className="text-gray-700 mt-1">
                        Memi Place
                        <br />
                        Tigray, Ethiopia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <svg
                      className="w-5 h-5 text-primary flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-primary text-sm uppercase tracking-wide">
                        Phone
                      </h4>
                      <p className="text-gray-700 mt-1">+251 912 345 678</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <svg
                      className="w-5 h-5 text-primary flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-primary text-sm uppercase tracking-wide">
                        Email
                      </h4>
                      <p className="text-gray-700 mt-1">info@memi-plc.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <svg
                      className="w-5 h-5 text-primary flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-primary text-sm uppercase tracking-wide">
                        Business Hours
                      </h4>
                      <p className="text-gray-700 mt-1">
                        Monday - Friday: 9:00 AM - 6:00 PM
                        <br />
                        Saturday: 10:00 AM - 4:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer {...footerData} />
    </div>
  );
}
