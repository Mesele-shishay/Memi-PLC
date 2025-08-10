import { NextResponse } from "next/server";
import { db } from "@/lib/inMemoryDb";
import { z } from "zod";

export async function GET() {
  try {
    const courses = db.getCourses();
    return NextResponse.json(courses);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch courses" },
      { status: 500 }
    );
  }
}

const courseCreateSchema = z.object({
  id: z.string().optional(),
  slug: z.string().optional(),
  title: z.string().min(1),
  description: z.string().min(1),
  instructor: z.string().min(1),
  duration: z.string().min(1),
  level: z.enum(["Beginner", "Intermediate", "Advanced"]),
  category: z.string().min(1),
  students: z.number().int().nonnegative().default(0),
  price: z.string().min(1),
  originalPrice: z.string().optional(),
  image: z.string().min(1),
  features: z.array(z.string()).default([]),
  isPopular: z.boolean().optional(),
  isNew: z.boolean().optional(),
});

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const parsed = courseCreateSchema.parse(json);
    const created = db.createCourse(parsed as any);
    return NextResponse.json(created, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Failed to create course" },
      { status: 400 }
    );
  }
}
