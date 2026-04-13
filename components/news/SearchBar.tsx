// components/news/SearchBar.tsx
"use client"

import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get("search") as string;

    const params = new URLSearchParams(searchParams.toString());
    if (query) {
      params.set("q", query);
    } else {
      params.delete("q");
    }
    
    // URL'i güncelle: /?q=iphone gibi
    router.push(`/?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSearch} className="relative w-full max-w-sm">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
      <Input
        name="search"
        type="search"
        placeholder="Haber ara..."
        className="pl-9 rounded-full bg-slate-100 dark:bg-slate-800 border-none focus-visible:ring-2 focus-visible:ring-purple-600"
        defaultValue={searchParams.get("q") ?? ""}
      />
    </form>
  );
}