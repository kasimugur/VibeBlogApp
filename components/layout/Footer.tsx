import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-slate-50 dark:bg-slate-950 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-purple-600 rounded text-white flex items-center justify-center font-bold">V</div>
              <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">VibeBlog</span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm">
            Don't just follow the news, feel its spirit. VibeBlog presents the latest developments in the most stylish way.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li><Link href="/?category=technology" className="hover:text-purple-500">Technology</Link></li>
              <li><Link href="/?category=business" className="hover:text-purple-500">Business</Link></li>
              <li><Link href="/?category=science" className="hover:text-purple-500">Science</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>Privacy policy</li>
              <li>Terms of Use</li>
            </ul>
          </div>

        </div>
        <div className="border-t mt-12 pt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} VibeBlog. All rights reserved.
        </div>
      </div>
    </footer>
  );
}