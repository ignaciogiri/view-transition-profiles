"use client"

import { useState, useEffect } from "react"
import { AlertCircle, X } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

export function NotificationBanner({ message, title }: { message: string; title: string }) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Reset visibility when message changes
    setIsVisible(true)
  }, [message])

  if (!isVisible) return null

  return (
    <Alert className="relative mb-6 border-amber-500">
      <AlertCircle className="h-4 w-4 text-amber-500" />
      <AlertTitle className="text-amber-500">{title}</AlertTitle>
      <AlertDescription className="mt-1">{message}</AlertDescription>
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2 h-6 w-6 text-muted-foreground"
        onClick={() => setIsVisible(false)}
      >
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </Button>
    </Alert>
  )
}
