import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, IndianRupee, Calendar, CheckCircle, ExternalLink } from "lucide-react"

export function GovtSchemes() {
  const schemes = [
    {
      id: 1,
      name: "PM-KISAN Scheme",
      description: "Direct income support to farmers",
      amount: "₹6,000/year",
      eligibility: "All landholding farmers",
      status: "eligible",
      deadline: "31 Dec 2024",
    },
    {
      id: 2,
      name: "Crop Insurance Scheme",
      description: "Protection against crop loss",
      amount: "Up to ₹2L coverage",
      eligibility: "Farmers with Kisan Credit Card",
      status: "applied",
      deadline: "15 Jan 2025",
    },
    {
      id: 3,
      name: "Soil Health Card Scheme",
      description: "Free soil testing and recommendations",
      amount: "Free service",
      eligibility: "All farmers",
      status: "eligible",
      deadline: "Ongoing",
    },
    {
      id: 4,
      name: "Drip Irrigation Subsidy",
      description: "Subsidy for water-efficient irrigation",
      amount: "50% subsidy",
      eligibility: "Minimum 1 acre land",
      status: "not_eligible",
      deadline: "28 Feb 2025",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "eligible":
        return <Badge className="bg-green-100 text-green-800">Eligible</Badge>
      case "applied":
        return <Badge className="bg-blue-100 text-blue-800">Applied</Badge>
      case "not_eligible":
        return <Badge variant="outline">Not Eligible</Badge>
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  return (
    <div className="p-4 pb-20">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground mb-2">Government Schemes</h1>
        <p className="text-muted-foreground">Available subsidies and support programs</p>
      </div>

      <div className="space-y-4">
        {schemes.map((scheme) => (
          <Card key={scheme.id} className="p-4 bg-card">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="font-semibold text-card-foreground mb-1">{scheme.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{scheme.description}</p>
              </div>
              {getStatusBadge(scheme.status)}
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center space-x-2">
                <IndianRupee className="w-4 h-4 text-secondary" />
                <div>
                  <p className="text-xs text-muted-foreground">Amount</p>
                  <p className="text-sm font-medium text-card-foreground">{scheme.amount}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Deadline</p>
                  <p className="text-sm font-medium text-card-foreground">{scheme.deadline}</p>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-center space-x-2 mb-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <p className="text-sm font-medium text-card-foreground">Eligibility</p>
              </div>
              <p className="text-sm text-muted-foreground pl-6">{scheme.eligibility}</p>
            </div>

            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                className="flex-1 bg-transparent"
                disabled={scheme.status === "not_eligible"}
              >
                <FileText className="w-4 h-4 mr-2" />
                View Details
              </Button>
              <Button
                size="sm"
                className="flex-1"
                disabled={scheme.status === "applied" || scheme.status === "not_eligible"}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                {scheme.status === "applied" ? "Applied" : "Apply Now"}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
