// components/layout/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-xl">
            N
          </div>
          <span className="font-bold text-xl tracking-tight">NewsCraft</span>
        </Link>

        {/* Kategoriler (Masaüstü) */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
          <Link href="/" className="hover:text-blue-600 transition-colors">Ana Sayfa</Link>
          <Link href="/?category=technology" className="hover:text-blue-600 transition-colors">Teknoloji</Link>
          <Link href="/?category=business" className="hover:text-blue-600 transition-colors">İş Dünyası</Link>
          <Link href="/?category=sports" className="hover:text-blue-600 transition-colors">Spor</Link>
        </nav>

        {/* Sağ Taraf - Arama vs. */}
        <div className="flex items-center gap-4">
          <button className="text-sm font-medium border px-4 py-2 rounded-full hover:bg-slate-100 transition-colors">
            Abone Ol
          </button>
        </div>

      </div>
    </header>
  );
}