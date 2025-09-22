import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Trophy, Star, Target, CheckCircle, Lock, Gift, TrendingUp } from "lucide-react"

export function GamifiedRoadmap() {
  const userStats = {
    level: 3,
    xp: 1250,
    nextLevelXp: 1500,
    totalBadges: 8,
    completedTasks: 15,
  }

  const badges = [
    { name: "Early Adopter", icon: Star, earned: true, color: "text-yellow-500" },
    { name: "Soil Expert", icon: Target, earned: true, color: "text-green-500" },
    { name: "Weather Watcher", icon: Trophy, earned: true, color: "text-blue-500" },
    { name: "Crop Master", icon: CheckCircle, earned: false, color: "text-gray-400" },
    { name: "Tech Pioneer", icon: TrendingUp, earned: false, color: "text-gray-400" },
    { name: "Eco Warrior", icon: Gift, earned: false, color: "text-gray-400" },
  ]

  const roadmapItems = [
    {
      id: 1,
      title: "Complete Soil Health Test",
      description: "Get your soil tested and receive recommendations",
      xp: 100,
      status: "completed",
      category: "Soil Management",
    },
    {
      id: 2,
      title: "Use Weather Alerts for 7 Days",
      description: "Check weather alerts daily for a week",
      xp: 150,
      status: "completed",
      category: "Weather Monitoring",
    },
    {
      id: 3,
      title: "Apply for Government Scheme",
      description: "Successfully apply for any government subsidy",
      xp: 200,
      status: "in_progress",
      category: "Financial Support",
    },
    {
      id: 4,
      title: "Use AI Assistant 10 Times",
      description: "Ask questions to the AI farming assistant",
      xp: 120,
      status: "in_progress",
      category: "Technology Adoption",
    },
    {
      id: 5,
      title: "Record Complete Crop Cycle",
      description: "Document planting to harvest for one crop",
      xp: 300,
      status: "locked",
      category: "Record Keeping",
    },
    {
      id: 6,
      title: "Achieve 20% Yield Increase",
      description: "Improve your crop yield using app recommendations",
      xp: 500,
      status: "locked",
      category: "Performance",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case "in_progress":
        return <Target className="w-5 h-5 text-blue-500" />
      case "locked":
        return <Lock className="w-5 h-5 text-gray-400" />
      default:
        return <Target className="w-5 h-5 text-gray-400" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-100 text-green-800">Completed</Badge>
      case "in_progress":
        return <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>
      case "locked":
        return <Badge variant="outline">Locked</Badge>
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  return (
    <div className="p-4 pb-20">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground mb-2">Your Farming Journey</h1>
        <p className="text-muted-foreground">Level up your farming skills and earn rewards</p>
      </div>

      {/* User Stats */}
      <Card className="p-4 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-bold text-lg text-foreground">Level {userStats.level} Farmer</h3>
            <p className="text-sm text-muted-foreground">
              {userStats.xp} / {userStats.nextLevelXp} XP
            </p>
          </div>
          <div className="text-right">
            <div className="flex items-center space-x-1 mb-1">
              <Trophy className="w-4 h-4 text-secondary" />
              <span className="font-semibold text-foreground">{userStats.totalBadges}</span>
            </div>
            <p className="text-xs text-muted-foreground">Badges Earned</p>
          </div>
        </div>
        <Progress value={(userStats.xp / userStats.nextLevelXp) * 100} className="mb-2" />
        <p className="text-xs text-muted-foreground">{userStats.nextLevelXp - userStats.xp} XP to next level</p>
      </Card>

      {/* Badges */}
      <div className="mb-6">
        <h3 className="font-semibold text-foreground mb-4">Achievement Badges</h3>
        <div className="grid grid-cols-3 gap-3">
          {badges.map((badge, index) => (
            <Card key={index} className={`p-3 text-center ${badge.earned ? "bg-card" : "bg-muted/50"}`}>
              <badge.icon className={`w-6 h-6 mx-auto mb-2 ${badge.color}`} />
              <p className={`text-xs font-medium ${badge.earned ? "text-card-foreground" : "text-muted-foreground"}`}>
                {badge.name}
              </p>
            </Card>
          ))}
        </div>
      </div>

      {/* Roadmap */}
      <div className="mb-6">
        <h3 className="font-semibold text-foreground mb-4">Learning Roadmap</h3>
        <div className="space-y-4">
          {roadmapItems.map((item) => (
            <Card key={item.id} className={`p-4 ${item.status === "locked" ? "bg-muted/50" : "bg-card"}`}>
              <div className="flex items-start space-x-3">
                {getStatusIcon(item.status)}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4
                      className={`font-semibold ${
                        item.status === "locked" ? "text-muted-foreground" : "text-card-foreground"
                      }`}
                    >
                      {item.title}
                    </h4>
                    {getStatusBadge(item.status)}
                  </div>
                  <p
                    className={`text-sm mb-2 ${
                      item.status === "locked" ? "text-muted-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="text-xs">
                        {item.category}
                      </Badge>
                      <span className="text-xs text-secondary font-medium">+{item.xp} XP</span>
                    </div>
                    {item.status === "in_progress" && (
                      <Button size="sm" variant="outline">
                        Continue
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Rewards */}
      <Card className="p-4 bg-gradient-to-r from-secondary/10 to-accent/10 border-secondary/20">
        <div className="flex items-center space-x-3 mb-3">
          <Gift className="w-6 h-6 text-secondary" />
          <h3 className="font-semibold text-foreground">Upcoming Rewards</h3>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-sm text-foreground">Free soil testing kit</p>
            <Badge variant="outline" className="text-xs">
              Level 4
            </Badge>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-foreground">₹500 marketplace voucher</p>
            <Badge variant="outline" className="text-xs">
              Level 5
            </Badge>
          </div>
        </div>
      </Card>
    </div>
  )
}
