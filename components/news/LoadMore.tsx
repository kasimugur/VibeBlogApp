"use client"

import { useState } from "react";
import { NewsArticle } from "@/types/news";
import NewsCard from "./NewsCard";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export default function LoadMore({ 
  initialArticles, 
  category, 
  query 
}: { 
  initialArticles: NewsArticle[], 
  category?: string, 
  query?: string 
}) {
  const [articles, setArticles] = useState<NewsArticle[]>(initialArticles);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMoreNews = async () => {
    setLoading(true);
    const nextPage = page + 1;
    
    // Client-side'da doğrudan getNews çağırmak yerine bir API Route kullanabiliriz
    // veya basitlik için bu demoda client'tan fetch atabiliriz.
    try {
      const response = await fetch(`/api/news?page=${nextPage}&category=${category || ""}&q=${query || ""}`);
      const newArticles = await response.json();

      if (newArticles.length === 0) {
        setHasMore(false);
      } else {
        setArticles((prev) => [...prev, ...newArticles]);
        setPage(nextPage);
      }
    } catch (error) {
      console.error("Haber yüklenemedi", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {articles.map((article, index) => (
          <NewsCard key={`${article.url}-${index}`} article={article} />
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center mt-12">
          <Button 
            onClick={loadMoreNews} 
            disabled={loading}
            variant="outline"
            className="min-w-50"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                loading...
              </>
            ) : (
              "More News"
            )}
          </Button>
        </div>
      )}
    </>
  );
}