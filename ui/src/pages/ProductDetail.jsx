import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Star,
  ShoppingCart,
  Heart,
  Share2,
  ChevronRight,
  Shield,
  Truck,
  RotateCcw,
  Check,
  AlertCircle,
  ArrowLeft,
} from "lucide-react"

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

// Updated product data with real images and matching the shop page
const products = [
  {
    id: 1,
    slug: "clindamycin-gel",
    name: "Clindamycin Gel",
    category: "antibiotics",
    price: 2500,
    originalPrice: 3500,
    image: medicineImages.antibiotics[0],
    rating: 4.8,
    reviewCount: 124,
    stock: 50,
    description:
      "Topical antibiotic for acne treatment, prevents bacterial growth on the skin surface and within pores.",
    isNew: false,
    benefits: [
      "Reduces acne-causing bacteria",
      "Decreases inflammation and redness",
      "Prevents new acne formation",
      "Works well with other acne treatments",
    ],
    ingredients: [
      "Clindamycin phosphate 1%",
      "Propylene glycol",
      "Purified water",
      "Allantoin",
      "Carbomer",
      "Methylparaben",
      "Sodium hydroxide",
    ],
    usage:
      "Apply a thin layer to the affected areas twice daily, morning and evening. Wash hands before and after application. Avoid contact with eyes, mouth, and mucous membranes. Use as directed by your healthcare provider.",
    prescription: true,
  },
  {
    id: 2,
    slug: "hydrocortisone-cream",
    name: "Hydrocortisone Cream",
    category: "steroids",
    price: 1800,
    image: medicineImages.steroids[0],
    rating: 4.7,
    reviewCount: 89,
    stock: 75,
    description: "Low-potency steroid cream for eczema and dermatitis relief, reduces inflammation and itching.",
    isNew: true,
    benefits: [
      "Relieves itching and inflammation",
      "Treats eczema and dermatitis",
      "Reduces redness and swelling",
      "Fast-acting relief",
    ],
    ingredients: [
      "Hydrocortisone acetate 1%",
      "Petrolatum",
      "Mineral oil",
      "Cetyl alcohol",
      "Glycerin",
      "Lanolin",
      "Purified water",
    ],
    usage:
      "Apply a thin layer to the affected area 2-4 times daily. Gently massage until the cream disappears. Do not use for more than 7 consecutive days unless directed by your doctor. Avoid contact with eyes.",
    prescription: false,
  },
  {
    id: 3,
    slug: "tretinoin-cream",
    name: "Tretinoin Cream",
    category: "retinoids",
    price: 4500,
    image: medicineImages.retinoids[0],
    rating: 4.6,
    reviewCount: 156,
    stock: 30,
    description: "Topical retinoid for acne and anti-aging treatment",
    isNew: false,
    benefits: [
      "Reduces fine lines and wrinkles",
      "Treats acne and prevents breakouts",
      "Improves skin texture and tone",
      "Increases cell turnover",
    ],
    ingredients: ["Tretinoin 0.025%", "Emollients", "Preservatives", "Stabilizers"],
    usage:
      "Apply a pea-sized amount to clean, dry skin once daily in the evening. Start with every other night for the first week. Always use sunscreen during the day as this medication increases sun sensitivity.",
    prescription: true,
  },
  {
    id: 4,
    slug: "ketoconazole-shampoo",
    name: "Ketoconazole Shampoo",
    category: "antifungals",
    price: 2200,
    image: medicineImages.antifungals[0],
    rating: 4.5,
    reviewCount: 98,
    stock: 60,
    description: "Antifungal treatment for dandruff and seborrheic dermatitis",
    isNew: false,
    benefits: [
      "Treats fungal scalp infections",
      "Reduces dandruff and flaking",
      "Controls seborrheic dermatitis",
      "Prevents recurrence",
    ],
    ingredients: ["Ketoconazole 2%", "Sodium lauryl sulfate", "Fragrance", "Preservatives"],
    usage:
      "Apply to wet hair and scalp, lather well, and leave on for 3-5 minutes before rinsing thoroughly. Use twice weekly for 2-4 weeks, then once weekly for maintenance.",
    prescription: false,
  },
  {
    id: 5,
    slug: "tacrolimus-ointment",
    name: "Tacrolimus Ointment",
    category: "immunosuppressants",
    price: 8500,
    originalPrice: 9500,
    image: medicineImages.immunosuppressants[0],
    rating: 4.9,
    reviewCount: 203,
    stock: 25,
    description: "Immunomodulator for atopic dermatitis treatment",
    isNew: false,
    benefits: [
      "Treats moderate to severe eczema",
      "Non-steroidal anti-inflammatory",
      "Safe for long-term use",
      "Suitable for sensitive areas",
    ],
    ingredients: ["Tacrolimus 0.1%", "Mineral oil", "Paraffin", "Propylene carbonate"],
    usage:
      "Apply a thin layer to affected areas twice daily. Rub in gently and completely. Do not cover with bandages unless directed by your doctor. Avoid sun exposure and use sunscreen.",
    prescription: true,
  },
  {
    id: 6,
    slug: "adapalene-gel",
    name: "Adapalene Gel",
    category: "retinoids",
    price: 3800,
    image: medicineImages.retinoids[1],
    rating: 4.7,
    reviewCount: 67,
    stock: 40,
    description: "Third-generation retinoid for acne treatment",
    isNew: false,
    benefits: [
      "Treats acne and prevents new breakouts",
      "Gentle on sensitive skin",
      "Reduces inflammation",
      "Improves skin texture",
    ],
    ingredients: ["Adapalene 0.1%", "Carbomer", "Edetate disodium", "Methylparaben"],
    usage:
      "Apply a thin layer to affected areas once daily in the evening. Start with every other night if you have sensitive skin. Use sunscreen during the day.",
    prescription: false,
  },
  {
    id: 7,
    slug: "mupirocin-ointment",
    name: "Mupirocin Ointment",
    category: "antibiotics",
    price: 3200,
    image: medicineImages.antibiotics[1],
    rating: 4.6,
    reviewCount: 145,
    stock: 55,
    description: "Topical antibiotic for impetigo and skin infections",
    isNew: false,
    benefits: [
      "Treats bacterial skin infections",
      "Effective against impetigo",
      "Prevents infection spread",
      "Fast healing action",
    ],
    ingredients: ["Mupirocin calcium 2%", "Polyethylene glycol", "Preservatives"],
    usage:
      "Apply a small amount to the affected area 3 times daily for up to 10 days. Cover with a bandage if recommended by your doctor. Wash hands before and after application.",
    prescription: true,
  },
  {
    id: 8,
    slug: "fluconazole-tablets",
    name: "Fluconazole Tablets",
    category: "antifungals",
    price: 5500,
    image: medicineImages.antifungals[1],
    rating: 4.8,
    reviewCount: 189,
    stock: 35,
    description: "Oral antifungal for systemic fungal infections",
    isNew: false,
    benefits: [
      "Treats systemic fungal infections",
      "Effective against yeast infections",
      "Once-daily dosing",
      "Well-tolerated",
    ],
    ingredients: ["Fluconazole 150mg", "Lactose", "Magnesium stearate", "Microcrystalline cellulose"],
    usage:
      "Take one tablet by mouth as directed by your doctor. Can be taken with or without food. Complete the full course even if symptoms improve.",
    prescription: true,
  },
  {
    id: 9,
    slug: "clobetasol-cream",
    name: "Clobetasol Cream",
    category: "steroids",
    price: 4200,
    image: medicineImages.steroids[1],
    rating: 4.5,
    reviewCount: 234,
    stock: 20,
    description: "High-potency steroid for severe inflammatory skin conditions",
    isNew: false,
    benefits: [
      "Treats severe skin inflammation",
      "Fast-acting relief",
      "Reduces itching and redness",
      "For resistant conditions",
    ],
    ingredients: ["Clobetasol propionate 0.05%", "Propylene glycol", "Cetyl alcohol", "White petrolatum"],
    usage:
      "Apply a thin layer to affected areas twice daily for up to 2 weeks. Do not use on face or groin unless directed. Gradually reduce frequency as condition improves.",
    prescription: true,
  },
  {
    id: 10,
    slug: "pimecrolimus-cream",
    name: "Pimecrolimus Cream",
    category: "immunosuppressants",
    price: 7800,
    image: medicineImages.immunosuppressants[1],
    rating: 4.4,
    reviewCount: 76,
    stock: 30,
    description: "Non-steroidal treatment for atopic dermatitis",
    isNew: false,
    benefits: [
      "Treats mild to moderate eczema",
      "Safe for facial use",
      "No skin thinning effects",
      "Long-term treatment option",
    ],
    ingredients: ["Pimecrolimus 1%", "Benzyl alcohol", "Stearyl alcohol", "Oleyl alcohol"],
    usage:
      "Apply a thin layer to affected areas twice daily. Rub in gently until absorbed. Can be used on all body areas including face and neck. Avoid sun exposure.",
    prescription: true,
  },
  {
    id: 11,
    slug: "benzoyl-peroxide-wash",
    name: "Benzoyl Peroxide Wash",
    category: "antibiotics",
    price: 1500,
    image: medicineImages.antibiotics[2],
    rating: 4.3,
    reviewCount: 92,
    stock: 80,
    description: "Antibacterial cleanser for acne-prone skin",
    isNew: false,
    benefits: ["Kills acne-causing bacteria", "Unclogs pores", "Reduces oil production", "Prevents new breakouts"],
    ingredients: ["Benzoyl peroxide 5%", "Surfactants", "Water", "Glycerin"],
    usage:
      "Wet skin and apply to affected areas. Massage gently for 1-2 minutes, then rinse thoroughly. Use once daily initially, increase to twice daily as tolerated.",
    prescription: false,
  },
  {
    id: 12,
    slug: "salicylic-acid-solution",
    name: "Salicylic Acid Solution",
    category: "retinoids",
    price: 1800,
    image: medicineImages.retinoids[2],
    rating: 4.5,
    reviewCount: 118,
    stock: 65,
    description: "Keratolytic agent for acne and wart treatment",
    isNew: false,
    benefits: ["Exfoliates dead skin cells", "Unclogs pores", "Treats acne and blackheads", "Smooths skin texture"],
    ingredients: ["Salicylic acid 2%", "Alcohol", "Water", "Propylene glycol"],
    usage:
      "Apply to affected areas once daily in the evening. Start with every other day if you have sensitive skin. Avoid contact with eyes and mucous membranes.",
    prescription: false,
  },
]

// Mock reviews data
const reviews = [
  {
    id: 1,
    productId: 1,
    author: "Jane Smith",
    rating: 5,
    title: "Works wonders for my acne",
    comment:
      "I've been using this gel for 3 months and my acne has significantly improved. No more painful cysts and my skin looks clearer than ever.",
    date: "2023-11-15",
    verified: true,
  },
  {
    id: 2,
    productId: 1,
    author: "Michael Johnson",
    rating: 4,
    title: "Good but takes time",
    comment:
      "It took about 4 weeks to see results, but my skin has definitely improved. The gel is easy to apply and doesn't irritate my sensitive skin.",
    date: "2023-10-22",
    verified: true,
  },
  {
    id: 3,
    productId: 2,
    author: "Sarah Williams",
    rating: 5,
    title: "Instant relief for my eczema",
    comment:
      "This cream provides almost immediate relief for my eczema flare-ups. The itching stops within minutes and the redness goes down within hours.",
    date: "2023-11-05",
    verified: true,
  },
  {
    id: 4,
    productId: 3,
    author: "David Chen",
    rating: 4,
    title: "Great for anti-aging",
    comment:
      "Been using this for 6 months. My fine lines have definitely reduced and my skin texture is much smoother. Just remember to use sunscreen!",
    date: "2023-10-18",
    verified: true,
  },
  {
    id: 5,
    productId: 4,
    author: "Lisa Rodriguez",
    rating: 5,
    title: "Best dandruff shampoo ever",
    comment:
      "This shampoo completely cleared my stubborn dandruff in just 2 weeks. My scalp feels so much healthier now.",
    date: "2023-11-01",
    verified: true,
  },
]

const ProductDetail = () => {
  const { slug } = useParams()
  const [quantity, setQuantity] = useState(1)
  const [isWishlist, setIsWishlist] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)

  const product = products.find((p) => p.slug === slug)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h1 className="text-xl font-bold text-gray-900 mb-2">Product Not Found</h1>
          <p className="text-gray-600 mb-4 text-sm">The product you're looking for doesn't exist.</p>
          <Link to="/shop">
            <Button>Return to Shop</Button>
          </Link>
        </div>
      </div>
    )
  }

  const productReviews = reviews.filter((review) => review.productId === product.id)

  // Get related images for the product category
  const categoryImages = medicineImages[product.category] || [product.image]
  const productImages = [product.image, ...categoryImages.filter((img) => img !== product.image)].slice(0, 4)

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  }

  const slideUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <div className="min-h-screen bg-background mt-12">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-muted-foreground mb-6">
          <Link to="/shop" className="hover:text-primary flex items-center">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Shop
          </Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-foreground">{product.name}</span>
        </div>

        {/* Product Overview */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Image Section */}
          <motion.div variants={slideUp} className="space-y-2">
            <div className="aspect-square relative rounded-lg overflow-hidden border border-gray-100">
              <img
                src={productImages[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.isNew && <Badge className="absolute top-4 left-4 bg-primary text-white">New Arrival</Badge>}
              {product.prescription && (
                <Badge className="absolute top-4 right-4 bg-red-500 text-white">Prescription Required</Badge>
              )}
            </div>

            {/* Image Thumbnails */}
            {productImages.length > 1 && (
              <div className="flex gap-2">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-md overflow-hidden border-2 transition-all ${
                      selectedImage === index ? "border-blue-600" : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Product Info */}
          <motion.div variants={slideUp} className="space-y-2">
            <div>
              <h1 className="text-3xl font-bold mb-3">{product.name}</h1>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-current" : ""}`} />
                  ))}
                  <span className="ml-2 text-foreground font-medium">{product.rating}</span>
                </div>
                <span className="text-muted-foreground">({product.reviewCount} reviews)</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <p className="text-2xl font-bold text-blue-600">KSh {product.price.toLocaleString()}</p>
                {product.originalPrice && (
                  <p className="text-lg text-muted-foreground line-through">
                    KSh {product.originalPrice.toLocaleString()}
                  </p>
                )}
                {product.originalPrice && (
                  <Badge variant="outline" className="bg-green-50 text-green-700">
                    Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                  </Badge>
                )}
              </div>
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${product.stock > 0 ? "bg-green-500" : "bg-red-500"}`} />
              <span className="text-sm font-medium">
                {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
              </span>
            </div>

            {/* Quantity and Actions */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center border rounded-md">
                  <button className="px-4 py-2 hover:bg-muted" onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
                    -
                  </button>
                  <span className="px-4 py-2 border-x">{quantity}</span>
                  <button
                    className="px-4 py-2 hover:bg-muted"
                    onClick={() => setQuantity((q) => Math.min(product.stock, q + 1))}
                  >
                    +
                  </button>
                </div>
                <Button size="lg" className="flex-1 bg-blue-600 hover:bg-blue-700" disabled={product.stock === 0}>
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" size="lg" className="flex-1" onClick={() => setIsWishlist(!isWishlist)}>
                  <Heart className={`w-4 h-4 mr-2 ${isWishlist ? "fill-red-500 text-red-500" : ""}`} />
                  Wishlist
                </Button>
                <Button variant="outline" size="lg" className="flex-1">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="font-medium">Genuine Product</p>
                  <p className="text-sm text-muted-foreground">100% authentic</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="font-medium">Free Shipping</p>
                  <p className="text-sm text-muted-foreground">Orders over KSh 5,000</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <RotateCcw className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="font-medium">Easy Returns</p>
                  <p className="text-sm text-muted-foreground">30-day returns</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="font-medium">Secure Checkout</p>
                  <p className="text-sm text-muted-foreground">Safe & encrypted</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Product Details Tabs */}
        <motion.div initial="hidden" animate="visible" variants={slideUp}>
          <Tabs defaultValue="details" className="space-y-6">
            <TabsList className="grid grid-cols-4 w-full max-w-2xl mx-auto">
              <TabsTrigger value="details">Product Details</TabsTrigger>
              <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
              <TabsTrigger value="usage">How to Use</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="details" className="space-y-4">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </TabsContent>

            <TabsContent value="ingredients">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Active Ingredients</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {product.ingredients.map((ingredient, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0" />
                      <span>{ingredient}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="usage">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">How to Use</h3>
                <p className="text-muted-foreground leading-relaxed">{product.usage}</p>
              </Card>
            </TabsContent>

            <TabsContent value="reviews">
              <div className="space-y-6">
                {productReviews.length > 0 ? (
                  productReviews.map((review) => (
                    <Card key={review.id} className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <span className="font-semibold">{review.author}</span>
                            {review.verified && (
                              <Badge variant="secondary" className="text-xs">
                                Verified Purchase
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center text-amber-500">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-4 h-4 ${i < review.rating ? "fill-current" : ""}`} />
                            ))}
                          </div>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {new Date(review.date).toLocaleDateString()}
                        </span>
                      </div>
                      <h4 className="font-semibold mb-2">{review.title}</h4>
                      <p className="text-muted-foreground">{review.comment}</p>
                    </Card>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">No reviews yet for this product.</p>
                    <p className="text-sm text-muted-foreground mt-2">Be the first to leave a review!</p>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  )
}

export default ProductDetail
