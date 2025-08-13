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
import { api } from "@/lib/apiClient";

export const dynamic = "force-dynamic";

export default async function Home() {
  const home = await api.get<any>("/dashboard/home");

  return (
    <div className="min-h-screen bg-background">
      <Header {...headerData} />
      <HeroSection {...home.hero} />
      <SupportSection {...home.support} />
      <FeaturesSection {...home.features} />
      <BenefitSection {...home.benefits} />
      <FeaturedCourses {...home.featuredCourses} />
      <PricingSection {...home.pricing} />
      <TestimonialSection {...home.testimonial} />
      <TeamSection {...home.team} />
      <GetInvolvedSection {...home.getInvolved} />
      <Footer />
    </div>
  );
}
