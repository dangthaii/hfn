import { NextResponse } from "next/server";
import data from "@/app/data.json";

export async function GET() {
  return NextResponse.json(data);
}
