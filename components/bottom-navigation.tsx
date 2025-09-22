"use client"

import { Home, FileText, MessageCircle, ShoppingBag, Trophy, Bookmark, Wifi } from "lucide-react"

interface BottomNavigationProps {
  currentScreen: string
  onNavigate: (screen: string) => void
}

export function BottomNavigation({ currentScreen, onNavigate }: BottomNavigationProps) {
  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "schemes", icon: FileText, label: "Schemes" },
    { id: "passport", icon: Bookmark, label: "Passport" },
    { id: "chatbot", icon: MessageCircle, label: "AI Help" },
    { id: "marketplace", icon: ShoppingBag, label: "Market" },
    { id: "roadmap", icon: Trophy, label: "Journey" },
  ]

  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-card border-t border-border">
      {/* Offline Indicator */}
      <div className="flex items-center justify-center py-1 bg-muted/50">
        <div className="flex items-center space-x-1">
          <Wifi className="w-3 h-3 text-green-500" />
          <span className="text-xs text-muted-foreground">Online • Synced</span>
        </div>
      </div>

      <div className="grid grid-cols-6 py-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`flex flex-col items-center justify-center py-2 px-1 transition-colors ${
              currentScreen === item.id ? "text-primary" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <item.icon className="w-5 h-5 mb-1" />
            <span className="text-xs font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
