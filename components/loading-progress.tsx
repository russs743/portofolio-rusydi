"use client"

import { useEffect, useState } from "react"
import { Progress } from "@/components/ui/progress"

export function LoadingProgress() {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(100)
      setTimeout(() => setIsVisible(false), 500)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <Progress value={progress} className="h-1 rounded-none" />
    </div>
  )
}
