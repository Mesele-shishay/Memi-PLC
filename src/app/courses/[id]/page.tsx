"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import headerData from "@/components/headerData";
import CourseDetailSkeleton from "@/components/CourseDetailSkeleton";
import { useParams } from "next/navigation";
import { api } from "@/lib/apiClient";

export default function CourseDetailPage() {
  const params = useParams();
  const courseId = Array.isArray(params.id)
    ? params.id[0]
    : (params.id as string);

  const [course, setCourse] = React.useState<any | null>(null);
  const [relatedCourses, setRelatedCourses] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const data = await api.internal<any>(`/api/courses/${courseId}`);
        if (mounted) setCourse(data);

        const all = await api.internal<any[]>("/api/courses");
        if (mounted && all && Array.isArray(all)) {
          const related = all
            .filter(
              (c: any) =>
                dataSafe(c).id !== dataSafe(course).id &&
                (c.category === dataSafe(course).category ||
                  c.level === dataSafe(course).level)
            )
            .slice(0, 3);
          setRelatedCourses(related);
        }
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseId]);

  function dataSafe(c: any) {
    return c || {};
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Header {...headerData} />
        <CourseDetailSkeleton />
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen bg-white">
        <Header {...headerData} />
        <div className="pt-24 lg:pt-32 container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Course Not Found
            </h1>
            <p className="text-gray-600 mb-8">
              The course you're looking for doesn't exist.
            </p>
            <a
              href="/courses"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-white text-base font-medium hover:bg-primary-dark transition-colors"
            >
              Back to Courses
            </a>
          </div>
        </div>
      </div>
    );
  }

  const tags: string[] = [
    course.category,
    course.level,
    ...(Array.isArray(course.features) ? course.features.slice(0, 3) : []),
  ].filter(Boolean);

  return (
    <div className="min-h-screen bg-white">
      <Header {...headerData} />
      <div className="pt-24 lg:pt-32 container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 max-w-7xl">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <a href="/" className="hover:text-primary transition-colors">
                Home
              </a>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <a
                href="/courses"
                className="hover:text-primary transition-colors"
              >
                Courses
              </a>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900 font-medium">{course.title}</li>
          </ol>
        </nav>

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 mb-12">
          {/* Main Content Area */}
          <div className="w-full lg:w-[70%]">
            {/* Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-6">
              {course.title}
            </h1>
            {/* Featured Image */}
            <div className="mb-4 lg:mb-6 relative">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 sm:h-64 lg:h-96 object-cover rounded-lg shadow-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  const fallbackDiv = target.nextElementSibling as HTMLElement;
                  if (fallbackDiv) {
                    fallbackDiv.style.display = "flex";
                  }
                }}
              />
              {/* Fallback placeholder */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-primary-100 to-accent-100 rounded-lg flex items-center justify-center text-6xl opacity-20"
                style={{ display: "none" }}
              >
                📚
              </div>
              {/* Course badges */}
              <div className="absolute top-4 left-4 flex gap-2">
                {course.isPopular && (
                  <span className="inline-flex items-center px-2 py-1 rounded-lg text-xs font-medium bg-yellow-100 text-yellow-800 border border-yellow-200">
                    Popular
                  </span>
                )}
                {course.isNew && (
                  <span className="inline-flex items-center px-2 py-1 rounded-lg text-xs font-medium bg-green-100 text-green-800 border border-green-200">
                    New
                  </span>
                )}
              </div>
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
                <span>{Number(course.students ?? 0).toLocaleString()}</span>
              </div>
            </div>
            {/* Section Heading */}
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 lg:mb-4">
              What You'll Learn
            </h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              {(course.features || []).map((feature: string, i: number) => (
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
                {course.instructor?.charAt(0)}
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
            {/* Back to Courses Button */}
            <div className="mb-6">
              <a
                href="/courses"
                className="inline-flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-primary transition-colors text-sm"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back to Courses
              </a>
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
            {/* Related Courses Section */}
            <div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 lg:mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-primary"></div>
                Related Courses
              </h3>
              <div className="space-y-3 lg:space-y-4">
                {relatedCourses.map((c, index) => (
                  <a
                    key={index}
                    href={`/courses/${c.id}`}
                    className="flex gap-2 sm:gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group"
                  >
                    <img
                      src={c.image}
                      alt={c.title}
                      className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded group-hover:scale-105 transition-transform duration-200"
                    />
                    <div className="flex-1">
                      <h4 className="text-xs sm:text-sm font-medium text-gray-900 line-clamp-2 group-hover:text-primary transition-colors">
                        {c.title}
                      </h4>
                      <p className="text-xs text-gray-600 mt-1 group-hover:text-gray-700 transition-colors">
                        {c.instructor}
                      </p>
                    </div>
                  </a>
                ))}
                {relatedCourses.length === 0 && (
                  <p className="text-sm text-gray-500">
                    No related courses found.
                  </p>
                )}
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
      <Footer />
    </div>
  );
}
