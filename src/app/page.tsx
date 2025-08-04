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
    logo: "Memi PLC",
    navLinks: [
      { label: "Home", href: "#home" },
      { label: "Solutions", href: "#solutions" },
      { label: "Services", href: "#services" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
    ctaButtons: [
      { label: "Get Quote", variant: "secondary" as const },
      { label: "Get Started", variant: "primary" as const },
    ],
  };

  // Hero section data
  const heroData = {
    title: "Advanced Memory & Electronic Solutions for Modern Business",
    subtitle:
      "Empowering businesses with cutting-edge memory solutions, electronic components, and software development services. Transform your technology infrastructure with our innovative solutions.",
    ctaButtons: [
      { label: "Explore Solutions", variant: "primary" as const },
      { label: "Schedule Demo", variant: "secondary" as const },
    ],
    badges: [
      { label: "Industry Leader", type: "rating" as const },
      { label: "Since 2000", value: "24+ Years", type: "discount" as const },
      { label: "Enterprise", value: "Solutions", type: "price" as const },
    ],
    image: {
      src: "/hero-image.jpg",
      alt: "Professional technology solutions and electronic components",
    },
  };

  // Trusted section data
  const trustedData = {
    title: "Trusted by Leading Technology Companies Worldwide",
    brands: [
      { name: "Intel", logo: "💻", alt: "Intel" },
      { name: "Samsung", logo: "📱", alt: "Samsung" },
      { name: "Microsoft", logo: "🖥️", alt: "Microsoft" },
      { name: "IBM", logo: "🔧", alt: "IBM" },
      { name: "Oracle", logo: "🗄️", alt: "Oracle" },
    ],
  };

  // Support section data
  const supportData = {
    title: "Comprehensive Technology Solutions & Global Support",
    subtitle:
      "Delivering enterprise-grade memory solutions and electronic components with 24/7 worldwide support.",
    features: [
      {
        icon: "🔧",
        title: "Technical Support",
        description:
          "Expert technical support and consultation for all your memory and electronic component needs.",
      },
      {
        icon: "📊",
        title: "Performance Analytics",
        description:
          "Advanced analytics and monitoring tools to optimize your technology infrastructure.",
      },
      {
        icon: "🚀",
        title: "Innovation",
        description:
          "Cutting-edge research and development in memory technology and software solutions.",
      },
    ],
    ratings: [
      { company: "techreview", score: "4.9 / 5", rating: 4.9 },
      { company: "enterprise", score: "4.8 / 5", rating: 4.8 },
    ],
  };

  // Features section data
  const featuresData = {
    title: "Advanced Technology Solutions We Offer",
    subtitle:
      "Discover our comprehensive range of memory solutions, electronic components, and software development services designed to enhance your business operations.",
    features: [
      {
        title: "Memory Solutions",
        description:
          "High-performance memory components and systems designed for enterprise applications and critical computing environments.",
      },
      {
        title: "Electronic Components",
        description:
          "Premium electronic components and semiconductors with guaranteed quality and reliability for your technology projects.",
      },
      {
        title: "Software Development",
        description:
          "Custom software solutions and development services tailored to meet your specific business requirements and technical challenges.",
      },
    ],
  };

  // Benefits section data
  const benefitsData = {
    title: "Why Choose Memi PLC Technology Solutions",
    benefits: [
      {
        id: "1",
        text: "24/7 Technical Support & Expert Consultation",
        completed: true,
      },
      {
        id: "2",
        text: "Enterprise-Grade Security & Reliability",
        completed: true,
      },
      {
        id: "3",
        text: "Scalable Solutions for Growing Businesses",
        completed: true,
      },
      {
        id: "4",
        text: "Cost-Effective Technology Infrastructure",
        completed: true,
      },
      { id: "5", text: "Global Supply Chain & Fast Delivery", completed: true },
    ],
    testimonial: {
      name: "Sarah Mitchell",
      quote: "Outstanding technology solutions and exceptional support quality",
      role: "CTO, TechCorp Industries",
    },
    image: {
      src: "/benefit-image.jpg",
      alt: "Professional working with advanced technology solutions",
    },
  };

  // Pricing section data
  const pricingData = {
    title: "Entrepreneur Mastery Courses",
    subtitle:
      "Choose the learning path that fits your entrepreneurial journey and budget. From beginner to advanced business mastery.",
    billingOptions: ["Monthly Access", "Annual Plan"],
    plans: [
      {
        name: "Starter",
        price: "$49",
        period: "/month",
        features: [
          "Foundation Business Course",
          "Basic Marketing Strategies",
          "Financial Planning Basics",
          "Community Access",
          "Mobile Learning App",
        ],
        ctaText: "Start Learning",
      },
      {
        name: "Professional",
        price: "$97",
        period: "/month",
        highlight: "Most Popular Choice",
        isPopular: true,
        features: [
          "All Starter Features",
          "Advanced Business Strategy",
          "Sales & Negotiation Mastery",
          "Leadership Development",
          "1-on-1 Monthly Coaching Call",
          "Premium Templates & Tools",
        ],
        ctaText: "Go Professional",
      },
      {
        name: "Enterprise",
        price: "$197",
        period: "/month",
        features: [
          "All Professional Features",
          "Scale & Growth Accelerator",
          "Investment & Funding Strategies",
          "Weekly Group Coaching",
          "Direct Mentor Access",
          "Business Plan Review",
          "Networking Mastermind Access",
        ],
        ctaText: "Master Entrepreneurship",
      },
    ],
  };

  // Testimonial section data
  const testimonialData = {
    title: "What Industry Leaders Say About Memi PLC",
    testimonial: {
      name: "David Chen",
      quote:
        "Memi PLC has been our trusted technology partner for over 5 years. Their memory solutions and electronic components have consistently exceeded our performance expectations, helping us deliver superior products to our customers.",
      role: "Chief Technology Officer, InnovateTech Systems",
    },
    avatars: ["person1", "person2", "person3", "person4", "person5"],
  };

  // Footer data
  const footerData = {
    newsletter: {
      title: "Stay Updated with Latest Technology Solutions",
      placeholder: "Enter your business email",
      buttonText: "Subscribe",
    },
    sections: [
      {
        title: "Solutions",
        links: [
          { label: "Memory Components", href: "#memory" },
          { label: "Electronic Parts", href: "#electronics" },
          { label: "Software Development", href: "#software" },
          { label: "Technical Support", href: "#support" },
        ],
      },
      {
        title: "Services",
        links: [
          { label: "Consultation", href: "#consultation" },
          { label: "Custom Solutions", href: "#custom" },
          { label: "Technical Documentation", href: "#docs" },
          { label: "Training Programs", href: "#training" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About Memi PLC", href: "#about" },
          { label: "Our Team", href: "#team" },
          { label: "Careers", href: "#careers" },
          { label: "News & Updates", href: "#news" },
        ],
      },
    ],
    legal: [
      { label: "Terms of Service", href: "#terms" },
      { label: "Privacy Policy", href: "#privacy" },
    ],
    copyright: "© 2024 Memi PLC. All rights reserved",
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
