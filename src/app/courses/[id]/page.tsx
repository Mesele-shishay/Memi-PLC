"use client";
import React from "react";
import Header from "@/components/Header";
import headerData from "@/components/headerData";
import { Course } from "@/types";
import { useParams } from "next/navigation";

// Mock data for demonstration
const courses: Course[] = [
  {
    id: "react-101",
    title: "React for Beginners",
    description:
      "Learn the basics of React, including components, state, and props, to build interactive UIs.",
    instructor: "Jane Doe",
    duration: "6h 30m",
    level: "Beginner",
    category: "Web Development",
    rating: 4.7,
    students: 1200,
    price: "$49",
    originalPrice: "$99",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    features: [
      "Hands-on Projects",
      "Certificate of Completion",
      "Lifetime Access",
      "Community Support",
    ],
    isPopular: true,
    isNew: false,
  },
  // Add more mock courses as needed
];

export default function CourseDetailPage() {
  const params = useParams();
  const courseId = Array.isArray(params.id) ? params.id[0] : params.id;
  const course = courses.find((c) => c.id === courseId) || courses[0];

  // Mock tags and related courses
  const tags = ["React", "Frontend", "JavaScript", "UI", "Web", "Hooks", "JSX"];
  const topCourses = [
    {
      image: courses[0].image,
      title: courses[0].title,
      instructor: courses[0].instructor,
    },
    // Add more mock top courses as needed
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header {...headerData} />
      <div className="pt-24 lg:pt-32 container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 mb-12">
          {/* Main Content Area */}
          <div className="w-full lg:w-[70%]">
            {/* Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-6">
              {course.title}
            </h1>
            {/* Featured Image */}
            <div className="mb-4 lg:mb-6">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 sm:h-64 lg:h-96 object-cover rounded-lg"
              />
            </div>
            {/* Metadata */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 mb-4 lg:mb-6 text-gray-600 text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <span className="font-semibold">Level:</span>
                <span>{course.level}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">Duration:</span>
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">Category:</span>
                <span>{course.category}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">Students:</span>
                <span>{course.students.toLocaleString()}</span>
              </div>
            </div>
            {/* Section Heading */}
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 lg:mb-4">
              What You'll Learn
            </h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              {course.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            {/* Description */}
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 lg:mb-4">
              Course Description
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4 lg:mb-6 text-sm sm:text-base">
              {course.description}
            </p>
            {/* Instructor */}
            <div className="flex items-center gap-3 mt-8">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full flex items-center justify-center text-white text-lg font-bold">
                {course.instructor.charAt(0)}
              </div>
              <div>
                <p className="text-base font-semibold text-gray-900">
                  {course.instructor}
                </p>
                <p className="text-sm text-gray-600">Instructor</p>
              </div>
            </div>
          </div>
          {/* Sidebar */}
          <div className="w-full lg:w-[30%]">
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-2 mb-6 lg:mb-8">
              <button className="flex items-center gap-2 px-3 sm:px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors text-sm sm:text-base cursor-pointer">
                Share
              </button>
              <button className="flex items-center gap-2 px-3 sm:px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors text-sm sm:text-base cursor-pointer">
                Save
              </button>
              <button className="flex items-center gap-2 px-3 sm:px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors text-sm sm:text-base cursor-pointer">
                Enroll
              </button>
            </div>
            {/* Tags Section */}
            <div className="mb-6 lg:mb-8">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 lg:mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-primary"></div>
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            {/* Top Courses Section */}
            <div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 lg:mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-primary"></div>
                Top Courses
              </h3>
              <div className="space-y-3 lg:space-y-4">
                {topCourses.map((c, index) => (
                  <div key={index} className="flex gap-2 sm:gap-3">
                    <img
                      src={c.image}
                      alt={c.title}
                      className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="text-xs sm:text-sm font-medium text-gray-900 line-clamp-2">
                        {c.title}
                      </h4>
                      <p className="text-xs text-gray-600 mt-1">
                        {c.instructor}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Price and CTA */}
            <div className="mt-8 p-4 bg-primary-50 rounded-lg border border-primary-100 flex flex-col items-center">
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-2xl font-bold text-primary">
                  {course.price}
                </span>
                {course.originalPrice && (
                  <span className="text-base text-gray-400 line-through">
                    {course.originalPrice}
                  </span>
                )}
              </div>
              <button className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-white text-base font-medium hover:bg-primary-dark hover:scale-105 transition-all duration-200 shadow-primary cursor-pointer w-full justify-center">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
