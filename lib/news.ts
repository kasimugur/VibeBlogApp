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


export async function getNews({
  category,
  query,
  page = 1,
}: {
  category?: string;
  query?: string;
  page?: number;
}) {
  const pageSize = 8;
  let url = `${BASE_URL}/top-headlines?country=us&category=${category || "general"}&pageSize=${pageSize}&page=${page}&apiKey=${API_KEY}`;

  if (query) {
    url = `${BASE_URL}/everything?q=${encodeURIComponent(query)}&pageSize=${pageSize}&page=${page}&apiKey=${API_KEY}`;
  }
  
  // // let url = `${BASE_URL}/top-headlines?country=us&apiKey=${API_KEY}`;
  // // Eğer kategori seçildiyse ekle
  // if (category && category !== "general") {
  //   url += `&category=${category}`;
  // }

  // // Eğer arama yapıldıysa 'everything' ucuna gitmek daha mantıklıdır
  // if (query) {
  //   url = `${BASE_URL}/everything?q=${encodeURIComponent(query)}&apiKey=${API_KEY}`;
  // }

  try {
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) throw new Error("Haberler getirilemedi");
    const data = await res.json();
    return data.articles;
  } catch (error) {
    console.error(error);
    return [];
  }
}