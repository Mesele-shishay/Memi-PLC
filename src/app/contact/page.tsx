"use client";
import React, { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import headerData from "@/components/headerData";
import { api } from "@/lib/apiClient";

export default function ContactPage() {
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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [userName, setUserName] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Prepare data according to backend DTO requirements
      const messageData = {
        firstName: form.firstName.trim(),
        lastName: form.lastName.trim(),
        email: form.email.trim(),
        phone: form.phone.trim() || undefined,
        company: form.company.trim() || undefined,
        inquiryType: form.inquiryType || undefined,
        subject: form.subject.trim(),
        message: form.message.trim(),
      };

      // Validate required fields
      if (
        !messageData.firstName ||
        !messageData.lastName ||
        !messageData.email ||
        !messageData.subject ||
        !messageData.message
      ) {
        throw new Error("Please fill in all required fields");
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(messageData.email)) {
        throw new Error("Please enter a valid email address");
      }

      // Validate phone number if provided
      if (messageData.phone) {
        const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
        if (!phoneRegex.test(messageData.phone)) {
          throw new Error("Please enter a valid phone number");
        }
      }

      // Post to backend API
      const response = await api.post("/contact", messageData, {
        skipAuth: true,
      });

      // If we get here, the request was successful
      setUserName(messageData.firstName);
      setSuccess(true);
      // Reset form
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

      // Show success message for 5 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    } catch (err: any) {
      // Handle different types of errors
      if (err?.status === 429) {
        setError(
          "You're sending messages too quickly. Please wait a moment and try again."
        );
      } else if (err?.data?.error) {
        setError(err.data.error);
      } else if (err.message) {
        setError(err.message);
      } else {
        setError("Failed to send message. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Decorative background removed for performance */}
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
              className="relative bg-white/80 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/40 p-8 flex flex-col gap-6 overflow-hidden group w-full"
            >
              {/* Fancy background accents removed for performance */}

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
                    className="w-full px-6 py-4 text-primary-900 bg-transparent border-0 rounded-xl focus:outline-none peer placeholder-transparent shadow-sm ring-1 ring-primary/20 focus:ring-2 focus:ring-primary/60 transition-all"
                    placeholder=" "
                    id="contact-firstName"
                  />
                  <label
                    htmlFor="contact-firstName"
                    className={`absolute left-6 transition-all duration-300 pointer-events-none
                      ${
                        form.firstName
                          ? "top-1 text-xs text-primary font-medium"
                          : "top-5 text-base text-primary/70 peer-focus:top-1 peer-focus:text-xs peer-focus:text-primary peer-focus:font-medium"
                      }`}
                  >
                    First Name *
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName || ""}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 text-primary-900 bg-transparent border-0 rounded-xl focus:outline-none peer placeholder-transparent shadow-sm ring-1 ring-primary/20 focus:ring-2 focus:ring-primary/60 transition-all"
                    placeholder=" "
                    id="contact-lastName"
                  />
                  <label
                    htmlFor="contact-lastName"
                    className={`absolute left-6 transition-all duration-300 pointer-events-none
                      ${
                        form.lastName
                          ? "top-1 text-xs text-primary font-medium"
                          : "top-5 text-base text-primary/70 peer-focus:top-1 peer-focus:text-xs peer-focus:text-primary peer-focus:font-medium"
                      }`}
                  >
                    Last Name *
                  </label>
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
                    className="w-full px-6 py-4 text-primary-900 bg-transparent border-0 rounded-xl focus:outline-none peer placeholder-transparent shadow-sm ring-1 ring-primary/20 focus:ring-2 focus:ring-primary/60 transition-all"
                    placeholder=" "
                    id="contact-email"
                  />
                  <label
                    htmlFor="contact-email"
                    className={`absolute left-6 transition-all duration-300 pointer-events-none
                      ${
                        form.email
                          ? "top-1 text-xs text-primary font-medium"
                          : "top-5 text-base text-primary/70 peer-focus:top-1 peer-focus:text-xs peer-focus:text-primary peer-focus:font-medium"
                      }`}
                  >
                    Email Address *
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone || ""}
                    onChange={handleChange}
                    className="w-full px-6 py-4 text-primary-900 bg-transparent border-0 rounded-xl focus:outline-none peer placeholder-transparent shadow-sm ring-1 ring-primary/20 focus:ring-2 focus:ring-primary/60 transition-all"
                    placeholder=" "
                    id="contact-phone"
                  />
                  <label
                    htmlFor="contact-phone"
                    className={`absolute left-6 transition-all duration-300 pointer-events-none
                      ${
                        form.phone
                          ? "top-1 text-xs text-primary font-medium"
                          : "top-5 text-base text-primary/70 peer-focus:top-1 peer-focus:text-xs peer-focus:text-primary peer-focus:font-medium"
                      }`}
                  >
                    Phone Number
                  </label>
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
                    className="w-full px-6 py-4 text-primary-900 bg-transparent border-0 rounded-xl focus:outline-none peer placeholder-transparent shadow-sm ring-1 ring-primary/20 focus:ring-2 focus:ring-primary/60 transition-all"
                    placeholder=" "
                    id="contact-company"
                  />
                  <label
                    htmlFor="contact-company"
                    className={`absolute left-6 transition-all duration-300 pointer-events-none
                      ${
                        form.company
                          ? "top-1 text-xs text-primary font-medium"
                          : "top-5 text-base text-primary/70 peer-focus:top-1 peer-focus:text-xs peer-focus:text-primary peer-focus:font-medium"
                      }`}
                  >
                    Company Name
                  </label>
                </div>

                <div className="relative">
                  <Select
                    value={form.inquiryType || ""}
                    onValueChange={(value) =>
                      setForm({ ...form, inquiryType: value })
                    }
                  >
                    <SelectTrigger
                      id="contact-inquiryType"
                      className="w-full !h-auto min-h-[48px] px-6 py-4 text-base text-primary/80 data-[placeholder]:text-primary/60 bg-transparent border-0 rounded-xl shadow-sm ring-1 ring-primary/20 focus:ring-2 focus:ring-primary/60 [&_svg]:text-primary/50"
                    >
                      <SelectValue
                        placeholder="Select Inquiry Type"
                        className="text-primary"
                      />
                    </SelectTrigger>
                    <SelectContent className="bg-white/90 backdrop-blur-md border-primary/20 shadow-primary text-primary-900">
                      <SelectItem
                        className="text-base text-primary-900 focus:bg-primary-50 focus:text-primary-700 data-[state=checked]:bg-primary-100 data-[state=checked]:text-primary-700"
                        value="general"
                      >
                        General Inquiry
                      </SelectItem>
                      <SelectItem
                        className="text-base text-primary-900 focus:bg-primary-50 focus:text-primary-700 data-[state=checked]:bg-primary-100 data-[state=checked]:text-primary-700"
                        value="partnership"
                      >
                        Partnership
                      </SelectItem>
                      <SelectItem
                        className="text-base text-primary-900 focus:bg-primary-50 focus:text-primary-700 data-[state=checked]:bg-primary-100 data-[state=checked]:text-primary-700"
                        value="support"
                      >
                        Technical Support
                      </SelectItem>
                      <SelectItem
                        className="text-base text-primary-900 focus:bg-primary-50 focus:text-primary-700 data-[state=checked]:bg-primary-100 data-[state=checked]:text-primary-700"
                        value="feedback"
                      >
                        Feedback
                      </SelectItem>
                      <SelectItem
                        className="text-base text-primary-900 focus:bg-primary-50 focus:text-primary-700 data-[state=checked]:bg-primary-100 data-[state=checked]:text-primary-700"
                        value="other"
                      >
                        Other
                      </SelectItem>
                    </SelectContent>
                  </Select>
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
                  className="w-full px-6 py-4 text-primary-900 bg-transparent border-0 rounded-xl focus:outline-none peer placeholder-transparent shadow-sm ring-1 ring-primary/20 focus:ring-2 focus:ring-primary/60 transition-all"
                  placeholder=" "
                  id="contact-subject"
                />
                <label
                  htmlFor="contact-subject"
                  className={`absolute left-6 transition-all duration-300 pointer-events-none
                    ${
                      form.subject
                        ? "top-1 text-xs text-primary font-medium"
                        : "top-5 text-base text-primary/70 peer-focus:top-1 peer-focus:text-xs peer-focus:text-primary peer-focus:font-medium"
                    }`}
                >
                  Subject *
                </label>
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 text-primary-900 bg-transparent border-0 rounded-xl focus:outline-none peer placeholder-transparent shadow-sm ring-1 ring-primary/20 focus:ring-2 focus:ring-primary/60 transition-all min-h-[120px] resize-none"
                  placeholder=" "
                  id="contact-message"
                  maxLength={1000}
                />
                <label
                  htmlFor="contact-message"
                  className={`absolute left-6 transition-all duration-300 pointer-events-none
                    ${
                      form.message
                        ? "top-1 text-xs text-primary font-medium"
                        : "top-5 text-base text-primary/70 peer-focus:top-1 peer-focus:text-xs peer-focus:text-primary peer-focus:font-medium"
                    }`}
                >
                  Your Message *
                </label>
                <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary-400 to-primary-600 scale-x-0 peer-focus:scale-x-100 transition-transform duration-300 origin-left" />
                {/* Character count */}
                <div className="absolute bottom-2 right-4 text-xs text-gray-400">
                  {form.message.length}/1000
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="relative inline-flex items-center justify-center w-full md:w-auto md:self-end px-6 py-3 md:px-4 md:py-2 text-sm md:text-sm bg-gradient-to-r from-primary-600 via-primary-500 to-primary-400 text-white rounded-xl font-semibold shadow-lg group/btn overflow-hidden cursor-pointer ring-1 ring-primary-300/50"
                disabled={loading}
              >
                <span className="relative z-10 flex items-center space-x-2">
                  {loading ? (
                    <>
                      <span className="inline-flex items-center">
                        <span
                          className="w-5 h-5 rounded-full border-2 border-blue-300 border-t-blue-600"
                          aria-hidden="true"
                        />
                      </span>
                      <span className="text-white">Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <svg
                        className="w-5 h-5"
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
              {error && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-center font-medium">
                  {error}
                </div>
              )}
              {success && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-center font-medium">
                  Thank you {userName}! Your message has been sent successfully.
                  We'll get back to you soon.
                </div>
              )}
            </form>
            {/* Map Section */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[340px] bg-gradient-to-br from-primary-50/70 via-gray-50/60 to-white/60 flex flex-col items-center justify-center border border-white/40 backdrop-blur-xl p-6">
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
                      <p className="text-gray-700 mt-1">info@memiplc.com</p>
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
      <Footer />
    </div>
  );
}
