"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import headerData from "@/components/headerData";
import Pagination from "@/components/Pagination";
import Link from "next/link";
import { Course } from "@/types";
import { getAllCourses } from "@/lib/mockApi";

// Get courses from mock API
const courses: Course[] = getAllCourses();

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
                {/* Course Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {course.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      by {course.instructor}
                    </p>
                  </div>
                  <div className="flex flex-col items-end space-y-1">
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-400">★</span>
                      <span className="text-sm font-medium text-gray-900">
                        {course.rating}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">
                      ({course.students} students)
                    </span>
                  </div>
                </div>

                {/* Course Description */}
                <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                  {course.description}
                </p>

                {/* Course Meta */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <span className="flex items-center">
                      <span className="mr-1">⏱️</span>
                      {course.duration}
                    </span>
                    <span className="flex items-center">
                      <span className="mr-1">📊</span>
                      {course.level}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {course.isPopular && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        Popular
                      </span>
                    )}
                    {course.isNew && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        New
                      </span>
                    )}
                  </div>
                </div>

                {/* Course Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {course.features.slice(0, 2).map((feature, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700"
                      >
                        {feature}
                      </span>
                    ))}
                    {course.features.length > 2 && (
                      <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700">
                        +{course.features.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Course Price */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-gray-900">
                      {course.price}
                    </span>
                    {course.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        {course.originalPrice}
                      </span>
                    )}
                  </div>
                  <span className="text-sm text-primary font-medium">
                    View Course →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}
