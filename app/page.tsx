// app/page.tsx
import { getNews } from "@/lib/news";
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
          {q ? `"${q}" results for` : category ? `${category.toUpperCase()} news` : "Latest Developments"}
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mt-2">
        Current news and analysis from around the world.
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
          <h2 className="text-xl font-semibold">No news found.</h2>
          <p className="text-slate-500">Try a different search or change categories.</p>
        </div>
      )}
    </main>
  );
}