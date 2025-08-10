import { BlogForm } from "@/components/forms/BlogForm";

export default function NewBlogPage() {
  return (
    <div className="max-w-4xl mx-auto py-4 md:py-6">
      <BlogForm mode="create" />
    </div>
  );
}
