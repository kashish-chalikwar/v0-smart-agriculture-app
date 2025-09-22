"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Globe } from "lucide-react"

interface LoginScreenProps {
  onLogin: () => void
}

export function LoginScreen({ onLogin }: LoginScreenProps) {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [otp, setOtp] = useState("")
  const [showOtp, setShowOtp] = useState(false)
  const [language, setLanguage] = useState("english")

  const handleSendOtp = () => {
    if (phoneNumber.length >= 10) {
      setShowOtp(true)
    }
  }

  const handleVerifyOtp = () => {
    if (otp.length === 6) {
      onLogin()
    }
  }

  return (
    <div className="p-6 min-h-screen flex flex-col justify-center">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-foreground mb-2">Welcome Back</h1>
        <p className="text-muted-foreground">Sign in to continue farming smart</p>
      </div>

      <Card className="p-6 bg-card mb-6">
        <div className="space-y-6">
          <div>
            <label className="flex items-center text-sm font-medium text-card-foreground mb-2">
              <Globe className="w-4 h-4 mr-2" />
              Select Language
            </label>
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="h-12">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="hindi">हिंदी</SelectItem>
                <SelectItem value="punjabi">ਪੰਜਾਬੀ</SelectItem>
                <SelectItem value="marathi">मराठी</SelectItem>
                <SelectItem value="tamil">தமிழ்</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="flex items-center text-sm font-medium text-card-foreground mb-2">
              <Phone className="w-4 h-4 mr-2" />
              Mobile Number
            </label>
            <div className="flex space-x-2">
              <Input
                type="tel"
                placeholder="Enter mobile number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="h-12 text-lg"
                maxLength={10}
              />
              {!showOtp && (
                <Button onClick={handleSendOtp} disabled={phoneNumber.length < 10} className="h-12 px-6">
                  Send OTP
                </Button>
              )}
            </div>
          </div>

          {showOtp && (
            <div>
              <label className="text-sm font-medium text-card-foreground mb-2 block">Enter OTP</label>
              <div className="flex space-x-2">
                <Input
                  type="text"
                  placeholder="6-digit OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="h-12 text-lg text-center"
                  maxLength={6}
                />
                <Button onClick={handleVerifyOtp} disabled={otp.length !== 6} className="h-12 px-6">
                  Verify
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">OTP sent to +91 {phoneNumber}</p>
            </div>
          )}
        </div>
      </Card>

      <div className="text-center">
        <p className="text-sm text-muted-foreground">
          New to FarmSmart? <button className="text-primary font-medium">Create Account</button>
        </p>
      </div>
    </div>
  )
}
