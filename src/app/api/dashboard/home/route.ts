import { NextResponse } from "next/server";
import { db } from "@/lib/inMemoryDb";

export async function GET() {
  try {
    const data = db.getHomeContent();
    return NextResponse.json(data);
  } catch (error) {
    return new NextResponse("Failed to load home content", { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const updated = db.updateHomeContent(body);
    return NextResponse.json(updated);
  } catch (error) {
    return new NextResponse("Failed to update home content", { status: 400 });
  }
}
