import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustedSection from "@/components/TrustedSection";
import SupportSection from "@/components/SupportSection";
import FeaturesSection from "@/components/FeaturesSection";
import BenefitSection from "@/components/BenefitSection";
import PricingSection from "@/components/PricingSection";
import TestimonialSection from "@/components/TestimonialSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import GetInvolvedSection from "@/components/GetInvolvedSection";
import Footer from "@/components/Footer";
import ColorShowcase from "@/components/ColorShowcase";
import headerData from "@/components/headerData";
import footerData from "@/components/footerData";

export default function Home() {
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
        title: "Technology Development",
        description:
          "Custom software solutions, mobile app development, and digital transformation services for businesses of all sizes.",
      },
      {
        title: "Talent Development",
        description:
          "Professional training programs and skill development initiatives to empower youth and build local capacity.",
      },
      {
        title: "Real Estate & Construction",
        description:
          "Property development, construction management, and investment opportunities in Tigray's growing real estate market.",
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

  // Featured courses data
  const featuredCoursesData = {
    title: "Featured Training Courses",
    subtitle:
      "Empower yourself with our comprehensive training programs designed to transform Tigray's youth into global professionals.",
    courses: [
      {
        id: "1",
        title: "Digital Marketing & E-commerce",
        description:
          "Learn modern digital marketing strategies and e-commerce platforms to help local businesses reach global markets.",
        instructor: "Abebe Kebede",
        duration: "8 weeks",
        level: "Beginner" as const,
        category: "Marketing",
        rating: 4.8,
        students: 1247,
        price: "ብር 2,500",
        originalPrice: "ብር 3,500",
        image: "/course-digital-marketing.jpg",
        features: [
          "Live Projects",
          "Certificate",
          "Job Support",
          "Mobile Access",
        ],
        isPopular: true,
      },
      {
        id: "2",
        title: "Software Development Fundamentals",
        description:
          "Master the basics of programming and software development to create innovative solutions for local challenges.",
        instructor: "Kidist Haile",
        duration: "12 weeks",
        level: "Intermediate" as const,
        category: "Technology",
        rating: 4.9,
        students: 892,
        price: "ብር 4,200",
        image: "/course-software-dev.jpg",
        features: [
          "Hands-on Coding",
          "Portfolio Building",
          "Mentorship",
          "Career Guidance",
        ],
        isNew: true,
      },
      {
        id: "3",
        title: "Business Entrepreneurship",
        description:
          "Develop entrepreneurial skills and business acumen to start and scale successful ventures in Tigray.",
        instructor: "Martha Teklu",
        duration: "10 weeks",
        level: "Advanced" as const,
        category: "Business",
        rating: 4.7,
        students: 567,
        price: "ብር 3,800",
        originalPrice: "ብር 5,000",
        image: "/course-entrepreneurship.jpg",
        features: [
          "Business Plan",
          "Funding Access",
          "Network Building",
          "Market Research",
        ],
      },
    ],
    viewAllText: "View All Courses",
    viewAllHref: "/courses",
  };

  // Get Involved section data
  const getInvolvedData = {
    title: "Get Involved",
    subtitle:
      "Join us in our mission to rebuild and empower Tigray. There are multiple ways to be part of our journey.",
    involvementOptions: [
      {
        icon: "🎓",
        title: "Join Our Training Programs",
        description:
          "Enroll in our comprehensive training programs to develop skills in technology, business, and entrepreneurship.",
        ctaText: "Explore Programs",
        ctaHref: "/courses",
      },
      {
        icon: "🤝",
        title: "Partner With Us",
        description:
          "Collaborate with MEMi Trading PLC to support local businesses and create sustainable economic opportunities.",
        ctaText: "Become a Partner",
        ctaHref: "/contact",
      },
      {
        icon: "💼",
        title: "Career Opportunities",
        description:
          "Join our team and contribute to Tigray's economic transformation through meaningful, tech-driven employment.",
        ctaText: "View Openings",
        ctaHref: "/careers",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Header {...headerData} />
      <HeroSection {...heroData} />
      <SupportSection {...supportData} />
      <FeaturesSection {...featuresData} />
      <FeaturedCourses {...featuredCoursesData} />
      <GetInvolvedSection {...getInvolvedData} />

      <BenefitSection {...benefitsData} />
      <PricingSection {...pricingData} />
      <TestimonialSection {...testimonialData} />
      <Footer {...footerData} />
    </div>
  );
}
