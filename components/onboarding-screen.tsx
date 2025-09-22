"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Sprout, Users, TrendingUp } from "lucide-react"

interface OnboardingScreenProps {
  onSkip: () => void
}

export function OnboardingScreen({ onSkip }: OnboardingScreenProps) {
  return (
    <div className="p-6 min-h-screen flex flex-col justify-center">
      <div className="text-center mb-8">
        <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
          <Sprout className="w-10 h-10 text-primary-foreground" />
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-2">FarmSmart</h1>
        <p className="text-muted-foreground text-lg">Your Smart Agriculture Companion</p>
      </div>

      <div className="space-y-6 mb-8">
        <Card className="p-6 bg-card">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Sprout className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-card-foreground">Smart Crop Management</h3>
              <p className="text-sm text-muted-foreground">Get personalized advice for your crops</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-card">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
              <Users className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <h3 className="font-semibold text-card-foreground">Government Schemes</h3>
              <p className="text-sm text-muted-foreground">Access subsidies and support programs</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-card">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h3 className="font-semibold text-card-foreground">Market Insights</h3>
              <p className="text-sm text-muted-foreground">Get best prices for your produce</p>
            </div>
          </div>
        </Card>
      </div>

      <Button onClick={onSkip} className="w-full h-14 text-lg font-semibold" size="lg">
        Get Started
      </Button>
    </div>
  )
}
