"use client";

import React from "react";
import { FeaturedCoursesSectionProps, Course } from "@/types";
import Link from "next/link";

const FeaturedCourses: React.FC<FeaturedCoursesSectionProps> = ({
  title,
  subtitle,
  courses,
  viewAllText = "View All Courses",
  viewAllHref = "/courses",
}) => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-100 text-green-700 border-green-200";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "Advanced":
        return "bg-red-100 text-red-700 border-red-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${
              i < Math.floor(rating)
                ? "text-yellow-400 fill-current"
                : "text-gray-300"
            }`}
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="text-sm text-gray-600 ml-1">({rating})</span>
      </div>
    );
  };

  const CourseCard: React.FC<{ course: Course }> = ({ course }) => (
    <Link
      href={`/courses/${course.id}`}
      className="group relative bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg  hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
    >
      {/* Popular/New Badge */}
      {(course.isPopular || course.isNew) && (
        <div className="absolute top-4 left-4 z-10">
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
              course.isPopular
                ? "bg-primary-100 text-primary-700 border border-primary-200"
                : "bg-accent-100 text-accent-700 border border-accent-200"
            }`}
          >
            {course.isPopular ? "🔥 Popular" : "🆕 New"}
          </span>
        </div>
      )}

      {/* Course Image */}
      <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden group-hover:bg-gradient-to-br group-hover:from-primary-100 group-hover:to-accent-100 transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-accent-400/20 group-hover:from-primary-400/30 group-hover:to-accent-400/30 transition-all duration-300"></div>
        <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <div className="text-6xl opacity-20 group-hover:opacity-30 transition-opacity duration-300">
            📚
          </div>
        </div>
        <div className="absolute bottom-4 right-4">
          <span className="inline-flex items-center px-2 py-1 rounded-lg text-xs font-medium bg-white/90 backdrop-blur-sm border border-gray-200">
            {course.category}
          </span>
        </div>
      </div>

      {/* Course Content */}
      <div className="p-6">
        {/* Level Badge */}
        <div className="mb-3">
          <span
            className={`inline-flex items-center px-2 py-1 rounded-lg text-xs font-medium border ${getLevelColor(
              course.level
            )}`}
          >
            {course.level}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors cursor-pointer">
          {course.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {course.description}
        </p>

        {/* Instructor */}
        <div className="flex items-center mb-3 group-hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200">
          <div className="w-6 h-6 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full flex items-center justify-center text-white text-xs font-medium group-hover:scale-110 transition-transform duration-200">
            {course.instructor.charAt(0)}
          </div>
          <span className="text-sm text-gray-700 ml-2 group-hover:text-primary-600 transition-colors duration-200">
            {course.instructor}
          </span>
        </div>

        {/* Rating and Students */}
        <div className="flex items-center justify-between mb-4">
          {renderStars(course.rating)}
          <span className="text-sm text-gray-500">
            {course.students.toLocaleString()} students
          </span>
        </div>

        {/* Features */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {course.features.slice(0, 3).map((feature, index) => (
              <span
                key={index}
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
        </div>

        {/* Duration */}
        <div className="flex items-center mb-4 group-hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200">
          <svg
            className="w-4 h-4 text-gray-400 mr-2 group-hover:text-primary-500 transition-colors duration-200"
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
          <span className="text-sm text-gray-600 group-hover:text-primary-600 transition-colors duration-200">
            {course.duration}
          </span>
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between group-hover:bg-gray-50 p-3 rounded-lg transition-colors duration-200">
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
          <span className="inline-flex items-center px-4 py-2 rounded-lg bg-primary-600 text-white text-sm font-medium group-hover:bg-primary-700 group-hover:scale-105 transition-all duration-200 cursor-pointer">
            Enroll Now
          </span>
        </div>
      </div>
    </Link>
  );

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <a
            href={viewAllHref}
            className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-primary-600 font-medium border border-primary-200 hover:bg-primary-50 hover:border-primary-300 hover:scale-105 transition-all duration-200 shadow-sm cursor-pointer"
          >
            {viewAllText}
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
