"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Download, X } from "lucide-react"

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
  const [showInstallPrompt, setShowInstallPrompt] = useState(false)

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setShowInstallPrompt(true)
    }

    window.addEventListener("beforeinstallprompt", handler)

    return () => window.removeEventListener("beforeinstallprompt", handler)
  }, [])

  const handleInstall = async () => {
    if (!deferredPrompt) return

    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice

    if (outcome === "accepted") {
      setDeferredPrompt(null)
      setShowInstallPrompt(false)
    }
  }

  const handleDismiss = () => {
    setShowInstallPrompt(false)
  }

  if (!showInstallPrompt) return null

  return (
    <div className="fixed bottom-20 left-4 right-4 bg-white border border-green-200 rounded-lg shadow-lg p-4 z-50">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h3 className="font-semibold text-green-800 mb-1">Install App</h3>
          <p className="text-sm text-green-600">Add AgriSmart to your home screen for quick access</p>
        </div>
        <div className="flex gap-2 ml-4">
          <Button size="sm" onClick={handleInstall} className="bg-green-600 hover:bg-green-700">
            <Download className="w-4 h-4 mr-1" />
            Install
          </Button>
          <Button size="sm" variant="ghost" onClick={handleDismiss}>
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
