"use client";

import React, { useState, useEffect } from "react";
import { FeaturedCoursesSectionProps, Course } from "@/types";
import {
  BookOpen,
  Plus,
  Eye,
  Link,
  Type,
  FileText,
  ExternalLink,
  Trash2,
  X,
  Search,
} from "lucide-react";
import { api } from "@/lib/apiClient";

interface FeaturedCoursesEditorProps {
  featuredCourses: FeaturedCoursesSectionProps;
  onSave: (partial: any) => Promise<any>;
}

export function FeaturedCoursesEditor({
  featuredCourses,
  onSave,
}: FeaturedCoursesEditorProps) {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [availableCourses, setAvailableCourses] = useState<Course[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loadingCourses, setLoadingCourses] = useState(false);

  // Fetch available courses
  useEffect(() => {
    const fetchCourses = async () => {
      setLoadingCourses(true);
      try {
        const courses = await api.internal<Course[]>("/api/courses");
        setAvailableCourses(courses);
      } catch (error) {
        console.error("Failed to fetch courses:", error);
      } finally {
        setLoadingCourses(false);
      }
    };

    if (isAddModalOpen) {
      fetchCourses();
    }
  }, [isAddModalOpen]);

  const handleDeleteCourse = async (
    courseId: string | number,
    index: number
  ) => {
    const updatedCourses = featuredCourses.courses.filter(
      (_, i) => i !== index
    );

    await onSave({
      featuredCourses: {
        ...featuredCourses,
        courses: updatedCourses,
      },
    });
  };

  const handleAddCourse = async (course: Course) => {
    // Check if course is already in featured courses
    const isAlreadyFeatured = featuredCourses.courses.some(
      (fc) => fc.id === course.id
    );

    if (isAlreadyFeatured) {
      alert("This course is already featured!");
      return;
    }

    const updatedCourses = [...featuredCourses.courses, course];

    await onSave({
      featuredCourses: {
        ...featuredCourses,
        courses: updatedCourses,
      },
    });

    setIsAddModalOpen(false);
    setSearchTerm("");
  };

  const filteredCourses = availableCourses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const nonFeaturedCourses = filteredCourses.filter(
    (course) => !featuredCourses.courses.some((fc) => fc.id === course.id)
  );

  return (
    <>
      <div className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/80 backdrop-blur-xl shadow-2xl p-8">
        {/* Header Section */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-200/20">
            <BookOpen className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Featured Courses
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Manage your featured courses section
            </p>
          </div>
          <div className="ml-auto">
            <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1.5 rounded-full">
              {featuredCourses.courses.length} courses
            </span>
          </div>
        </div>

        {/* Main Title Input */}
        <div className="space-y-2 mb-6">
          <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
            <Type className="h-4 w-4 text-blue-500" />
            Section Title
          </label>
          <input
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
            defaultValue={featuredCourses.title}
            placeholder="Enter featured courses title"
            onBlur={async (e) => {
              await onSave({
                featuredCourses: {
                  ...featuredCourses,
                  title: e.target.value,
                },
              });
            }}
          />
        </div>

        {/* Configuration Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <FileText className="h-4 w-4 text-green-500" />
              Subtitle
            </label>
            <input
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
              defaultValue={featuredCourses.subtitle}
              placeholder="Enter section subtitle"
              onBlur={async (e) =>
                onSave({
                  featuredCourses: {
                    ...featuredCourses,
                    subtitle: e.target.value,
                  },
                })
              }
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <Eye className="h-4 w-4 text-amber-500" />
              View All Button Text
            </label>
            <input
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
              defaultValue={featuredCourses.viewAllText}
              placeholder="e.g., View All Courses"
              onBlur={async (e) =>
                onSave({
                  featuredCourses: {
                    ...featuredCourses,
                    viewAllText: e.target.value,
                  },
                })
              }
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <Link className="h-4 w-4 text-purple-500" />
              View All Link
            </label>
            <input
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
              defaultValue={featuredCourses.viewAllHref}
              placeholder="/courses or https://..."
              onBlur={async (e) =>
                onSave({
                  featuredCourses: {
                    ...featuredCourses,
                    viewAllHref: e.target.value,
                  },
                })
              }
            />
          </div>
        </div>

        {/* Courses Management Section */}
        <div className="mt-8 pt-6 border-t border-gray-200/50">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Course Management
            </h3>
            <button
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              onClick={() => setIsAddModalOpen(true)}
            >
              <Plus className="h-4 w-4" />
              Add Course
            </button>
          </div>

          {/* Courses List */}
          <div className="space-y-3">
            {featuredCourses.courses.map((course, index) => (
              <div
                key={course.id || index}
                className="group/course relative p-4 rounded-xl border border-gray-200/50 bg-white/60 backdrop-blur-sm hover:shadow-lg hover:border-blue-200/50 transition-all duration-200"
              >
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-200/20 flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-gray-900 truncate">
                      {course.title || `Course ${index + 1}`}
                    </h4>
                    <p className="text-sm text-gray-500 truncate">
                      {course.description || "No description"}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      className="p-2 rounded-lg bg-red-50 text-red-500 hover:bg-red-100 transition-colors duration-200 opacity-0 group-hover/course:opacity-100"
                      title="Remove course"
                      onClick={() =>
                        handleDeleteCourse(course.id || index, index)
                      }
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {featuredCourses.courses.length === 0 && (
            <div className="text-center py-8">
              <div className="mx-auto w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-3">
                <BookOpen className="h-8 w-8 text-gray-400" />
              </div>
              <p className="text-gray-500 text-sm">No courses added yet</p>
              <p className="text-gray-400 text-xs mt-1">
                Courses will appear here when added to your featured section
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Add Course Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 flex-shrink-0">
              <h3 className="text-xl font-semibold text-gray-900">
                Add Featured Course
              </h3>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            {/* Search Bar */}
            <div className="p-6 border-b border-gray-200 flex-shrink-0">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
              </div>
            </div>

            {/* Courses List */}
            <div className="flex-1 overflow-y-auto p-6 min-h-0">
              {loadingCourses ? (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                  <p className="text-gray-500 mt-2">Loading courses...</p>
                </div>
              ) : nonFeaturedCourses.length === 0 ? (
                <div className="text-center py-8">
                  <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-500">
                    {searchTerm
                      ? "No courses found matching your search."
                      : "No available courses to add."}
                  </p>
                </div>
              ) : (
                <div className="grid gap-4">
                  {nonFeaturedCourses.map((course) => (
                    <div
                      key={course.id}
                      className="p-4 border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-md transition-all cursor-pointer"
                      onClick={() => handleAddCourse(course)}
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-200/20 flex items-center justify-center">
                          <BookOpen className="h-8 w-8 text-blue-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-900 mb-1">
                            {course.title}
                          </h4>
                          <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                            {course.description}
                          </p>
                          <div className="flex items-center gap-4 text-xs text-gray-500">
                            <span>Level: {course.level}</span>
                            <span>Duration: {course.duration}</span>
                            <span>Price: {course.price}</span>
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                            Add Course
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
