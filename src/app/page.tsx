import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustedSection from "@/components/TrustedSection";
import SupportSection from "@/components/SupportSection";
import FeaturesSection from "@/components/FeaturesSection";
import BenefitSection from "@/components/BenefitSection";
import PricingSection from "@/components/PricingSection";
import TestimonialSection from "@/components/TestimonialSection";
import Footer from "@/components/Footer";

export default function Home() {
  // Header data
  const headerData = {
    logo: "MEMi Trading PLC",
    navLinks: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Products", href: "#products" },
      { label: "Youth Programs", href: "#youth" },
      { label: "Contact", href: "#contact" },
    ],
    ctaButtons: [
      { label: "Join Us", variant: "secondary" as const },
      { label: "Partner With Us", variant: "primary" as const },
    ],
  };

  // Hero section data
  const heroData = {
    title: "Transforming Tigray's Potential into Global Opportunities",
    subtitle:
      "MEMi Trading PLC is a fast-growing company based in Tigray, Ethiopia, creating a global platform for transforming local products, services, and youth potential into sustainable economic opportunities.",
    ctaButtons: [
      { label: "Explore Opportunities", variant: "primary" as const },
      { label: "Join Our Mission", variant: "secondary" as const },
    ],
    badges: [
      { label: "Tigray-Based", type: "rating" as const },
      {
        label: "Youth Focused",
        value: "50+ Jobs",
        type: "discount" as const,
      },
      { label: "Global Vision", value: "2033 Goal", type: "price" as const },
    ],
    image: {
      src: "/hero-image.jpg",
      alt: "MEMi Trading PLC - Empowering Tigray's youth and local products globally",
    },
  };

  // Trusted section data
  const trustedData = {
    title: "Partners in Tigray's Economic Transformation",
    brands: [
      {
        name: "Tigray Youth Association",
        logo: "👥",
        alt: "Tigray Youth Association",
      },
      {
        name: "Local Farmers Cooperative",
        logo: "🌾",
        alt: "Local Farmers Cooperative",
      },
      {
        name: "Tigray Chamber of Commerce",
        logo: "🏢",
        alt: "Tigray Chamber of Commerce",
      },
      {
        name: "Regional Development Agency",
        logo: "🏛️",
        alt: "Regional Development Agency",
      },
      {
        name: "Ethiopian Export Promotion",
        logo: "📦",
        alt: "Ethiopian Export Promotion",
      },
    ],
  };

  // Support section data
  const supportData = {
    title: "Empowering Tigray's Youth & Local Products Globally",
    subtitle:
      "Building sustainable economic opportunities through innovation, excellence, and inclusiveness while showcasing Tigray's potential on the global economic stage.",
    features: [
      {
        icon: "🎯",
        title: "Youth Empowerment",
        description:
          "Providing meaningful, tech-driven job opportunities for Tigray's youth, aiming to create over 300,000 jobs by 2033.",
      },
      {
        icon: "🌍",
        title: "Global Platform",
        description:
          "Transforming local Tigray products and services into international market opportunities with sustainable development focus.",
      },
      {
        icon: "🚀",
        title: "Innovation Hub",
        description:
          "Leading with excellence, innovation, and inclusiveness to build an internationally recognized brand from Tigray.",
      },
    ],
    ratings: [
      { company: "Tigray Business Review", score: "4.9 / 5", rating: 4.9 },
      { company: "Ethiopian Youth", score: "4.8 / 5", rating: 4.8 },
    ],
  };

  // Features section data
  const featuresData = {
    title: "Our Core Services & Programs",
    subtitle:
      "Discover how MEMi Trading PLC is creating sustainable economic opportunities through local product transformation and youth empowerment programs.",
    features: [
      {
        title: "Local Product Transformation",
        description:
          "Transforming Tigray's local products and services into globally competitive offerings, creating market access and sustainable economic growth for local communities.",
      },
      {
        title: "Youth Job Creation",
        description:
          "Empowering Tigray's youth with access to meaningful, tech-driven job opportunities, with a goal of creating over 300,000 youth jobs by 2033.",
      },
      {
        title: "Global Market Access",
        description:
          "Building international partnerships and market access for Tigray's products and services, promoting sustainable development through private-sector growth.",
      },
    ],
  };

  // Benefits section data
  const benefitsData = {
    title: "Why Choose MEMi Trading PLC",
    benefits: [
      {
        id: "1",
        text: "Tigray-Based Company with Global Vision & Local Expertise",
        completed: true,
      },
      {
        id: "2",
        text: "Youth-Focused Programs Creating 300,000+ Job Opportunities",
        completed: true,
      },
      {
        id: "3",
        text: "Sustainable Development Through Private-Sector Growth",
        completed: true,
      },
      {
        id: "4",
        text: "Innovation & Excellence in Local Product Transformation",
        completed: true,
      },
      {
        id: "5",
        text: "International Brand Building from Tigray to Global Markets",
        completed: true,
      },
    ],
    testimonial: {
      name: "Kidane Gebrehiwot",
      quote:
        "MEMi Trading PLC is transforming how we think about local products and youth opportunities in Tigray. Their vision for 2033 inspires us all.",
      role: "Youth Program Coordinator, Tigray Region",
    },
    image: {
      src: "/benefit-image.jpg",
      alt: "MEMi Trading PLC team working on youth empowerment and local product development",
    },
  };

  // Pricing section data
  const pricingData = {
    title: "Youth Development & Training Programs",
    subtitle:
      "Choose the program that fits your journey in Tigray's economic transformation. From basic skills to advanced entrepreneurship training.",
    billingOptions: ["Monthly Program", "Annual Program"],
    plans: [
      {
        name: "Starter",
        price: "ብር 1,500",
        period: "/month",
        features: [
          "Basic Skills Training",
          "Local Product Knowledge",
          "Market Access Introduction",
          "Community Network Access",
          "Mobile Learning Platform",
        ],
        ctaText: "Join Program",
      },
      {
        name: "Professional",
        price: "ብር 3,000",
        period: "/month",
        highlight: "Most Popular Choice",
        isPopular: true,
        features: [
          "All Starter Features",
          "Advanced Entrepreneurship Training",
          "Global Market Strategies",
          "Leadership Development",
          "1-on-1 Monthly Mentoring",
          "Product Development Tools",
        ],
        ctaText: "Go Professional",
      },
      {
        name: "Enterprise",
        price: "ብር 6,000",
        period: "/month",
        features: [
          "All Professional Features",
          "International Market Access",
          "Investment & Funding Support",
          "Weekly Group Coaching",
          "Direct Partner Access",
          "Business Plan Development",
          "Global Network Access",
        ],
        ctaText: "Scale Your Business",
      },
    ],
  };

  // Testimonial section data
  const testimonialData = {
    title: "What Tigray's Leaders Say About MEMi Trading PLC",
    testimonial: {
      name: "Martha Teklu",
      quote:
        "MEMi Trading PLC is not just a company; it's a movement that's empowering our youth and showcasing Tigray's potential to the world. Their commitment to creating 300,000 jobs by 2033 is exactly what our region needs.",
      role: "Regional Development Director, Tigray",
    },
    avatars: ["person1", "person2", "person3", "person4", "person5"],
  };

  // Footer data
  const footerData = {
    newsletter: {
      title: "Stay Updated with MEMi Trading PLC's Growth Journey",
      placeholder: "Enter your email address",
      buttonText: "Subscribe",
    },
    sections: [
      {
        title: "Programs",
        links: [
          { label: "Youth Empowerment", href: "#youth" },
          { label: "Product Transformation", href: "#products" },
          { label: "Market Access", href: "#market" },
          { label: "Training Programs", href: "#training" },
        ],
      },
      {
        title: "Services",
        links: [
          { label: "Local Product Development", href: "#development" },
          { label: "Global Market Access", href: "#global" },
          { label: "Youth Training", href: "#training" },
          { label: "Partnership Programs", href: "#partnerships" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About MEMi Trading PLC", href: "#about" },
          { label: "Our Vision 2033", href: "#vision" },
          { label: "Tigray Focus", href: "#tigray" },
          { label: "News & Updates", href: "#news" },
        ],
      },
    ],
    legal: [
      { label: "Terms of Service", href: "#terms" },
      { label: "Privacy Policy", href: "#privacy" },
    ],
    copyright: "© 2025 MEMi Trading PLC. All rights reserved. Tigray, Ethiopia",
  };

  return (
    <div className="min-h-screen bg-background">
      <Header {...headerData} />
      <HeroSection {...heroData} />
      <TrustedSection {...trustedData} />
      <SupportSection {...supportData} />
      <FeaturesSection {...featuresData} />
      <BenefitSection {...benefitsData} />
      <PricingSection {...pricingData} />
      <TestimonialSection {...testimonialData} />
      <Footer {...footerData} />
    </div>
  );
}
