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
      <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
      <p className="text-slate-500 mb-6 text-center max-w-md">
        There was a problem loading the news. The API limit might have been reached or there may be a connection issue.
      </p>
      <div className="flex gap-4">
        <Button onClick={() => reset()}>Try Again</Button>
        <Button variant="outline" onClick={() => window.location.href = "/"}>
          Go to Home
        </Button>
      </div>
    </div>
  )
}
