import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, TrendingUp, Leaf, BarChart3, Plus } from "lucide-react"

export function CropPassport() {
  const landDetails = {
    totalArea: "5.2 acres",
    location: "Village Khanna, Ludhiana",
    soilType: "Alluvial",
    irrigationType: "Canal + Tubewell",
  }

  const cropHistory = [
    {
      season: "Kharif 2024",
      crop: "Cotton",
      area: "3.0 acres",
      yield: "18 quintals/acre",
      income: "₹1,80,000",
      status: "completed",
    },
    {
      season: "Rabi 2023-24",
      crop: "Wheat",
      area: "5.2 acres",
      yield: "22 quintals/acre",
      income: "₹2,40,000",
      status: "completed",
    },
    {
      season: "Kharif 2023",
      crop: "Rice",
      area: "2.2 acres",
      yield: "25 quintals/acre",
      income: "₹1,20,000",
      status: "completed",
    },
  ]

  const currentCrops = [
    {
      crop: "Wheat",
      area: "4.0 acres",
      plantedDate: "15 Nov 2024",
      expectedHarvest: "15 Apr 2025",
      stage: "Vegetative Growth",
    },
    {
      crop: "Mustard",
      area: "1.2 acres",
      plantedDate: "20 Nov 2024",
      expectedHarvest: "20 Mar 2025",
      stage: "Flowering",
    },
  ]

  return (
    <div className="p-4 pb-20">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Digital Crop Passport</h1>
          <p className="text-muted-foreground">Your farming records & history</p>
        </div>
        <Button size="sm">
          <Plus className="w-4 h-4 mr-2" />
          Add Crop
        </Button>
      </div>

      {/* Land Details */}
      <Card className="p-4 bg-card mb-6">
        <h3 className="font-semibold text-card-foreground mb-4 flex items-center">
          <MapPin className="w-5 h-5 mr-2 text-primary" />
          Land Details
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Total Area</p>
            <p className="font-medium text-card-foreground">{landDetails.totalArea}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Location</p>
            <p className="font-medium text-card-foreground">{landDetails.location}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Soil Type</p>
            <p className="font-medium text-card-foreground">{landDetails.soilType}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Irrigation</p>
            <p className="font-medium text-card-foreground">{landDetails.irrigationType}</p>
          </div>
        </div>
      </Card>

      {/* Current Crops */}
      <div className="mb-6">
        <h3 className="font-semibold text-foreground mb-4 flex items-center">
          <Leaf className="w-5 h-5 mr-2 text-primary" />
          Current Crops
        </h3>
        <div className="space-y-3">
          {currentCrops.map((crop, index) => (
            <Card key={index} className="p-4 bg-gradient-to-r from-green-50 to-green-100 border-green-200">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-green-900">{crop.crop}</h4>
                <Badge className="bg-green-100 text-green-800">{crop.stage}</Badge>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-green-700">Area: {crop.area}</p>
                  <p className="text-green-700">Planted: {crop.plantedDate}</p>
                </div>
                <div>
                  <p className="text-green-700">Expected Harvest:</p>
                  <p className="text-green-700">{crop.expectedHarvest}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Crop History */}
      <div className="mb-6">
        <h3 className="font-semibold text-foreground mb-4 flex items-center">
          <BarChart3 className="w-5 h-5 mr-2 text-primary" />
          Crop History
        </h3>
        <div className="space-y-3">
          {cropHistory.map((record, index) => (
            <Card key={index} className="p-4 bg-card">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h4 className="font-semibold text-card-foreground">{record.crop}</h4>
                  <p className="text-sm text-muted-foreground">{record.season}</p>
                </div>
                <Badge variant="outline">Completed</Badge>
              </div>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Area</p>
                  <p className="font-medium text-card-foreground">{record.area}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Yield</p>
                  <p className="font-medium text-card-foreground">{record.yield}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Income</p>
                  <p className="font-medium text-secondary">{record.income}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Performance Summary */}
      <Card className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
        <h3 className="font-semibold text-blue-900 mb-4 flex items-center">
          <TrendingUp className="w-5 h-5 mr-2" />
          Performance Summary
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-blue-900">₹5.4L</p>
            <p className="text-sm text-blue-700">Total Income (Last Year)</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-blue-900">21.7</p>
            <p className="text-sm text-blue-700">Avg Yield (Quintals/Acre)</p>
          </div>
        </div>
      </Card>
    </div>
  )
}
