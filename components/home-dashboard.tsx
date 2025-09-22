import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cloud, Thermometer, Droplets, Wind, Leaf, AlertTriangle, TrendingUp, Bell } from "lucide-react"

export function HomeDashboard() {
  return (
    <div className="p-4 pb-20">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Good Morning!</h1>
          <p className="text-muted-foreground">Rajesh Kumar</p>
        </div>
        <div className="relative">
          <Bell className="w-6 h-6 text-muted-foreground" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-destructive rounded-full"></div>
        </div>
      </div>

      {/* Weather Card */}
      <Card className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200 mb-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-blue-900 mb-1">Today's Weather</h3>
            <p className="text-sm text-blue-700">Ludhiana, Punjab</p>
          </div>
          <Cloud className="w-8 h-8 text-blue-600" />
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="text-center">
            <Thermometer className="w-5 h-5 text-orange-500 mx-auto mb-1" />
            <p className="text-xs text-blue-700">Temp</p>
            <p className="font-semibold text-blue-900">28°C</p>
          </div>
          <div className="text-center">
            <Droplets className="w-5 h-5 text-blue-500 mx-auto mb-1" />
            <p className="text-xs text-blue-700">Humidity</p>
            <p className="font-semibold text-blue-900">65%</p>
          </div>
          <div className="text-center">
            <Wind className="w-5 h-5 text-gray-500 mx-auto mb-1" />
            <p className="text-xs text-blue-700">Wind</p>
            <p className="font-semibold text-blue-900">12 km/h</p>
          </div>
        </div>
      </Card>

      {/* Alerts */}
      <Card className="p-4 bg-gradient-to-r from-orange-50 to-orange-100 border-orange-200 mb-4">
        <div className="flex items-center space-x-3">
          <AlertTriangle className="w-6 h-6 text-orange-600" />
          <div>
            <h3 className="font-semibold text-orange-900">Weather Alert</h3>
            <p className="text-sm text-orange-700">Heavy rain expected tomorrow. Protect your crops!</p>
          </div>
        </div>
      </Card>

      {/* Soil Health */}
      <Card className="p-4 bg-card mb-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-card-foreground">Soil Health</h3>
          <Leaf className="w-5 h-5 text-primary" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-muted-foreground">pH Level</p>
            <p className="font-semibold text-card-foreground">6.8</p>
            <Badge variant="secondary" className="text-xs mt-1">
              Good
            </Badge>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Moisture</p>
            <p className="font-semibold text-card-foreground">45%</p>
            <Badge variant="outline" className="text-xs mt-1">
              Moderate
            </Badge>
          </div>
        </div>
      </Card>

      {/* Crop Advisory */}
      <Card className="p-4 bg-gradient-to-r from-green-50 to-green-100 border-green-200 mb-4">
        <div className="flex items-center space-x-3 mb-3">
          <TrendingUp className="w-6 h-6 text-green-600" />
          <h3 className="font-semibold text-green-900">Today's Advisory</h3>
        </div>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <p className="text-sm text-green-800">Apply nitrogen fertilizer to wheat crop</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <p className="text-sm text-green-800">Check for pest infestation in cotton</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <p className="text-sm text-green-800">Prepare for irrigation tomorrow</p>
          </div>
        </div>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="p-4 bg-card text-center">
          <p className="text-2xl font-bold text-primary">5.2</p>
          <p className="text-sm text-muted-foreground">Acres Farmed</p>
        </Card>
        <Card className="p-4 bg-card text-center">
          <p className="text-2xl font-bold text-secondary">₹2.4L</p>
          <p className="text-sm text-muted-foreground">This Season</p>
        </Card>
      </div>
    </div>
  )
}
