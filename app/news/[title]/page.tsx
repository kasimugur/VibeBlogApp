// app/news/[title]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { getNews } from "@/lib/news";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Calendar, User, Globe } from "lucide-react";

interface PageProps {
  params: Promise<{ title: string }>;
}

export default async function ArticleDetailPage({ params }: PageProps) {
  // 1. URL'den gelen şifrelenmiş başlığı çözüyoruz
  const { title } = await params;
  const decodedTitle = decodeURIComponent(title);

  // 2. Başlığa göre haberi API'den buluyoruz
  const articles = await getNews({ query: decodedTitle });
  const article = articles.length > 0 ? articles[0] : null;

  // 3. Haber bulunamazsa (veya API limitine takılırsa) Fallback ekranı
  if (!article) {
    return (
      <div className="container mx-auto px-4 py-32 text-center max-w-2xl">
        <h1 className="text-3xl font-bold mb-4">Haber Bulunamadı</h1>
        <p className="text-slate-500 mb-8">Aradığınız haber yayından kaldırılmış veya bir API hatası oluşmuş olabilir.</p>
        <Link href="/">
          <Button><ArrowLeft className="mr-2 h-4 w-4" /> Ana Sayfaya Dön</Button>
        </Link>
      </div>
    );
  }

  const formattedDate = new Intl.DateTimeFormat("tr-TR", {
    day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit"
  }).format(new Date(article.publishedAt));

  const fallbackImage = "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1200";

  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Geri Dönüş Butonu */}
      <Link href="/" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white mb-8 transition-colors">
        <ArrowLeft className="mr-2 h-4 w-4" /> Haberlere Dön
      </Link>

      <article className="space-y-8">
        {/* Üst Kısım: Başlık ve Meta Bilgileri */}
        <header className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wider">
            <Globe className="h-4 w-4" />
            <span>{article.source.name}</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-slate-900 dark:text-white">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-slate-500 dark:text-slate-400 border-y border-slate-200 dark:border-slate-800 py-4 mt-6">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{article.author || "Bilinmeyen Yazar"}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{formattedDate}</span>
            </div>
          </div>
        </header>

        {/* Görsel Alanı */}
        <div className="relative w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden bg-slate-100">
          <Image
            src={article.urlToImage || fallbackImage}
            alt={article.title}
            fill
            priority // LCP optimizasyonu için resmi öncelikli yükler
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
            unoptimized
          />
        </div>

        {/* İçerik ve Yönlendirme */}
        <div className="prose prose-lg dark:prose-invert max-w-none text-slate-700 dark:text-slate-300">
          <p className="text-xl leading-relaxed font-medium mb-6">
            {article.description}
          </p>
          <p className="mb-10 opacity-80">
            {article.content ? article.content.split("[+")[0] : ""}
          </p>
        </div>

        {/* Call to Action (Kaynağa Git) */}
        <div className="bg-slate-50 dark:bg-slate-900 p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold mb-1">Haberin tamamını okumak ister misiniz?</h3>
            <p className="text-sm text-slate-500">Bu içerik {article.source.name} tarafından sağlanmıştır. Tüm detaylar için kaynağa gidebilirsiniz.</p>
          </div>
          <a href={article.url} target="_blank" rel="noopener noreferrer" className="shrink-0">
            <Button size="lg" className="w-full sm:w-auto">
              Kaynağa Git <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </article>
    </main>
  );
}