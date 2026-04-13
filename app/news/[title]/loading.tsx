import { Skeleton } from "@/components/ui/skeleton";

export default function ArticleLoading() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <Skeleton className="h-6 w-32 mb-8" /> {/* Geri butonu */}
      <div className="space-y-8">
        <header className="space-y-4">
          <Skeleton className="h-4 w-24" /> {/* Kategori */}
          <Skeleton className="h-12 w-full" /> {/* Başlık 1. satır */}
          <Skeleton className="h-12 w-3/4" /> {/* Başlık 2. satır */}
          <div className="flex gap-4 pt-4 border-y py-4">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-32" />
          </div>
        </header>
        <Skeleton className="h-100 md:h-125 w-full rounded-2xl" /> {/* Görsel */}
        <div className="space-y-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-full" />
        </div>
      </div>
    </main>
  );
}