// app/api/news/route.ts
import { getNews } from "@/lib/news";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1");
  const category = searchParams.get("category") || undefined;
  const query = searchParams.get("q") || undefined;

  const articles = await getNews({ category, query, page });
  return NextResponse.json(articles);
}
