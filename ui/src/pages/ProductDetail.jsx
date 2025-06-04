import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products, reviews } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
    AlertCircle
} from 'lucide-react';

const ProductDetail = () => {
    const { slug } = useParams();
    const [quantity, setQuantity] = useState(1);
    const [isWishlist, setIsWishlist] = useState(false);
    const product = products.find(p => p.slug === slug);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Product Not Found</h1>
                    <p className="text-gray-600 mb-4">The product you're looking for doesn't exist.</p>
                    <Link to="/shop">
                        <Button>Return to Shop</Button>
                    </Link>
                </div>
            </div>
        );
    }

    const productReviews = reviews.filter(review => review.productId === product.id);

    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-12">
                {/* Breadcrumb */}
                <div className="flex items-center text-sm text-muted-foreground mb-8">
                    <Link to="/shop" className="hover:text-primary">Shop</Link>
                    <ChevronRight className="w-4 h-4 mx-2" />
                    <span className="text-foreground">{product.name}</span>
                </div>

                {/* Product Overview */}
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    {/* Image Section */}
                    <div className="space-y-4">
                        <div className="aspect-square relative rounded-lg overflow-hidden">
                            <img 
                                src={product.image} 
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                            {product.isNew && (
                                <Badge className="absolute top-4 left-4 bg-primary text-white">
                                    New Arrival
                                </Badge>
                            )}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                            <div className="flex items-center gap-4 text-sm">
                                <div className="flex items-center text-amber-500">
                                    {[...Array(5)].map((_, i) => (
                                        <Star 
                                            key={i}
                                            className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`}
                                        />
                                    ))}
                                    <span className="ml-2 text-foreground">{product.rating}</span>
                                </div>
                                <span className="text-muted-foreground">
                                    {product.reviewCount} reviews
                                </span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <p className="text-xl font-bold">${product.price}</p>
                            <p className="text-muted-foreground">{product.description}</p>
                        </div>

                        {/* Stock Status */}
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                            <span className="text-sm">
                                {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                            </span>
                        </div>

                        {/* Quantity and Actions */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center border rounded-lg">
                                    <button 
                                        className="px-4 py-2 hover:bg-muted"
                                        onClick={() => setQuantity(q => Math.max(1, q - 1))}
                                    >
                                        -
                                    </button>
                                    <span className="px-4 py-2 border-x">{quantity}</span>
                                    <button 
                                        className="px-4 py-2 hover:bg-muted"
                                        onClick={() => setQuantity(q => Math.min(product.stock, q + 1))}
                                    >
                                        +
                                    </button>
                                </div>
                                <Button 
                                    size="lg" 
                                    className="flex-1"
                                    disabled={product.stock === 0}
                                >
                                    <ShoppingCart className="w-4 h-4 mr-2" />
                                    Add to Cart
                                </Button>
                            </div>
                            <div className="flex gap-4">
                                <Button 
                                    variant="outline" 
                                    className="flex-1"
                                    onClick={() => setIsWishlist(!isWishlist)}
                                >
                                    <Heart className={`w-4 h-4 mr-2 ${isWishlist ? 'fill-red-500 text-red-500' : ''}`} />
                                    Wishlist
                                </Button>
                                <Button variant="outline" className="flex-1">
                                    <Share2 className="w-4 h-4 mr-2" />
                                    Share
                                </Button>
                            </div>
                        </div>

                        {/* Features */}
                        <div className="grid grid-cols-2 gap-4 pt-6 border-t">
                            <div className="flex items-center gap-3">
                                <Shield className="w-5 h-5 text-primary" />
                                <div className="text-sm">
                                    <p className="font-medium">Genuine Product</p>
                                    <p className="text-muted-foreground">100% authentic</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Truck className="w-5 h-5 text-primary" />
                                <div className="text-sm">
                                    <p className="font-medium">Free Shipping</p>
                                    <p className="text-muted-foreground">Orders over $50</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <RotateCcw className="w-5 h-5 text-primary" />
                                <div className="text-sm">
                                    <p className="font-medium">Easy Returns</p>
                                    <p className="text-muted-foreground">30-day returns</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-primary" />
                                <div className="text-sm">
                                    <p className="font-medium">Secure Checkout</p>
                                    <p className="text-muted-foreground">Safe & encrypted</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product Details Tabs */}
                <Tabs defaultValue="details" className="space-y-8">
                    <TabsList>
                        <TabsTrigger value="details">Product Details</TabsTrigger>
                        <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
                        <TabsTrigger value="usage">How to Use</TabsTrigger>
                        <TabsTrigger value="reviews">Reviews</TabsTrigger>
                    </TabsList>

                    <TabsContent value="details" className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-8">
                            <Card className="p-6">
                                <h3 className="text-lg font-semibold mb-4">Key Benefits</h3>
                                <ul className="space-y-3">
                                    {product.benefits.map((benefit, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-green-500 mt-0.5" />
                                            <span>{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        </div>
                    </TabsContent>

                    <TabsContent value="ingredients">
                        <Card className="p-6">
                            <h3 className="text-lg font-semibold mb-4">Ingredients</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                {product.ingredients.map((ingredient, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-primary" />
                                        <span>{ingredient}</span>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </TabsContent>

                    <TabsContent value="usage">
                        <Card className="p-6">
                            <h3 className="text-lg font-semibold mb-4">How to Use</h3>
                            <p className="text-muted-foreground">{product.usage}</p>
                        </Card>
                    </TabsContent>

                    <TabsContent value="reviews">
                        <div className="space-y-6">
                            {productReviews.map((review) => (
                                <Card key={review.id} className="p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="font-semibold">{review.author}</span>
                                                {review.verified && (
                                                    <Badge variant="secondary">Verified Purchase</Badge>
                                                )}
                                            </div>
                                            <div className="flex items-center text-amber-500">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star 
                                                        key={i}
                                                        className={`w-4 h-4 ${i < review.rating ? 'fill-current' : ''}`}
                                                    />
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
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
};

export default ProductDetail; 