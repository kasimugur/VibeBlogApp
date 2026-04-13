// app/page.tsx
import { getNews } from "@/lib/news";
import NewsCard from "@/components/news/NewsCard";
import LoadMore from "@/components/news/LoadMore";
import { NewsSlider } from "@/components/news/NewsSlider";
interface PageProps {
  searchParams: Promise<{ category?: string; q?: string }>;
}

export default async function HomePage({ searchParams }: PageProps) {
  
  const { category, q } = await searchParams;

  const initialArticles = await getNews({ category, query: q, page: 1 });

  return (
    <main className="container mx-auto px-4 py-8 max-w-7xl">
      <NewsSlider articles={initialArticles} />
      <div className="flex flex-col mb-8">
        <h1 className="text-3xl font-bold tracking-tight">
          {q ? `"${q}" için sonuçlar` : category ? `${category.toUpperCase()} Haberleri` : "En Son Gelişmeler"}
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mt-2">
          Dünyadan güncel haberler ve analizler.
        </p>
      </div>

      {initialArticles.length > 0 ? (
        <LoadMore 
          initialArticles={initialArticles} 
          category={category} 
          query={q} 
        />
      ) : (
        <div className="text-center py-20">
          <h2 className="text-xl font-semibold">Haber bulunamadı.</h2>
          <p className="text-slate-500">Farklı bir arama yapmayı veya kategori değiştirmeyi deneyin.</p>
        </div>
      )}
    </main>
  );
}