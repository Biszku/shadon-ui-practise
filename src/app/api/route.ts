import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(
    `https://quizapi.io/api/v1/questions?apiKey=${process.env.API_KEY}`
  );
  const data = await res.json();

  return NextResponse.json({ data });
}
