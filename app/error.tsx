"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <h2 className="text-2xl font-bold mb-4">Bir şeyler ters gitti!</h2>
      <p className="text-slate-500 mb-6 text-center max-w-md">
        Haberler yüklenirken bir sorun oluştu. API limiti dolmuş olabilir veya bağlantı hatası yaşanıyor.
      </p>
      <div className="flex gap-4">
        <Button onClick={() => reset()}>Tekrar Dene</Button>
        <Button variant="outline" onClick={() => window.location.href = "/"}>
          Ana Sayfaya Dön
        </Button>
      </div>
    </div>
  )
}