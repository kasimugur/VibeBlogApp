import Link from "next/link";
import SearchBar from "../news/SearchBar";
import { ModeToggle } from "../mode-toggle";
import { Suspense } from "react";

const categories = [
  { name: "Technology", slug: "technology" },
  { name: "Business", slug: "business" },
  { name: "Sports", slug: "sports" },
  { name: "Science", slug: "science" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 shrink-0 group">
          <div className="w-10 h-10 bg-linear-to-tr from-purple-600 to-indigo-500 text-white rounded-xl flex items-center justify-center font-black text-2xl shadow-lg group-hover:rotate-6 transition-transform">
            V
          </div>
          <span className="font-black text-2xl tracking-tighter bg-clip-text text-transparent bg-linear-to-r from-purple-600 to-indigo-500">
            VIBE<span className="text-slate-900 dark:text-white">BLOG</span>
          </span>
        </Link>

        {/* Kategoriler */}
        <nav className="hidden lg:flex gap-4 text-sm font-medium">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/?category=${cat.slug}`}
              className="px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {cat.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 flex-1 justify-end">
          <Suspense fallback={null}>
            <SearchBar />
          </Suspense>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}