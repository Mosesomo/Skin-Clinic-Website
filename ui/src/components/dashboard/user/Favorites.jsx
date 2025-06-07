import { useState } from "react"
import { Heart, ShoppingCart, Star, Search, Grid, List, Trash2, Package } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const Favorites = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterCategory, setFilterCategory] = useState("all")
  const [viewMode, setViewMode] = useState("grid")

  // Mock data
  const favoriteProducts = [
    {
      id: 1,
      name: "Tretinoin Cream",
      category: "retinoids",
      price: 4500,
      originalPrice: 5000,
      image: "https://images.pexels.com/photos/4047149/pexels-photo-4047149.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.6,
      reviews: 156,
      description: "Topical retinoid for acne and anti-aging treatment",
      inStock: true,
      addedDate: "2025-05-15",
    },
    {
      id: 2,
      name: "Hydrocortisone Cream",
      category: "steroids",
      price: 1800,
      image: "https://images.pexels.com/photos/4047153/pexels-photo-4047153.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.7,
      reviews: 89,
      description: "Low-potency steroid cream for eczema and dermatitis relief",
      inStock: true,
      addedDate: "2025-05-10",
    },
    {
      id: 3,
      name: "Ketoconazole Shampoo",
      category: "antifungals",
      price: 2200,
      image: "https://images.pexels.com/photos/4047148/pexels-photo-4047148.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.5,
      reviews: 98,
      description: "Antifungal treatment for dandruff and seborrheic dermatitis",
      inStock: false,
      addedDate: "2025-04-28",
    },
    {
      id: 4,
      name: "Clindamycin Gel",
      category: "antibiotics",
      price: 2500,
      originalPrice: 3500,
      image: "https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.8,
      reviews: 124,
      description: "Topical antibiotic for acne treatment, prevents bacterial growth",
      inStock: true,
      addedDate: "2025-04-20",
    },
    {
      id: 5,
      name: "Salicylic Acid Solution",
      category: "retinoids",
      price: 1800,
      image: "https://images.pexels.com/photos/4047152/pexels-photo-4047152.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.5,
      reviews: 118,
      description: "Keratolytic agent for acne and wart treatment",
      inStock: true,
      addedDate: "2025-04-15",
    },
  ]

  const favoriteServices = [
    {
      id: 1,
      name: "Acne Treatment Consultation",
      category: "Medical Dermatology",
      price: 5000,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80",
      rating: 4.8,
      reviews: 45,
      description: "Comprehensive acne treatment using the latest medical approaches",
      available: true,
      addedDate: "2025-05-12",
    },
    {
      id: 2,
      name: "Chemical Peels",
      category: "Cosmetic Dermatology",
      price: 8000,
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80",
      rating: 4.7,
      reviews: 32,
      description: "Professional chemical peels to improve skin texture and tone",
      available: true,
      addedDate: "2025-05-08",
    },
    {
      id: 3,
      name: "Skin Cancer Screening",
      category: "Medical Dermatology",
      price: 6000,
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80",
      rating: 4.9,
      reviews: 67,
      description: "Early detection and comprehensive screening for all types of skin cancer",
      available: true,
      addedDate: "2025-04-30",
    },
  ]

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "antibiotics", label: "Antibiotics" },
    { value: "antifungals", label: "Antifungals" },
    { value: "retinoids", label: "Retinoids" },
    { value: "steroids", label: "Steroids" },
    { value: "immunosuppressants", label: "Immunosuppressants" },
  ]

  const serviceCategories = [
    { value: "all", label: "All Categories" },
    { value: "Medical Dermatology", label: "Medical Dermatology" },
    { value: "Cosmetic Dermatology", label: "Cosmetic Dermatology" },
    { value: "Surgical Dermatology", label: "Surgical Dermatology" },
  ]

  const filteredProducts = favoriteProducts.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = filterCategory === "all" || product.category === filterCategory
    return matchesSearch && matchesCategory
  })

  const filteredServices = favoriteServices.filter((service) => {
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = filterCategory === "all" || service.category === filterCategory
    return matchesSearch && matchesCategory
  })

  const handleRemoveFromFavorites = (id, type) => {
    // Handle remove from favorites logic here
    console.log(`Removing ${type} with id ${id} from favorites`)
  }

  const handleAddToCart = (product) => {
    // Handle add to cart logic here
    console.log(`Adding ${product.name} to cart`)
  }

  const handleBookService = (service) => {
    // Handle book service logic here
    console.log(`Booking ${service.name}`)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">My Favorites</h1>
          <p className="text-muted-foreground">Products and services you've saved for later</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant={viewMode === "grid" ? "default" : "outline"} size="icon" onClick={() => setViewMode("grid")}>
            <Grid className="h-4 w-4" />
          </Button>
          <Button variant={viewMode === "list" ? "default" : "outline"} size="icon" onClick={() => setViewMode("list")}>
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Tabs defaultValue="products" className="w-full">
        <TabsList>
          <TabsTrigger value="products">Products ({favoriteProducts.length})</TabsTrigger>
          <TabsTrigger value="services">Services ({favoriteServices.length})</TabsTrigger>
        </TabsList>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4 my-6">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search favorites..."
              className="pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Select value={filterCategory} onValueChange={setFilterCategory}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <TabsContent value="products" className="mt-0">
          {filteredProducts.length > 0 ? (
            <div className={viewMode === "grid" ? "grid gap-6 md:grid-cols-2 lg:grid-cols-3" : "space-y-4"}>
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  viewMode={viewMode}
                  onRemove={() => handleRemoveFromFavorites(product.id, "product")}
                  onAddToCart={() => handleAddToCart(product)}
                />
              ))}
            </div>
          ) : (
            <EmptyState type="products" />
          )}
        </TabsContent>

        <TabsContent value="services" className="mt-0">
          {filteredServices.length > 0 ? (
            <div className={viewMode === "grid" ? "grid gap-6 md:grid-cols-2 lg:grid-cols-3" : "space-y-4"}>
              {filteredServices.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  viewMode={viewMode}
                  onRemove={() => handleRemoveFromFavorites(service.id, "service")}
                  onBook={() => handleBookService(service)}
                />
              ))}
            </div>
          ) : (
            <EmptyState type="services" />
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

const ProductCard = ({ product, viewMode, onRemove, onAddToCart }) => {
  if (viewMode === "list") {
    return (
      <Card className="hover:shadow-md transition-shadow">
        <CardContent className="p-4">
          <div className="flex items-center space-x-4">
            <div className="h-16 w-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-lg truncate">{product.name}</h3>
                  <p className="text-sm text-muted-foreground truncate">{product.description}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-blue-600">KSh {product.price.toLocaleString()}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        KSh {product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center space-x-2 mt-2">
                    <Button variant="outline" size="sm" onClick={onRemove} className="text-red-600 hover:text-red-700">
                      <Trash2 className="h-3 w-3" />
                    </Button>
                    <Button
                      size="sm"
                      onClick={onAddToCart}
                      disabled={!product.inStock}
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      <ShoppingCart className="h-3 w-3 mr-1" />
                      {product.inStock ? "Add to Cart" : "Out of Stock"}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="group relative overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="aspect-square relative overflow-hidden">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={onRemove}
            className="h-8 w-8 bg-white/80 hover:bg-white text-red-600 hover:text-red-700"
          >
            <Heart className="h-4 w-4 fill-current" />
          </Button>
        </div>
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <Badge variant="destructive">Out of Stock</Badge>
          </div>
        )}
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-1">{product.name}</h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{product.description}</p>

        <div className="flex items-center space-x-2 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            {product.rating} ({product.reviews})
          </span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-blue-600">KSh {product.price.toLocaleString()}</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                KSh {product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          {product.originalPrice && (
            <Badge variant="outline" className="bg-green-50 text-green-700">
              Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
            </Badge>
          )}
        </div>

        <Button
          onClick={onAddToCart}
          disabled={!product.inStock}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          {product.inStock ? "Add to Cart" : "Out of Stock"}
        </Button>
      </CardContent>
    </Card>
  )
}

const ServiceCard = ({ service, viewMode, onRemove, onBook }) => {
  if (viewMode === "list") {
    return (
      <Card className="hover:shadow-md transition-shadow">
        <CardContent className="p-4">
          <div className="flex items-center space-x-4">
            <div className="h-16 w-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
              <img
                src={service.image || "/placeholder.svg"}
                alt={service.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-lg truncate">{service.name}</h3>
                  <p className="text-sm text-muted-foreground truncate">{service.description}</p>
                  <Badge variant="outline" className="mt-1">
                    {service.category}
                  </Badge>
                </div>
                <div className="text-right">
                  <span className="text-lg font-bold text-blue-600">KSh {service.price.toLocaleString()}</span>
                  <div className="flex items-center space-x-2 mt-2">
                    <Button variant="outline" size="sm" onClick={onRemove} className="text-red-600 hover:text-red-700">
                      <Trash2 className="h-3 w-3" />
                    </Button>
                    <Button size="sm" onClick={onBook} className="bg-blue-600 hover:bg-blue-700">
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="group relative overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={service.image || "/placeholder.svg"}
          alt={service.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={onRemove}
            className="h-8 w-8 bg-white/80 hover:bg-white text-red-600 hover:text-red-700"
          >
            <Heart className="h-4 w-4 fill-current" />
          </Button>
        </div>
        <div className="absolute top-3 left-3">
          <Badge className="bg-blue-600 text-white">{service.category}</Badge>
        </div>
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-1">{service.name}</h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{service.description}</p>

        <div className="flex items-center space-x-2 mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(service.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            {service.rating} ({service.reviews})
          </span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <span className="text-lg font-bold text-blue-600">KSh {service.price.toLocaleString()}</span>
          <Badge variant="outline" className="bg-green-50 text-green-700">
            Available
          </Badge>
        </div>

        <Button onClick={onBook} className="w-full bg-blue-600 hover:bg-blue-700">
          Book Appointment
        </Button>
      </CardContent>
    </Card>
  )
}

const EmptyState = ({ type }) => {
  return (
    <Card>
      <CardContent className="flex flex-col items-center justify-center py-12 text-center">
        <Heart className="h-12 w-12 text-muted-foreground mb-4" />
        <h3 className="text-lg font-medium mb-2">No favorite {type} yet</h3>
        <p className="text-muted-foreground mb-6">Start adding {type} to your favorites to see them here.</p>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Package className="mr-2 h-4 w-4" />
          Browse {type === "products" ? "Products" : "Services"}
        </Button>
      </CardContent>
    </Card>
  )
}

export default Favorites
