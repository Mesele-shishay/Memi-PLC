"use client";

import React from "react";
import Link from "next/link";
import {
  IconUsers,
  IconStar,
  IconHeadset,
  IconBrandX,
  IconUsersGroup,
  IconCreditCard,
  IconMessageCircle,
  IconBook,
} from "@tabler/icons-react";
import { SectionCard } from "@/components/SectionCard";

export default function HomeEditorPage() {
  const sections = [
    {
      title: "Hero Section",
      description:
        "Edit the main hero banner, title, subtitle, and call-to-action",
      icon: IconStar,
      href: "/dashboard/home/hero",
      color: "bg-gradient-to-br from-blue-500 to-purple-600",
    },
    {
      title: "Support",
      description: "Configure customer support information and contact details",
      icon: IconHeadset,
      href: "/dashboard/home/support",
      color: "bg-gradient-to-br from-indigo-500 to-blue-600",
    },
    {
      title: "Features",
      description: "Manage feature highlights and their descriptions",
      icon: IconStar,
      href: "/dashboard/home/features",
      color: "bg-gradient-to-br from-green-500 to-teal-600",
    },
    {
      title: "Benefits",
      description: "Edit benefits list and customer testimonials",
      icon: IconMessageCircle,
      href: "/dashboard/home/benefits-testimonial",
      color: "bg-gradient-to-br from-blue-500 to-indigo-600",
    },
    {
      title: "Featured Courses",
      description: "Manage featured course listings and promotions",
      icon: IconBook,
      href: "/dashboard/home/featured-courses",
      color: "bg-gradient-to-br from-green-500 to-blue-600",
    },
    {
      title: "Pricing",
      description: "Manage pricing plans and subscription options",
      icon: IconCreditCard,
      href: "/dashboard/home/pricing",
      color: "bg-gradient-to-br from-red-500 to-pink-600",
    },
    {
      title: "Testimonials",
      description: "Edit customer testimonials and reviews",
      icon: IconMessageCircle,
      href: "/dashboard/home/benefits-testimonial",
      color: "bg-gradient-to-br from-purple-500 to-pink-600",
    },
    {
      title: "Team",
      description: "Edit team member information, photos, and roles",
      icon: IconUsersGroup,
      href: "/dashboard/home/team",
      color: "bg-gradient-to-br from-teal-500 to-green-600",
    },
    {
      title: "Get Involved",
      description: "Configure involvement options and community engagement",
      icon: IconUsers,
      href: "/dashboard/home/get-involved",
      color: "bg-gradient-to-br from-yellow-500 to-orange-600",
    },
    {
      title: "Footer",
      description: "Manage footer links, social media, and company information",
      icon: IconBrandX,
      href: "/dashboard/home/footer",
      color: "bg-gradient-to-br from-orange-500 to-red-600",
    },
  ];

  return (
    <div className="flex flex-col gap-6 md:gap-8 py-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
            Home Page Editor
          </h1>
          <p className="text-sm md:text-base text-gray-600 mt-2">
            Manage all sections of your home page
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section) => (
          <SectionCard
            key={section.href}
            title={section.title}
            description={section.description}
            href={section.href}
            icon={section.icon}
            accentClass={section.color}
          />
        ))}
      </div>

      <div className="mt-2">
        <div className="relative overflow-hidden rounded-2xl border border-primary-100 bg-gradient-to-br from-primary-50 to-white p-6">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <IconUsers className="w-6 h-6 text-primary-600" />
            </div>
            <div className="ml-3">
              <h3 className="text-base md:text-lg font-medium text-primary-900">
                Quick Navigation
              </h3>
              <p className="mt-1 text-sm text-primary-700">
                Click on any section card above to edit that specific part of
                your home page. Each section has its own dedicated editor with
                all the tools you need to customize your content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
