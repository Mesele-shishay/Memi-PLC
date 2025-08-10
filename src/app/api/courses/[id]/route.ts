import { NextResponse } from "next/server";
import { db } from "@/lib/inMemoryDb";
import { z } from "zod";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const course = db.getCourseById(id);

    if (!course) {
      return NextResponse.json({ error: "Course not found" }, { status: 404 });
    }

    return NextResponse.json(course);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch course" },
      { status: 500 }
    );
  }
}

const courseUpdateSchema = z.object({
  id: z.string(),
  slug: z.string().optional(),
  title: z.string().min(1).optional(),
  description: z.string().min(1).optional(),
  instructor: z.string().min(1).optional(),
  duration: z.string().min(1).optional(),
  level: z.enum(["Beginner", "Intermediate", "Advanced"]).optional(),
  category: z.string().min(1).optional(),
  students: z.number().int().nonnegative().optional(),
  price: z.string().min(1).optional(),
  originalPrice: z.string().optional(),
  image: z.string().min(1).optional(),
  features: z.array(z.string()).optional(),
  isPopular: z.boolean().optional(),
  isNew: z.boolean().optional(),
});

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const json = await req.json();
    const parsed = courseUpdateSchema.parse({ ...json, id });
    const updated = db.updateCourse(parsed);
    if (!updated) {
      return NextResponse.json({ error: "Course not found" }, { status: 404 });
    }
    return NextResponse.json(updated);
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Failed to update course" },
      { status: 400 }
    );
  }
}

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const ok = db.deleteCourse(id);
    if (!ok) {
      return NextResponse.json({ error: "Course not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Failed to delete course" },
      { status: 400 }
    );
  }
}
