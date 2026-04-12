import Link from "next/link";
import SearchBar from "../news/SearchBar";
import { ModeToggle } from "../mode-toggle";

const categories = [
  { name: "Teknoloji", slug: "technology" },
  { name: "İş Dünyası", slug: "business" },
  { name: "Spor", slug: "sports" },
  { name: "Bilim", slug: "science" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-xl">N</div>
          <span className="font-bold text-xl hidden sm:inline">NewsCraft</span>
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
          <SearchBar />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}