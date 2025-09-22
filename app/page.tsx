"use client"

import { useState } from "react"
import { OnboardingScreen } from "@/components/onboarding-screen"
import { LoginScreen } from "@/components/login-screen"
import { HomeDashboard } from "@/components/home-dashboard"
import { GovtSchemes } from "@/components/govt-schemes"
import { CropPassport } from "@/components/crop-passport"
import { AIChatbot } from "@/components/ai-chatbot"
import { Marketplace } from "@/components/marketplace"
import { GamifiedRoadmap } from "@/components/gamified-roadmap"
import { BottomNavigation } from "@/components/bottom-navigation"

export default function SmartAgricultureApp() {
  const [currentScreen, setCurrentScreen] = useState("onboarding")
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn(true)
    setCurrentScreen("home")
  }

  const handleSkipOnboarding = () => {
    setCurrentScreen("login")
  }

  const renderScreen = () => {
    if (!isLoggedIn) {
      switch (currentScreen) {
        case "onboarding":
          return <OnboardingScreen onSkip={handleSkipOnboarding} />
        case "login":
          return <LoginScreen onLogin={handleLogin} />
        default:
          return <OnboardingScreen onSkip={handleSkipOnboarding} />
      }
    }

    switch (currentScreen) {
      case "home":
        return <HomeDashboard />
      case "schemes":
        return <GovtSchemes />
      case "passport":
        return <CropPassport />
      case "chatbot":
        return <AIChatbot />
      case "marketplace":
        return <Marketplace />
      case "roadmap":
        return <GamifiedRoadmap />
      default:
        return <HomeDashboard />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-md mx-auto bg-background min-h-screen relative">
        {renderScreen()}
        {isLoggedIn && <BottomNavigation currentScreen={currentScreen} onNavigate={setCurrentScreen} />}
      </div>
    </div>
  )
}
