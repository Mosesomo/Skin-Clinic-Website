import React from "react"
import { useState, useMemo, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link, useLocation, useNavigate } from "react-router-dom"
import {
  ShoppingCart,
  Star,
  Filter,
  X,
  Search,
  Heart,
  Eye,
  Package,
  Phone,
  Mail,
  Pill,
  Syringe,
  TestTube2,
  Shield,
  Activity,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

// Real Pexels images for medicine categories
const medicineImages = {
  antibiotics: [
    "https://i.pinimg.com/736x/91/b1/68/91b168a85e42270e3308df580ba9cf0f.jpg",
    "https://i.pinimg.com/736x/91/53/36/915336e52bd2b12ffd43c541a9466836.jpg",
    "https://i.pinimg.com/736x/10/aa/9c/10aa9ce5cafa1f84a8ac28e2d7bec1b5.jpg",
  ],
  antifungals: [
    "https://i.pinimg.com/736x/a5/1f/c2/a51fc2fd189224c5b7925d5dcf787cfa.jpg",
    "https://i.pinimg.com/736x/a3/aa/85/a3aa854846db5219bc5f8846e9796eb3.jpg",
  ],
  retinoids: [
    "https://i.pinimg.com/736x/2e/d3/e2/2ed3e24126c649d96d00128b1a7f2eea.jpg",
    "https://i.pinimg.com/736x/64/25/0f/64250f565bf10e706bdbf59d816e37b7.jpg",
    "https://i.pinimg.com/736x/3c/81/50/3c81503d90c54b96694c08ea0e6c9635.jpg",
  ],
  steroids: [
    "https://i.pinimg.com/736x/fb/29/7d/fb297d62806992dabfc2a14b8cf78685.jpg",
    "https://i.pinimg.com/736x/6d/ed/4a/6ded4af5c119f118c8e9933da343eb08.jpg",
  ],
  immunosuppressants: [
    "https://i.pinimg.com/736x/b9/6f/95/b96f95d3162cb2f6b3b5f8c0c377a103.jpg",
    "https://i.pinimg.com/736x/ec/bb/ba/ecbbba7b174639250938a0aefbb701fc.jpg",
  ],
}

// SearchInput Component
const SearchInput = React.memo(({ value, onChange }) => (
  <div className="relative">
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input
        type="text"
        placeholder="Search medicines..."
        value={value}
        onChange={onChange}
        className="w-full pl-10 pr-4 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
      />
    </div>
  </div>
))

// Filter Panel Component
const FilterPanel = React.memo(
  ({
    className,
    searchQuery,
    onSearchChange,
    selectedCategory,
    onCategoryChange,
    priceRange,
    onPriceRangeChange,
    sortBy,
    onSortChange,
  }) => (
    <div className={cn("space-y-6", className)}>
      {/* Search */}
      <SearchInput value={searchQuery} onChange={onSearchChange} />

      {/* Categories */}
      <div>
        <h3 className="font-semibold mb-3">Categories</h3>
        <div className="space-y-2">
          <Button
            variant={selectedCategory === "all" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => onCategoryChange("all")}
          >
            <Package className="w-4 h-4 mr-2" />
            All Medicines
          </Button>
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => onCategoryChange(category.id)}
            >
              {getCategoryIcon(category.id)}
              <span className="ml-2">{category.name}</span>
              <Badge variant="secondary" className="ml-auto text-xs">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-semibold mb-3">Price Range</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>KSh {priceRange[0].toLocaleString()}</span>
            <span>KSh {priceRange[1].toLocaleString()}</span>
          </div>
          <input
            type="range"
            min="0"
            max="20000"
            value={priceRange[1]}
            onChange={(e) => onPriceRangeChange([priceRange[0], Number.parseInt(e.target.value)])}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>

      {/* Sort By */}
      <div>
        <h3 className="font-semibold mb-3">Sort By</h3>
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="w-full px-3 py-2 text-sm bg-background border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
        >
          <option value="name">Sort by Name</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
        </select>
      </div>
    </div>
  ),
)

const categories = [
  { id: "all", name: "All Medicines", count: 12 },
  { id: "antibiotics", name: "Antibiotics", count: 3 },
  { id: "antifungals", name: "Antifungals", count: 2 },
  { id: "retinoids", name: "Retinoids", count: 3 },
  { id: "steroids", name: "Steroids", count: 2 },
  { id: "immunosuppressants", name: "Immunosuppressants", count: 2 },
]

const products = [
  {
    id: 1,
    name: "Clindamycin Gel",
    slug: "clindamycin-gel",
    category: "antibiotics",
    price: 2500,
    originalPrice: 3500,
    image: medicineImages.antibiotics[0],
    rating: 4.8,
    reviews: 124,
    description: "Topical antibiotic for acne treatment, prevents bacterial growth",
    badge: "Best Seller",
    ingredients: ["Clindamycin phosphate", "Alcohol", "Water"],
    prescription: true,
  },
  {
    id: 2,
    name: "Hydrocortisone Cream",
    slug: "hydrocortisone-cream",
    category: "steroids",
    price: 1800,
    image: medicineImages.steroids[0],
    rating: 4.7,
    reviews: 89,
    description: "Low-potency steroid cream for eczema and dermatitis relief",
    badge: "Derma Recommended",
    ingredients: ["Hydrocortisone acetate", "Petrolatum", "Mineral oil"],
    prescription: false,
  },
  {
    id: 3,
    name: "Tretinoin Cream",
    slug: "tretinoin-cream",
    category: "retinoids",
    price: 4500,
    image: medicineImages.retinoids[0],
    rating: 4.6,
    reviews: 156,
    description: "Topical retinoid for acne and anti-aging treatment",
    badge: "Prescription",
    ingredients: ["Tretinoin", "Emollients", "Preservatives"],
    prescription: true,
  },
  {
    id: 4,
    name: "Ketoconazole Shampoo",
    slug: "ketoconazole-shampoo",
    category: "antifungals",
    price: 2200,
    image: medicineImages.antifungals[0],
    rating: 4.5,
    reviews: 98,
    description: "Antifungal treatment for dandruff and seborrheic dermatitis",
    ingredients: ["Ketoconazole", "Sodium lauryl sulfate", "Fragrance"],
    prescription: false,
  },
  {
    id: 5,
    name: "Tacrolimus Ointment",
    slug: "tacrolimus-ointment",
    category: "immunosuppressants",
    price: 8500,
    originalPrice: 9500,
    image: medicineImages.immunosuppressants[0],
    rating: 4.9,
    reviews: 203,
    description: "Immunomodulator for atopic dermatitis treatment",
    badge: "Premium",
    ingredients: ["Tacrolimus", "Mineral oil", "Paraffin"],
    prescription: true,
  },
  {
    id: 6,
    name: "Adapalene Gel",
    slug: "adapalene-gel",
    category: "retinoids",
    price: 3800,
    image: medicineImages.retinoids[1],
    rating: 4.7,
    reviews: 67,
    description: "Third-generation retinoid for acne treatment",
    ingredients: ["Adapalene", "Carbomer", "Edetate disodium"],
    prescription: false,
  },
  {
    id: 7,
    name: "Mupirocin Ointment",
    slug: "mupirocin-ointment",
    category: "antibiotics",
    price: 3200,
    image: medicineImages.antibiotics[1],
    rating: 4.6,
    reviews: 145,
    description: "Topical antibiotic for impetigo and skin infections",
    badge: "Essential",
    ingredients: ["Mupirocin calcium", "Polyethylene glycol"],
    prescription: true,
  },
  {
    id: 8,
    name: "Fluconazole Tablets",
    slug: "fluconazole-tablets",
    category: "antifungals",
    price: 5500,
    image: medicineImages.antifungals[1],
    rating: 4.8,
    reviews: 189,
    description: "Oral antifungal for systemic fungal infections",
    badge: "Prescription",
    ingredients: ["Fluconazole", "Lactose", "Magnesium stearate"],
    prescription: true,
  },
  {
    id: 9,
    name: "Clobetasol Cream",
    slug: "clobetasol-cream",
    category: "steroids",
    price: 4200,
    image: medicineImages.steroids[1],
    rating: 4.5,
    reviews: 234,
    description: "High-potency steroid for severe inflammatory skin conditions",
    ingredients: ["Clobetasol propionate", "Propylene glycol", "Cetyl alcohol"],
    prescription: true,
  },
  {
    id: 10,
    name: "Pimecrolimus Cream",
    slug: "pimecrolimus-cream",
    category: "immunosuppressants",
    price: 7800,
    image: medicineImages.immunosuppressants[1],
    rating: 4.4,
    reviews: 76,
    description: "Non-steroidal treatment for atopic dermatitis",
    ingredients: ["Pimecrolimus", "Benzyl alcohol", "Stearyl alcohol"],
    prescription: true,
  },
  {
    id: 11,
    name: "Benzoyl Peroxide Wash",
    slug: "benzoyl-peroxide-wash",
    category: "antibiotics",
    price: 1500,
    image: medicineImages.antibiotics[2],
    rating: 4.3,
    reviews: 92,
    description: "Antibacterial cleanser for acne-prone skin",
    badge: "Over-the-counter",
    ingredients: ["Benzoyl peroxide", "Surfactants", "Water"],
    prescription: false,
  },
  {
    id: 12,
    name: "Salicylic Acid Solution",
    slug: "salicylic-acid-solution",
    category: "retinoids",
    price: 1800,
    image: medicineImages.retinoids[2],
    rating: 4.5,
    reviews: 118,
    description: "Keratolytic agent for acne and wart treatment",
    ingredients: ["Salicylic acid", "Alcohol", "Water"],
    prescription: false,
  },
]

const getCategoryIcon = (category) => {
  const icons = {
    antibiotics: <Pill className="w-4 h-4" />,
    antifungals: <TestTube2 className="w-4 h-4" />,
    retinoids: <Activity className="w-4 h-4" />,
    steroids: <Syringe className="w-4 h-4" />,
    immunosuppressants: <Shield className="w-4 h-4" />,
    all: <Package className="w-4 h-4" />,
  }
  return icons[category] || <Package className="w-4 h-4" />
}

const getBadgeStyle = (badge) => {
  const styles = {
    "Best Seller": "bg-gradient-to-r from-yellow-400 to-orange-500",
    "Derma Recommended": "bg-gradient-to-r from-blue-500 to-blue-700",
    Prescription: "bg-gradient-to-r from-red-500 to-pink-600",
    Premium: "bg-gradient-to-r from-purple-500 to-pink-500",
    Essential: "bg-gradient-to-r from-green-500 to-teal-500",
    "Over-the-counter": "bg-gradient-to-r from-gray-500 to-gray-700",
  }
  return styles[badge] || "bg-gradient-to-r from-gray-400 to-gray-500"
}

const ShopPage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const searchParams = new URLSearchParams(location.search)

  // Get URL parameters
  const categoryParam = searchParams.get("category") || "all"
  const pageParam = Number.parseInt(searchParams.get("page") || "1")
  const searchParam = searchParams.get("search") || ""

  const [selectedCategory, setSelectedCategory] = useState(categoryParam)
  const [cartItems, setCartItems] = useState([])
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState(searchParam)
  const [priceRange, setPriceRange] = useState([0, 20000])
  const [sortBy, setSortBy] = useState("name")
  const [wishlist, setWishlist] = useState([])
  const [currentPage, setCurrentPage] = useState(pageParam)
  const productsPerPage = 6

  // Update URL with parameters
  const updateUrl = (category, page, search) => {
    const params = new URLSearchParams()
    if (category !== "all") params.set("category", category)
    if (page > 1) params.set("page", page.toString())
    if (search) params.set("search", search)

    const newUrl = `${location.pathname}${params.toString() ? `?${params.toString()}` : ""}`
    navigate(newUrl)
  }

  const handleSearchChange = useCallback(
    (e) => {
      const newSearch = e.target.value
      setSearchQuery(newSearch)
      setCurrentPage(1)
      updateUrl(selectedCategory, 1, newSearch)
    },
    [selectedCategory],
  )

  const handleCategoryChange = useCallback(
    (category) => {
      setSelectedCategory(category)
      setCurrentPage(1)
      updateUrl(category, 1, searchQuery)
    },
    [searchQuery],
  )

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page)
    updateUrl(selectedCategory, page, searchQuery)
    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Filter products
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
      const matchesSearch =
        searchQuery === "" ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
      return matchesCategory && matchesSearch && matchesPrice
    })
  }, [selectedCategory, searchQuery, priceRange])

  // Sort products
  const sortedProducts = useMemo(() => {
    return [...filteredProducts].sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name)
      if (sortBy === "price-low") return a.price - b.price
      if (sortBy === "price-high") return b.price - a.price
      if (sortBy === "rating") return b.rating - a.rating
      return 0
    })
  }, [filteredProducts, sortBy])

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct)
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage)

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id)
    if (existingItem) {
      setCartItems(cartItems.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)))
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }])
    }
  }

  const toggleWishlist = (productId) => {
    setWishlist((prev) => (prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]))
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20  overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop')] opacity-100 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <Badge variant="outline" className="mb-3 bg-blue-100 text-blue-700 hover:bg-blue-200 text-xs">
                Dermatology Pharmacy
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl sm:text-3xl font-bold text-white mb-4"
            >
              Premium{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                Skin Medicines
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm sm:text-base text-white leading-relaxed mb-6"
            >
              Clinically proven dermatological medications for all skin conditions, from acne to eczema and beyond.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 justify-center"
            >
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 rounded-lg text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                <Phone className="w-3 h-3 mr-2" />
                Consult a Dermatologist
              </Button>
              <Button
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 sm:px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300"
              >
                Learn About Treatments
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mobile Filter Button */}
      <div className="lg:hidden fixed bottom-6 left-6 z-50">
        <Button
          size="lg"
          className="rounded-full bg-blue-600 border-2 border-accent shadow-lg h-14 w-14 p-0"
          onClick={() => setIsFilterOpen(true)}
        >
          <Filter className="h-6 w-6" />
        </Button>
      </div>

      {/* Mobile Filter Panel */}
      <AnimatePresence>
        {isFilterOpen && (
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 left-0 w-full max-w-sm bg-background border-r shadow-xl z-50 lg:hidden"
          >
            <div className="h-full flex flex-col">
              <div className="p-4 border-b flex items-center justify-between">
                <h2 className="text-lg font-semibold">Filters</h2>
                <Button variant="ghost" size="icon" onClick={() => setIsFilterOpen(false)}>
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <div className="flex-1 overflow-y-auto p-4">
                <FilterPanel
                  searchQuery={searchQuery}
                  onSearchChange={handleSearchChange}
                  selectedCategory={selectedCategory}
                  onCategoryChange={handleCategoryChange}
                  priceRange={priceRange}
                  onPriceRangeChange={setPriceRange}
                  sortBy={sortBy}
                  onSortChange={setSortBy}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-6 max-h-[calc(100vh-3rem)] overflow-y-auto pr-4">
              <FilterPanel
                searchQuery={searchQuery}
                onSearchChange={handleSearchChange}
                selectedCategory={selectedCategory}
                onCategoryChange={handleCategoryChange}
                priceRange={priceRange}
                onPriceRangeChange={setPriceRange}
                sortBy={sortBy}
                onSortChange={setSortBy}
              />
            </div>
          </aside>

          {/* Products Grid */}
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">
                {selectedCategory === "all" ? "All Medicines" : categories.find((c) => c.id === selectedCategory)?.name}
              </h2>
              <Button variant="outline" size="sm" className="lg:hidden" onClick={() => setIsFilterOpen(true)}>
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>

            {filteredProducts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {currentProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group relative bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
                    >
                      {/* Product Badge */}
                      {product.badge && (
                        <div
                          className={`absolute top-3 left-3 z-10 px-2 py-1 ${getBadgeStyle(
                            product.badge,
                          )} text-white text-xs font-medium rounded-full`}
                        >
                          {product.badge}
                        </div>
                      )}

                      {/* Prescription Badge */}
                      {product.prescription && (
                        <div className="absolute top-3 right-3 z-10 px-2 py-1 bg-gradient-to-r from-red-500 to-pink-600 text-white text-xs font-medium rounded-full">
                          Prescription
                        </div>
                      )}

                      {/* Wishlist Button */}
                      <button
                        onClick={() => toggleWishlist(product.id)}
                        className="absolute top-12 right-3 z-10 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-all"
                      >
                        <Heart
                          className={`w-4 h-4 ${wishlist.includes(product.id) ? "text-red-500 fill-current" : "text-gray-400"}`}
                        />
                      </button>

                      {/* Product Image with Link */}
                      <Link to={`/shop/${product.slug}`} className="block">
                        <div className="relative overflow-hidden aspect-square bg-gray-50">
                          <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                          {/* Quick View Button */}
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 transform scale-75 group-hover:scale-100 transition-transform shadow-lg">
                              <Eye className="w-5 h-5 text-blue-600" />
                            </div>
                          </div>
                        </div>
                      </Link>

                      {/* Product Info */}
                      <div className="p-4">
                        <Link to={`/shop/${product.slug}`} className="block">
                          <h3 className="text-base font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-1">
                            {product.name}
                          </h3>
                        </Link>
                        <p className="text-sm text-gray-600 mb-3 leading-relaxed line-clamp-2">{product.description}</p>

                        {/* Rating */}
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-500">
                            {product.rating} ({product.reviews})
                          </span>
                        </div>

                        {/* Key Ingredients */}
                        <div className="mb-4">
                          <p className="text-xs text-gray-500 mb-2">Active Ingredients:</p>
                          <div className="flex flex-wrap gap-1">
                            {product.ingredients.slice(0, 2).map((ingredient, i) => (
                              <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                {ingredient}
                              </span>
                            ))}
                            {product.ingredients.length > 2 && (
                              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                +{product.ingredients.length - 2}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Price */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-2">
                            <span className="text-lg font-bold text-blue-600">
                              KSh {product.price.toLocaleString()}
                            </span>
                            {product.originalPrice && (
                              <span className="text-sm text-gray-400 line-through">
                                KSh {product.originalPrice.toLocaleString()}
                              </span>
                            )}
                          </div>
                          {product.originalPrice && (
                            <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                              Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}
                              %
                            </span>
                          )}
                        </div>

                        {/* Add to Cart Button */}
                        <Button
                          onClick={() => addToCart(product)}
                          className="w-full bg-blue-600 text-white py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center space-x-2"
                        >
                          <ShoppingCart className="w-4 h-4" />
                          <span>Add to Cart</span>
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center mt-8"
                  >
                    <div className="flex items-center space-x-2">
                      <Button
                        onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                        disabled={currentPage === 1}
                        variant="outline"
                        className="p-2 rounded-md border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <ChevronLeft className="w-4 h-4 text-gray-600" />
                      </Button>

                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <Button
                          key={page}
                          onClick={() => handlePageChange(page)}
                          variant={currentPage === page ? "default" : "ghost"}
                          className={`w-10 h-10 rounded-md text-sm ${
                            currentPage === page ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-100"
                          }`}
                        >
                          {page}
                        </Button>
                      ))}

                      <Button
                        onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        variant="outline"
                        className="p-2 rounded-md border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <ChevronRight className="w-4 h-4 text-gray-600" />
                      </Button>
                    </div>
                  </motion.div>
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">No medicines found</h3>
                <p className="text-gray-500 mb-4">Try adjusting your filters or search terms</p>
                <Button
                  onClick={() => {
                    setSelectedCategory("all")
                    setSearchQuery("")
                    setPriceRange([0, 20000])
                    updateUrl("all", 1, "")
                  }}
                  variant="ghost"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Reset all filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Consultation CTA */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-12 bg-blue-600"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Need a Prescription?</h2>
            <div className="w-16 h-1 bg-white mx-auto mb-4" />
            <p className="text-blue-100 mb-6">
              Some of our medications require a prescription. Book a consultation with our dermatologists to get the
              right treatment for your condition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                <Phone className="w-4 h-4 mr-2" />
                Book Consultation
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-lg font-medium transition-all duration-300"
              >
                <Mail className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default ShopPage
