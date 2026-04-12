// components/news/NewsCard.tsx
import Image from "next/image";
import Link from "next/link";
import { NewsArticle } from "@/types/news";

interface NewsCardProps {
  article: NewsArticle;
}

export default function NewsCard({ article }: NewsCardProps) {
  // Tarihi Türkçe formatta göstermek için
  const formattedDate = new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(article.publishedAt));

  // Kırık veya boş resimler için yedek görsel stratejisi
  const imageUrl = article.urlToImage || "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800&auto=format&fit=crop";

  return (
    <div className="group flex flex-col bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-lg transition-all duration-300">
      {/* Görsel Alanı */}
      <div className="relative h-56 w-full overflow-hidden bg-slate-100">
        <Image
          src={imageUrl}
          alt={article.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* İçerik Alanı */}
      <div className="flex flex-col grow p-5">
        <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
          <span className="font-medium text-blue-600 dark:text-blue-400">
            {article.source.name}
          </span>
          <span>{formattedDate}</span>
        </div>

        <Link href={article.url} target="_blank" className="block mt-1">
          <h3 className="text-xl font-bold leading-tight text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors line-clamp-2">
            {article.title}
          </h3>
        </Link>

        <p className="mt-3 text-slate-600 dark:text-slate-400 line-clamp-3 text-sm">
          {article.description || "Bu haberin detayı bulunmamaktadır..."}
        </p>

        {/* Buton - Flex-grow ile hep en altta kalmasını sağlıyoruz */}
        <div className="mt-auto pt-5">
          <Link 
            href={article.url} 
            target="_blank"
            className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 dark:text-blue-400"
          >
            Haberi Oku <span className="ml-1">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}