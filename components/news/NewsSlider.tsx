"use client"
import * as React from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { NewsArticle } from "@/types/news"
import Image from "next/image"
import Link from "next/link"
import Autoplay from "embla-carousel-autoplay"

export function NewsSlider({ articles }: { articles: NewsArticle[] }) {
  return (
    <Carousel 
      plugins={[Autoplay({ delay: 5000 })]}
      className="w-full mb-12"
    >
      <CarouselContent>
        {articles.slice(0, 5).map((article, index) => (
          <CarouselItem key={index}>
            <Link href={`/news/${encodeURIComponent(article.title)}`}>
              <div className="relative h-100 md:h-137.5 w-full rounded-3xl overflow-hidden group">
                <Image
                  src={article.urlToImage || "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1200"}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 md:p-12 w-full md:w-3/4 text-white">
                  <span className="bg-purple-600 px-3 py-1 rounded-full text-xs font-bold mb-4 inline-block">SON DAKİKA</span>
                  <h2 className="text-2xl md:text-4xl font-bold mb-4 line-clamp-2">{article.title}</h2>
                  <p className="text-slate-200 line-clamp-2 hidden md:block">{article.description}</p>
                </div>
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" />
    </Carousel>
  )
}