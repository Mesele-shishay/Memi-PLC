import { NextResponse } from "next/server";
import { API_BASE } from "@/lib/apiBase";
import { getForwardedHeaders } from "@/lib/utils";

export async function GET(request: Request) {
  try {
    // const headers = getForwardedHeaders(request);

    const res = await fetch(`${API_BASE}/dashboard/home`, {
      cache: "no-store",
      // headers,
    });
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    return new NextResponse("Failed to load home content", { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const headers = getForwardedHeaders(request);

    const res = await fetch(`${API_BASE}/dashboard/home`, {
      method: "PUT",
      headers,
      body: JSON.stringify(body),
    });
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    return new NextResponse("Failed to update home content", { status: 400 });
  }
}
