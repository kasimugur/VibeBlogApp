import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-slate-50 dark:bg-slate-950 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-blue-600 rounded text-white flex items-center justify-center font-bold">N</div>
              <span className="font-bold text-xl tracking-tight">NewsCraft</span>
            </Link>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm">
              Dünyanın dört bir yanından en güncel ve güvenilir haberleri, modern teknoloji ile harmanlayarak size sunuyoruz.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Kategoriler</h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li><Link href="/?category=technology" className="hover:text-blue-600">Teknoloji</Link></li>
              <li><Link href="/?category=business" className="hover:text-blue-600">İş Dünyası</Link></li>
              <li><Link href="/?category=science" className="hover:text-blue-600">Bilim</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Yasal</h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>Gizlilik Politikası</li>
              <li>Kullanım Şartları</li>
              <li>Künye</li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-12 pt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} NewsCraft. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}