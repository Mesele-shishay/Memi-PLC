import { CourseForm } from "@/components/forms/CourseForm";

export default function NewCoursePage() {
  return (
    <div className="max-w-4xl mx-auto py-4 md:py-6">
      <CourseForm mode="create" />
    </div>
  );
}
