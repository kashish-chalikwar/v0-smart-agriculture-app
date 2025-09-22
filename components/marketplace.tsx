import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, ShoppingCart, Star, Truck, Shield, Filter } from "lucide-react"

export function Marketplace() {
  const categories = [
    { name: "Seeds", icon: "🌱", count: 45 },
    { name: "Fertilizers", icon: "🧪", count: 32 },
    { name: "Equipment", icon: "🚜", count: 28 },
    { name: "Pesticides", icon: "🛡️", count: 19 },
  ]

  const products = [
    {
      id: 1,
      name: "Wheat Seeds (HD-2967)",
      category: "Seeds",
      price: "₹2,400",
      unit: "per 50kg bag",
      rating: 4.5,
      reviews: 128,
      seller: "AgriCorp Seeds",
      image: "/wheat-seeds-bag.jpg",
      inStock: true,
      fastDelivery: true,
    },
    {
      id: 2,
      name: "NPK Fertilizer (12:32:16)",
      category: "Fertilizers",
      price: "₹1,850",
      unit: "per 50kg bag",
      rating: 4.3,
      reviews: 89,
      seller: "FarmNutrients Ltd",
      image: "/fertilizer-bag.png",
      inStock: true,
      fastDelivery: false,
    },
    {
      id: 3,
      name: "Tractor Rental (Mahindra 575)",
      category: "Equipment",
      price: "₹800",
      unit: "per day",
      rating: 4.7,
      reviews: 56,
      seller: "RentFarm Equipment",
      image: "/red-tractor.png",
      inStock: true,
      fastDelivery: true,
    },
    {
      id: 4,
      name: "Organic Pesticide Spray",
      category: "Pesticides",
      price: "₹450",
      unit: "per 1L bottle",
      rating: 4.2,
      reviews: 34,
      seller: "EcoFarm Solutions",
      image: "/pesticide-spray-bottle.jpg",
      inStock: false,
      fastDelivery: false,
    },
  ]

  return (
    <div className="p-4 pb-20">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground mb-4">Marketplace</h1>

        <div className="flex space-x-2 mb-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search seeds, fertilizers, equipment..." className="pl-10" />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-4 gap-3 mb-6">
          {categories.map((category, index) => (
            <Card key={index} className="p-3 text-center cursor-pointer hover:bg-accent transition-colors">
              <div className="text-2xl mb-1">{category.icon}</div>
              <p className="text-xs font-medium text-card-foreground">{category.name}</p>
              <p className="text-xs text-muted-foreground">{category.count}</p>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {products.map((product) => (
          <Card key={product.id} className="p-4 bg-card">
            <div className="flex space-x-4">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-20 h-20 rounded-lg object-cover bg-muted"
              />
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-card-foreground text-sm">{product.name}</h3>
                    <p className="text-xs text-muted-foreground">{product.seller}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-primary">{product.price}</p>
                    <p className="text-xs text-muted-foreground">{product.unit}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2 mb-2">
                  <div className="flex items-center space-x-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-medium">{product.rating}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">({product.reviews} reviews)</span>
                  {product.fastDelivery && (
                    <Badge variant="secondary" className="text-xs">
                      <Truck className="w-3 h-3 mr-1" />
                      Fast Delivery
                    </Badge>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {product.inStock ? (
                      <Badge className="bg-green-100 text-green-800 text-xs">In Stock</Badge>
                    ) : (
                      <Badge variant="outline" className="text-xs">
                        Out of Stock
                      </Badge>
                    )}
                    <Shield className="w-3 h-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">Verified Seller</span>
                  </div>
                  <Button size="sm" disabled={!product.inStock} className="h-8">
                    <ShoppingCart className="w-3 h-3 mr-1" />
                    {product.category === "Equipment" ? "Rent" : "Buy"}
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
