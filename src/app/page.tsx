import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SupportSection from "@/components/SupportSection";
import FeaturesSection from "@/components/FeaturesSection";
import BenefitSection from "@/components/BenefitSection";
import PricingSection from "@/components/PricingSection";
import TestimonialSection from "@/components/TestimonialSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import GetInvolvedSection from "@/components/GetInvolvedSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";
import headerData from "@/components/headerData";
import {
  getHeroData,
  getSupportData,
  getFeaturesData,
  getBenefitsData,
  getPricingData,
  getTestimonialData,
  getFeaturedCoursesData,
  getGetInvolvedData,
  getTeamData,
  getFooterData,
} from "@/lib/mockApi";

export default function Home() {
  // Get data from mock API
  const heroData = getHeroData();
  const supportData = getSupportData();

  const featuresData = getFeaturesData();

  const benefitsData = getBenefitsData();

  const pricingData = getPricingData();

  const testimonialData = getTestimonialData();
  const featuredCoursesData = getFeaturedCoursesData();

  const getInvolvedData = getGetInvolvedData();
  const teamData = getTeamData();
  const footerData = getFooterData();

  return (
    <div className="min-h-screen bg-background">
      <Header {...headerData} />
      <HeroSection {...heroData} />
      <SupportSection {...supportData} />
      <FeaturesSection {...featuresData} />
      <BenefitSection {...benefitsData} />
      <FeaturedCourses {...featuredCoursesData} />
      <PricingSection {...pricingData} />
      <TestimonialSection {...testimonialData} />
      <TeamSection {...teamData} />
      <GetInvolvedSection {...getInvolvedData} />
      <Footer {...footerData} />
    </div>
  );
}
