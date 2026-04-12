// lib/news.ts

import { NewsResponse } from "@/types/news";

const API_KEY = process.env.NEWS_API_KEY;
const BASE_URL = "https://newsapi.org/v2";

export async function getTopHeadlines(category: string = "general") {
  // Veriyi 1 saat boyunca önbelleğe alıyoruz (3600 saniye)
  // Bu sayede hem API limitini koruyoruz .
  const res = await fetch(
    `${BASE_URL}/top-headlines?category=${category}&apiKey=${API_KEY}`,
    { next: { revalidate: 3600 } } 
  );

  if (!res.ok) {
    // API hata verirse boş dizi dönmek yerine lokaldeki mockData'yı döndürebilirsin.
    throw new Error("Haberler yüklenirken bir hata oluştu.");
  }

  const data: NewsResponse = await res.json();
  return data.articles;
}