// app/page.tsx
import { getTopHeadlines } from "@/lib/news";
import NewsCard from "@/components/news/NewsCard";

export default async function HomePage() {
  // Veriyi çekiyoruz
  const articles = await getTopHeadlines("technology"); // Şimdilik teknoloji haberleri gelsin

  // Diziyi bölüyoruz: İlk haber manşet, geri kalanlar liste
  const heroArticle = articles[0];
  const gridArticles = articles.slice(1);

  return (
    <main className="container mx-auto px-4 py-8 max-w-7xl">
      
      {/* 1. Kısım: Hero Section (Manşet) */}
      {heroArticle && (
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 border-b pb-2">Günün Öne Çıkan Haberi</h2>
          <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={heroArticle.urlToImage || "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1200"} 
              alt={heroArticle.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Karartma Efekti (Gradient Overlay) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            
            {/* Yazılar */}
            <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full md:w-3/4">
              <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold mb-4 tracking-wider uppercase">
                {heroArticle.source.name}
              </span>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                {heroArticle.title}
              </h1>
              <p className="text-slate-300 line-clamp-2 md:text-lg mb-4">
                {heroArticle.description}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* 2. Kısım: Grid Haber Akışı */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Son Gelişmeler</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {gridArticles.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))}
        </div>
      </section>

    </main>
  );
}