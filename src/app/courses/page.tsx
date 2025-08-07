"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import headerData from "@/components/headerData";
import Pagination from "@/components/Pagination";
import Link from "next/link";
import { Course } from "@/types";

// Mock data for demonstration
const courses: Course[] = [
  {
    id: "amharic-beginners",
    title: "Amharic for Beginners",
    description:
      "Master the basics of Amharic, Ethiopia's official language, with practical lessons and cultural insights.",
    instructor: "Mulugeta Bekele",
    duration: "8h 00m",
    level: "Beginner",
    category: "Language",
    rating: 4.8,
    students: 950,
    price: "ETB 350",
    originalPrice: "ETB 700",
    image:
      "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600&h=400&fit=crop&crop=center",
    features: [
      "Native Instructors",
      "Cultural Context",
      "Certificate of Completion",
      "Lifetime Access",
    ],
    isPopular: true,
    isNew: true,
  },
  {
    id: "ethiopian-cuisine",
    title: "Ethiopian Cuisine: Cooking Injera & More",
    description:
      "Learn to cook traditional Ethiopian dishes like Injera, Doro Wat, and Shiro with step-by-step video guides.",
    instructor: "Sara Abebe",
    duration: "5h 15m",
    level: "Beginner",
    category: "Cooking",
    rating: 4.9,
    students: 1200,
    price: "ETB 400",
    originalPrice: "ETB 800",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop&crop=center",
    features: [
      "Recipe Book Included",
      "Video Tutorials",
      "Community Support",
      "Certificate of Completion",
    ],
    isPopular: true,
    isNew: false,
  },
  {
    id: "addis-tech-bootcamp",
    title: "Addis Ababa Tech Bootcamp",
    description:
      "Kickstart your tech career with hands-on training in web development, mobile apps, and digital skills tailored for Ethiopia.",
    instructor: "Samuel Getachew",
    duration: "10h 30m",
    level: "Intermediate",
    category: "Technology",
    rating: 4.7,
    students: 800,
    price: "ETB 600",
    originalPrice: "ETB 1200",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop&crop=center",
    features: [
      "Project-Based Learning",
      "Mentorship",
      "Job Readiness",
      "Certificate of Completion",
    ],
    isPopular: false,
    isNew: true,
  },
  {
    id: "ethiopian-history",
    title: "Ethiopian History & Heritage",
    description:
      "Explore Ethiopia's rich history, from ancient Axum to modern times, with engaging lectures and visuals.",
    instructor: "Dr. Almaz Tadesse",
    duration: "7h 45m",
    level: "Beginner",
    category: "History",
    rating: 4.6,
    students: 670,
    price: "ETB 300",
    originalPrice: "ETB 600",
    image:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600&h=400&fit=crop&crop=center",
    features: [
      "Expert Lectures",
      "Downloadable Resources",
      "Certificate of Completion",
      "Lifetime Access",
    ],
    isPopular: false,
    isNew: false,
  },
  {
    id: "entrepreneurship-ethiopia",
    title: "Entrepreneurship in Ethiopia",
    description:
      "Learn how to start and grow a business in Ethiopia, covering local regulations, funding, and market strategies.",
    instructor: "Hanna Mekonnen",
    duration: "9h 20m",
    level: "Advanced",
    category: "Business",
    rating: 4.9,
    students: 540,
    price: "ETB 750",
    originalPrice: "ETB 1500",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop&crop=center",
    features: [
      "Local Case Studies",
      "Business Plan Templates",
      "Mentorship",
      "Certificate of Completion",
    ],
    isPopular: true,
    isNew: false,
  },
  {
    id: "coffee-culture",
    title: "Ethiopian Coffee Culture & Ceremony",
    description:
      "Discover the art and tradition of Ethiopian coffee, from bean to cup, including the famous coffee ceremony.",
    instructor: "Tigist Alemu",
    duration: "3h 40m",
    level: "Beginner",
    category: "Culture",
    rating: 4.8,
    students: 1100,
    price: "ETB 250",
    originalPrice: "ETB 500",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop&crop=center",
    features: [
      "Live Demonstrations",
      "Cultural Insights",
      "Certificate of Completion",
      "Community Access",
    ],
    isPopular: false,
    isNew: true,
  },
];

const postsPerPage = 6;

export default function CoursesPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(courses.length / postsPerPage);
  const paginatedCourses = courses.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100">
      <Header {...headerData} />
      <div className="pt-24 lg:pt-32 container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 max-w-7xl">
        {/* Courses Section Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
            All Courses
          </h1>
          <div className="flex justify-center mb-4">
            <span className="inline-block w-16 h-1 rounded bg-gradient-to-r from-primary to-accent"></span>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our curated selection of courses to boost your skills and
            career.
          </p>
        </div>
        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedCourses.map((course) => (
            <Link
              key={course.id}
              href={`/courses/${course.id}`}
              className="group relative bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
            >
              {/* Course Image */}
              <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden group-hover:bg-gradient-to-br group-hover:from-primary-100 group-hover:to-accent-100 transition-all duration-300">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback to emoji if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const fallbackDiv =
                      target.nextElementSibling as HTMLElement;
                    if (fallbackDiv) {
                      fallbackDiv.style.display = "flex";
                    }
                  }}
                />
                {/* Fallback emoji */}
                <div
                  className="absolute inset-0 flex items-center justify-center text-6xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                  style={{ display: "none" }}
                >
                  📚
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-accent-400/20 group-hover:from-primary-400/30 group-hover:to-accent-400/30 transition-all duration-300"></div>
                <div className="absolute bottom-4 right-4">
                  <span className="inline-flex items-center px-2 py-1 rounded-lg text-xs font-medium bg-white/90 backdrop-blur-sm border border-gray-200">
                    {course.category}
                  </span>
                </div>
              </div>
              {/* Course Content */}
              <div className="p-6">
                <div className="mb-3">
                  <span
                    className={`inline-flex items-center px-2 py-1 rounded-lg text-xs font-medium border bg-primary-100 text-primary-700 border-primary-200`}
                  >
                    {course.level}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors cursor-pointer">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {course.description}
                </p>
                <div className="flex items-center mb-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full flex items-center justify-center text-white text-xs font-medium group-hover:scale-110 transition-transform duration-200">
                    {course.instructor.charAt(0)}
                  </div>
                  <span className="text-sm text-gray-700 ml-2 group-hover:text-primary-600 transition-colors duration-200">
                    {course.instructor}
                  </span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-yellow-500 font-semibold">
                    ★ {course.rating}
                  </span>
                  <span className="text-sm text-gray-500">
                    {course.students.toLocaleString()} students
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {course.features.slice(0, 3).map((feature, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-gray-50 text-gray-600 border border-gray-200 group-hover:bg-primary-50 group-hover:text-primary-700 group-hover:border-primary-200 transition-all duration-200"
                    >
                      {feature}
                    </span>
                  ))}
                  {course.features.length > 3 && (
                    <span className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-gray-50 text-gray-600 border border-gray-200 group-hover:bg-primary-50 group-hover:text-primary-700 group-hover:border-primary-200 transition-all duration-200">
                      +{course.features.length - 3} more
                    </span>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
                    {course.price}
                  </span>
                  {course.originalPrice && (
                    <span className="text-sm text-gray-500 line-through group-hover:text-gray-400 transition-colors duration-200">
                      {course.originalPrice}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}
