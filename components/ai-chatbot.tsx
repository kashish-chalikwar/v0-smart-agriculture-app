"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Bot, User, Send, Mic, Camera, Leaf, Bug, Droplets } from "lucide-react"

export function AIChatbot() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      message: "Hello! I'm your AI farming assistant. How can I help you today?",
      time: "10:30 AM",
    },
    {
      id: 2,
      type: "user",
      message: "My wheat crop leaves are turning yellow. What should I do?",
      time: "10:32 AM",
    },
    {
      id: 3,
      type: "bot",
      message:
        "Yellow leaves in wheat can indicate nitrogen deficiency or overwatering. Can you tell me:\n\n1. How often do you water?\n2. When did you last apply fertilizer?\n3. Are the yellow leaves at the bottom or top of the plant?",
      time: "10:32 AM",
    },
  ])
  const [newMessage, setNewMessage] = useState("")

  const quickQuestions = [
    { icon: Leaf, text: "Crop diseases", color: "bg-green-100 text-green-800" },
    { icon: Bug, text: "Pest control", color: "bg-red-100 text-red-800" },
    { icon: Droplets, text: "Irrigation tips", color: "bg-blue-100 text-blue-800" },
  ]

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const userMessage = {
        id: messages.length + 1,
        type: "user" as const,
        message: newMessage,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      }
      setMessages([...messages, userMessage])
      setNewMessage("")

      // Simulate bot response
      setTimeout(() => {
        const botMessage = {
          id: messages.length + 2,
          type: "bot" as const,
          message:
            "Thank you for your question. Let me analyze this and provide you with the best recommendations based on your location and crop type.",
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        }
        setMessages((prev) => [...prev, botMessage])
      }, 1000)
    }
  }

  return (
    <div className="flex flex-col h-screen pb-20">
      <div className="p-4 border-b bg-card">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <Bot className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-semibold text-card-foreground">AI Farm Assistant</h1>
            <p className="text-sm text-muted-foreground">Online • Always here to help</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`flex items-start space-x-2 max-w-[80%] ${
                message.type === "user" ? "flex-row-reverse space-x-reverse" : ""
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  message.type === "user" ? "bg-primary" : "bg-secondary"
                }`}
              >
                {message.type === "user" ? (
                  <User className="w-4 h-4 text-primary-foreground" />
                ) : (
                  <Bot className="w-4 h-4 text-secondary-foreground" />
                )}
              </div>
              <div
                className={`rounded-lg p-3 ${
                  message.type === "user" ? "bg-primary text-primary-foreground" : "bg-card border"
                }`}
              >
                <p className="text-sm whitespace-pre-line">{message.message}</p>
                <p
                  className={`text-xs mt-1 ${
                    message.type === "user" ? "text-primary-foreground/70" : "text-muted-foreground"
                  }`}
                >
                  {message.time}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t bg-background">
        <div className="mb-3">
          <p className="text-sm text-muted-foreground mb-2">Quick questions:</p>
          <div className="flex space-x-2">
            {quickQuestions.map((question, index) => (
              <Badge
                key={index}
                variant="outline"
                className={`cursor-pointer ${question.color} border-0`}
                onClick={() => setNewMessage(question.text)}
              >
                <question.icon className="w-3 h-3 mr-1" />
                {question.text}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Camera className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="sm">
            <Mic className="w-4 h-4" />
          </Button>
          <Input
            placeholder="Ask about crops, diseases, fertilizers..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            className="flex-1"
          />
          <Button onClick={handleSendMessage} disabled={!newMessage.trim()}>
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
