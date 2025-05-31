import { useState } from 'react';
import { ShoppingCart, Star, Filter, X, Search, Heart, Eye, Package, Sparkles, Award, Shield } from 'lucide-react';

const ShopPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [cartItems, setCartItems] = useState([]);
    const [showFilters, setShowFilters] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [priceRange, setPriceRange] = useState([0, 200]);
    const [sortBy, setSortBy] = useState('name');
    const [wishlist, setWishlist] = useState([]);
    
    const categories = [
        { id: 'all', name: 'All Products', count: 12 },
        { id: 'cleansers', name: 'Cleansers', count: 3 },
        { id: 'moisturizers', name: 'Moisturizers', count: 2 },
        { id: 'serums', name: 'Serums', count: 3 },
        { id: 'treatments', name: 'Treatments', count: 2 },
        { id: 'sunscreen', name: 'Sunscreen', count: 2 }
    ];
    
    const products = [
        {
            id: 1,
            name: "Gentle Cleansing Foam",
            category: "cleansers",
            price: 45,
            originalPrice: 55,
            image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop",
            rating: 4.8,
            reviews: 124,
            description: "Deep cleansing foam for sensitive skin with ceramides",
            badge: "Best Seller",
            ingredients: ["Ceramides", "Niacinamide", "Hyaluronic Acid"]
        },
        {
            id: 2,
            name: "Hydrating Moisturizer",
            category: "moisturizers",
            price: 65,
            image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop",
            rating: 4.9,
            reviews: 89,
            description: "24-hour hydration for all skin types",
            badge: "Derma Recommended",
            ingredients: ["Hyaluronic Acid", "Glycerin", "Peptides"]
        },
        {
            id: 3,
            name: "Vitamin C Serum",
            category: "serums",
            price: 85,
            image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop",
            rating: 4.7,
            reviews: 156,
            description: "Brightening serum with 20% pure vitamin C",
            badge: "New",
            ingredients: ["Vitamin C", "Vitamin E", "Ferulic Acid"]
        },
        {
            id: 4,
            name: "Acne Treatment Gel",
            category: "treatments",
            price: 55,
            image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&h=400&fit=crop",
            rating: 4.6,
            reviews: 98,
            description: "Targeted treatment for acne-prone skin",
            ingredients: ["Salicylic Acid", "Benzoyl Peroxide", "Tea Tree Oil"]
        },
        {
            id: 5,
            name: "Anti-Aging Cream",
            category: "treatments",
            price: 120,
            originalPrice: 150,
            image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop",
            rating: 4.9,
            reviews: 203,
            description: "Advanced anti-aging formula with retinol",
            badge: "Premium",
            ingredients: ["Retinol", "Peptides", "Collagen"]
        },
        {
            id: 6,
            name: "Retinol Night Serum",
            category: "serums",
            price: 95,
            image: "https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=400&h=400&fit=crop",
            rating: 4.8,
            reviews: 67,
            description: "Night serum with 0.5% retinol for skin renewal",
            ingredients: ["Retinol", "Squalane", "Vitamin E"]
        },
        {
            id: 7,
            name: "Micellar Cleansing Water",
            category: "cleansers",
            price: 32,
            image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop",
            rating: 4.5,
            reviews: 145,
            description: "Gentle makeup remover for all skin types",
            badge: "Gentle Formula",
            ingredients: ["Micelles", "Rose Water", "Cucumber Extract"]
        },
        {
            id: 8,
            name: "Niacinamide Serum",
            category: "serums",
            price: 42,
            image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop",
            rating: 4.7,
            reviews: 189,
            description: "10% Niacinamide for pore refinement",
            badge: "Trending",
            ingredients: ["Niacinamide", "Zinc", "Hyaluronic Acid"]
        },
        {
            id: 9,
            name: "SPF 50+ Sunscreen",
            category: "sunscreen",
            price: 38,
            image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop",
            rating: 4.6,
            reviews: 234,
            description: "Broad spectrum protection with zinc oxide",
            badge: "Essential",
            ingredients: ["Zinc Oxide", "Titanium Dioxide", "Vitamin E"]
        },
        {
            id: 10,
            name: "Tinted Moisturizer SPF 30",
            category: "sunscreen",
            price: 52,
            image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop",
            rating: 4.4,
            reviews: 76,
            description: "Light coverage with sun protection",
            ingredients: ["SPF 30", "Iron Oxides", "Hyaluronic Acid"]
        },
        {
            id: 11,
            name: "Rich Night Moisturizer",
            category: "moisturizers",
            price: 78,
            image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop",
            rating: 4.8,
            reviews: 92,
            description: "Intensive overnight hydration cream",
            badge: "Night Care",
            ingredients: ["Ceramides", "Shea Butter", "Peptides"]
        },
        {
            id: 12,
            name: "Exfoliating Cleanser",
            category: "cleansers",
            price: 48,
            image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop",
            rating: 4.5,
            reviews: 118,
            description: "Gentle exfoliation with glycolic acid",
            ingredients: ["Glycolic Acid", "Jojoba Beads", "Aloe Vera"]
        }
    ];

    const filteredProducts = products.filter(product => {
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
        return matchesCategory && matchesSearch && matchesPrice;
    }).sort((a, b) => {
        switch (sortBy) {
            case 'price-low': return a.price - b.price;
            case 'price-high': return b.price - a.price;
            case 'rating': return b.rating - a.rating;
            default: return a.name.localeCompare(b.name);
        }
    });

    const addToCart = (product) => {
        const existingItem = cartItems.find(item => item.id === product.id);
        if (existingItem) {
            setCartItems(cartItems.map(item => 
                item.id === product.id 
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ));
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };

    const toggleWishlist = (productId) => {
        setWishlist(prev => 
            prev.includes(productId) 
                ? prev.filter(id => id !== productId)
                : [...prev, productId]
        );
    };

    const getBadgeStyle = (badge) => {
        const styles = {
            'Best Seller': 'bg-gradient-to-r from-yellow-400 to-orange-500',
            'New': 'bg-gradient-to-r from-green-400 to-emerald-500',
            'Premium': 'bg-gradient-to-r from-purple-400 to-pink-500',
            'Trending': 'bg-gradient-to-r from-blue-400 to-cyan-500',
            'Essential': 'bg-gradient-to-r from-red-400 to-pink-500',
            'Derma Recommended': 'bg-gradient-to-r from-indigo-400 to-purple-500',
            'Gentle Formula': 'bg-gradient-to-r from-teal-400 to-green-500',
            'Night Care': 'bg-gradient-to-r from-slate-400 to-gray-500'
        };
        return styles[badge] || 'bg-gradient-to-r from-gray-400 to-gray-500';
    };

    return (
        <section className="relative py-20 bg-gradient-to-br from-background via-muted/20 to-card overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(99,102,241,0.1),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(168,85,247,0.1),transparent_50%)]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full mb-4">
                        <Package className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-4xl font-bold text-foreground mb-4">
                        Skincare
                        <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent ml-2">
                            Shop
                        </span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Premium dermatologist-recommended skincare products for every skin concern
                    </p>
                </div>

                {/* Search and Filter Bar */}
                <div className="flex flex-col lg:flex-row gap-4 mb-8">
                    <div className="flex-1 relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all"
                        />
                    </div>
                    <div className="flex gap-3">
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="px-4 py-3 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20"
                        >
                            <option value="name">Sort by Name</option>
                            <option value="price-low">Price: Low to High</option>
                            <option value="price-high">Price: High to Low</option>
                            <option value="rating">Highest Rated</option>
                        </select>
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className="lg:hidden px-4 py-3 bg-primary text-primary-foreground rounded-xl flex items-center space-x-2"
                        >
                            <Filter className="w-4 h-4" />
                            <span>Filters</span>
                        </button>
                    </div>
                </div>

                <div className="flex gap-8">
                    {/* Sidebar Filters */}
                    <div className={`${showFilters ? 'block' : 'hidden'} lg:block w-full lg:w-80 space-y-6`}>
                        <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-semibold text-foreground">Categories</h3>
                                <button 
                                    onClick={() => setShowFilters(false)}
                                    className="lg:hidden text-muted-foreground hover:text-foreground"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                            <div className="space-y-3">
                                {categories.map((category) => (
                                    <button
                                        key={category.id}
                                        onClick={() => setSelectedCategory(category.id)}
                                        className={`w-full flex items-center justify-between p-3 rounded-xl transition-all ${
                                            selectedCategory === category.id
                                                ? 'bg-gradient-to-r from-primary/20 to-secondary/20 text-primary border border-primary/30'
                                                : 'hover:bg-muted/50 text-muted-foreground hover:text-foreground'
                                        }`}
                                    >
                                        <span className="font-medium">{category.name}</span>
                                        <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">
                                            {category.count}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Price Range */}
                        <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
                            <h3 className="text-lg font-semibold text-foreground mb-4">Price Range</h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between text-sm text-muted-foreground">
                                    <span>${priceRange[0]}</span>
                                    <span>${priceRange[1]}</span>
                                </div>
                                <div className="bg-muted/30 h-2 rounded-full relative">
                                    <div 
                                        className="bg-gradient-to-r from-primary to-secondary h-full rounded-full"
                                        style={{ width: `${(priceRange[1] / 200) * 100}%` }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Featured Badge */}
                        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-6">
                            <div className="flex items-center space-x-3 mb-3">
                                <Award className="w-6 h-6 text-primary" />
                                <h3 className="text-lg font-semibold text-foreground">Expert Choice</h3>
                            </div>
                            <p className="text-sm text-muted-foreground mb-4">
                                All products are dermatologist-tested and recommended by our clinical team.
                            </p>
                            <div className="flex items-center space-x-2 text-xs text-primary">
                                <Shield className="w-4 h-4" />
                                <span>Clinically Proven</span>
                            </div>
                        </div>
                    </div>

                    {/* Products Grid */}
                    <div className="flex-1">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredProducts.map((product, index) => (
                                <div
                                    key={product.id}
                                    className="group relative bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    {/* Product Badge */}
                                    {product.badge && (
                                        <div className={`absolute top-4 left-4 z-10 px-3 py-1 ${getBadgeStyle(product.badge)} text-white text-xs font-semibold rounded-full`}>
                                            {product.badge}
                                        </div>
                                    )}

                                    {/* Wishlist Button */}
                                    <button
                                        onClick={() => toggleWishlist(product.id)}
                                        className="absolute top-4 right-4 z-10 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all group-hover:scale-110"
                                    >
                                        <Heart className={`w-4 h-4 ${wishlist.includes(product.id) ? 'text-red-500 fill-current' : 'text-muted-foreground'}`} />
                                    </button>

                                    {/* Product Image */}
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        
                                        {/* Quick View Button */}
                                        <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 transform scale-75 group-hover:scale-100 transition-transform">
                                                <Eye className="w-5 h-5 text-primary" />
                                            </div>
                                        </button>
                                    </div>

                                    {/* Product Info */}
                                    <div className="p-6">
                                        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                                            {product.name}
                                        </h3>
                                        <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                                            {product.description}
                                        </p>

                                        {/* Rating */}
                                        <div className="flex items-center space-x-2 mb-3">
                                            <div className="flex items-center space-x-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star 
                                                        key={i} 
                                                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-muted-foreground/30'}`} 
                                                    />
                                                ))}
                                            </div>
                                            <span className="text-sm text-muted-foreground">
                                                {product.rating} ({product.reviews})
                                            </span>
                                        </div>

                                        {/* Key Ingredients */}
                                        <div className="mb-4">
                                            <p className="text-xs text-muted-foreground mb-2">Key Ingredients:</p>
                                            <div className="flex flex-wrap gap-1">
                                                {product.ingredients.slice(0, 3).map((ingredient, i) => (
                                                    <span key={i} className="text-xs bg-muted/50 text-muted-foreground px-2 py-1 rounded-full">
                                                        {ingredient}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Price */}
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center space-x-2">
                                                <span className="text-2xl font-bold text-primary">${product.price}</span>
                                                {product.originalPrice && (
                                                    <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                                                )}
                                            </div>
                                            {product.originalPrice && (
                                                <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                                                    Save ${product.originalPrice - product.price}
                                                </span>
                                            )}
                                        </div>

                                        {/* Add to Cart Button */}
                                        <button 
                                            onClick={() => addToCart(product)}
                                            className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 group-hover:scale-105"
                                        >
                                            <ShoppingCart className="w-4 h-4" />
                                            <span>Add to Cart</span>
                                        </button>
                                    </div>

                                    {/* Hover Effect Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
                                </div>
                            ))}
                        </div>

                        {filteredProducts.length === 0 && (
                            <div className="text-center py-12">
                                <Package className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-foreground mb-2">No products found</h3>
                                <p className="text-muted-foreground">Try adjusting your filters or search terms</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Floating Cart */}
            {cartItems.length > 0 && (
                <div className="fixed bottom-6 right-6 z-50">
                    <div className="bg-gradient-to-r from-primary to-secondary text-white p-4 rounded-2xl shadow-2xl backdrop-blur-sm">
                        <div className="flex items-center space-x-3">
                            <div className="relative">
                                <ShoppingCart className="w-6 h-6" />
                                <span className="absolute -top-2 -right-2 bg-white text-primary text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                                    {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                                </span>
                            </div>
                            <div>
                                <p className="font-semibold">Cart Total</p>
                                <p className="text-sm opacity-90">
                                    ${cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}
                                </p>
                            </div>
                            <Sparkles className="w-5 h-5 animate-pulse" />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ShopPage;