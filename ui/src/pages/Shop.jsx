import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star, Filter, X, Search, Heart, Eye, Package, Phone, Mail, Sparkles, Award, Shield, ChevronLeft, ChevronRight, Pill, Syringe, Bandage, TestTube2, Bone, Activity } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

const ShopPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [cartItems, setCartItems] = useState([]);
    const [showFilters, setShowFilters] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [priceRange, setPriceRange] = useState([0, 200]);
    const [sortBy, setSortBy] = useState('name');
    const [wishlist, setWishlist] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6;
    
    const categories = [
        { id: 'all', name: 'All Medicines', count: 12 },
        { id: 'antibiotics', name: 'Antibiotics', count: 3 },
        { id: 'antifungals', name: 'Antifungals', count: 2 },
        { id: 'retinoids', name: 'Retinoids', count: 3 },
        { id: 'steroids', name: 'Steroids', count: 2 },
        { id: 'immunosuppressants', name: 'Immunosuppressants', count: 2 }
    ];
    
    const products = [
        {
            id: 1,
            name: "Clindamycin Gel",
            category: "antibiotics",
            price: 25,
            originalPrice: 35,
            image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=400&fit=crop",
            rating: 4.8,
            reviews: 124,
            description: "Topical antibiotic for acne treatment, prevents bacterial growth",
            badge: "Best Seller",
            ingredients: ["Clindamycin phosphate", "Alcohol", "Water"],
            prescription: true
        },
        {
            id: 2,
            name: "Hydrocortisone Cream",
            category: "steroids",
            price: 18,
            image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop",
            rating: 4.7,
            reviews: 89,
            description: "Low-potency steroid cream for eczema and dermatitis relief",
            badge: "Derma Recommended",
            ingredients: ["Hydrocortisone acetate", "Petrolatum", "Mineral oil"],
            prescription: false
        },
        {
            id: 3,
            name: "Tretinoin Cream",
            category: "retinoids",
            price: 45,
            image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop",
            rating: 4.6,
            reviews: 156,
            description: "Topical retinoid for acne and anti-aging treatment",
            badge: "Prescription",
            ingredients: ["Tretinoin", "Emollients", "Preservatives"],
            prescription: true
        },
        {
            id: 4,
            name: "Ketoconazole Shampoo",
            category: "antifungals",
            price: 22,
            image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=400&fit=crop",
            rating: 4.5,
            reviews: 98,
            description: "Antifungal treatment for dandruff and seborrheic dermatitis",
            ingredients: ["Ketoconazole", "Sodium lauryl sulfate", "Fragrance"],
            prescription: false
        },
        {
            id: 5,
            name: "Tacrolimus Ointment",
            category: "immunosuppressants",
            price: 85,
            originalPrice: 95,
            image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop",
            rating: 4.9,
            reviews: 203,
            description: "Immunomodulator for atopic dermatitis treatment",
            badge: "Premium",
            ingredients: ["Tacrolimus", "Mineral oil", "Paraffin"],
            prescription: true
        },
        {
            id: 6,
            name: "Adapalene Gel",
            category: "retinoids",
            price: 38,
            image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop",
            rating: 4.7,
            reviews: 67,
            description: "Third-generation retinoid for acne treatment",
            ingredients: ["Adapalene", "Carbomer", "Edetate disodium"],
            prescription: false
        },
        {
            id: 7,
            name: "Mupirocin Ointment",
            category: "antibiotics",
            price: 32,
            image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=400&fit=crop",
            rating: 4.6,
            reviews: 145,
            description: "Topical antibiotic for impetigo and skin infections",
            badge: "Essential",
            ingredients: ["Mupirocin calcium", "Polyethylene glycol"],
            prescription: true
        },
        {
            id: 8,
            name: "Fluconazole Tablets",
            category: "antifungals",
            price: 55,
            image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop",
            rating: 4.8,
            reviews: 189,
            description: "Oral antifungal for systemic fungal infections",
            badge: "Prescription",
            ingredients: ["Fluconazole", "Lactose", "Magnesium stearate"],
            prescription: true
        },
        {
            id: 9,
            name: "Clobetasol Cream",
            category: "steroids",
            price: 42,
            image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop",
            rating: 4.5,
            reviews: 234,
            description: "High-potency steroid for severe inflammatory skin conditions",
            ingredients: ["Clobetasol propionate", "Propylene glycol", "Cetyl alcohol"],
            prescription: true
        },
        {
            id: 10,
            name: "Pimecrolimus Cream",
            category: "immunosuppressants",
            price: 78,
            image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=400&fit=crop",
            rating: 4.4,
            reviews: 76,
            description: "Non-steroidal treatment for atopic dermatitis",
            ingredients: ["Pimecrolimus", "Benzyl alcohol", "Stearyl alcohol"],
            prescription: true
        },
        {
            id: 11,
            name: "Benzoyl Peroxide Wash",
            category: "antibiotics",
            price: 15,
            image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop",
            rating: 4.3,
            reviews: 92,
            description: "Antibacterial cleanser for acne-prone skin",
            badge: "Over-the-counter",
            ingredients: ["Benzoyl peroxide", "Surfactants", "Water"],
            prescription: false
        },
        {
            id: 12,
            name: "Salicylic Acid Solution",
            category: "retinoids",
            price: 18,
            image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop",
            rating: 4.5,
            reviews: 118,
            description: "Keratolytic agent for acne and wart treatment",
            ingredients: ["Salicylic acid", "Alcohol", "Water"],
            prescription: false
        }
    ];

    // Filter products
    const filteredProducts = useMemo(() => {
        return products.filter(product => {
            const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
            const matchesSearch = searchQuery === '' ||
                product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.description.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchQuery]);

    // Pagination logic
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

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
            'Derma Recommended': 'bg-gradient-to-r from-blue-500 to-blue-700',
            'Prescription': 'bg-gradient-to-r from-red-500 to-pink-600',
            'Premium': 'bg-gradient-to-r from-purple-500 to-pink-500',
            'Essential': 'bg-gradient-to-r from-green-500 to-teal-500',
            'Over-the-counter': 'bg-gradient-to-r from-gray-500 to-gray-700'
        };
        return styles[badge] || 'bg-gradient-to-r from-gray-400 to-gray-500';
    };

    const getCategoryIcon = (category) => {
        const icons = {
            'antibiotics': <Pill className="w-5 h-5" />,
            'antifungals': <TestTube2 className="w-5 h-5" />,
            'retinoids': <Activity className="w-5 h-5" />,
            'steroids': <Syringe className="w-5 h-5" />,
            'immunosuppressants': <Shield className="w-5 h-5" />,
            'all': <Package className="w-5 h-5" />
        };
        return icons[category] || <Package className="w-5 h-5" />;
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                duration: 0.8
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const scaleIn = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative py-16 sm:py-20  overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop')] opacity-100 mix-blend-multiply">
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={containerVariants}
                            >
                                <motion.div variants={itemVariants}>
                                    <Badge variant="outline" className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
                                        Dermatology Pharmacy
                                    </Badge>
                                </motion.div>
                                
                                <motion.h1 
                                    variants={itemVariants}
                                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
                                >
                                    Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Skin Medicines</span>
                                </motion.h1>
                                
                                <motion.div 
                                    variants={itemVariants}
                                    className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mb-6" 
                                />
                                
                                <motion.p 
                                    variants={itemVariants}
                                    className="text-lg sm:text-xl text-white leading-relaxed mb-8"
                                >
                                    Clinically proven dermatological medications for all skin conditions, from acne to eczema and beyond.
                                </motion.p>

                                <motion.div
                                    variants={itemVariants}
                                    className="flex flex-col sm:flex-row gap-4"
                                >
                                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                                        <Phone className="w-4 h-4 mr-2" />
                                        Consult a Dermatologist
                                    </Button>
                                    <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 sm:px-8 py-3 rounded-xl font-semibold transition-all duration-300">
                                        Learn About Treatments
                                    </Button>
                                </motion.div>
                            </motion.div>
                        </div>
                        <div className="md:w-1/2 flex justify-center mt-10">
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                                className="relative"
                            >
                                <div className="relative">
                                    <motion.img
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.3 }}
                                        src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=600"
                                        alt="Skin medicines"
                                        className="rounded-xl shadow-2xl w-full h-auto max-h-[400px] object-cover"
                                    />
                                    
                                    {/* Floating elements */}
                                    <motion.div
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                        className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg border border-gray-100"
                                    >
                                        <Pill className="w-8 h-8 text-blue-600" />
                                    </motion.div>

                                    <motion.div
                                        animate={{ y: [0, 10, 0] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                        className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg border border-gray-100"
                                    >
                                        <Bandage className="w-8 h-8 text-blue-600" />
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Shop Section */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    {/* Header */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                        className="text-center mb-12"
                    >
                        <motion.div variants={itemVariants}>
                            <Badge variant="outline" className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
                                Our Pharmacy
                            </Badge>
                        </motion.div>
                        <motion.h2 
                            variants={itemVariants}
                            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
                        >
                            Dermatological <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Medications</span>
                        </motion.h2>
                        <motion.div 
                            variants={itemVariants}
                            className="mx-auto w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mb-6" 
                        />
                        <motion.p 
                            variants={itemVariants}
                            className="text-lg text-gray-600 max-w-3xl mx-auto"
                        >
                            Prescription and over-the-counter medications for all skin conditions
                        </motion.p>
                    </motion.div>

                    {/* Search and Filter Bar */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="flex flex-col md:flex-row gap-4 mb-8 items-center"
                    >
                        <div className="flex-1 relative w-full">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <Input
                                type="text"
                                placeholder="Search medicines..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                        <div className="flex gap-3 w-full md:w-auto">
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                                <option value="name">Sort by Name</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="rating">Highest Rated</option>
                            </select>
                            <Button
                                onClick={() => setShowFilters(!showFilters)}
                                className="md:hidden px-4 py-3 bg-blue-600 text-white rounded-lg flex items-center space-x-2"
                            >
                                <Filter className="w-5 h-5" />
                                <span>Filters</span>
                            </Button>
                        </div>
                    </motion.div>

                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Sidebar Filters - Mobile */}
                        {showFilters && (
                            <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setShowFilters(false)}>
                                <div className="absolute right-0 top-0 h-full w-4/5 bg-white shadow-xl p-6 overflow-y-auto" onClick={e => e.stopPropagation()}>
                                    <div className="flex justify-between items-center mb-6">
                                        <h3 className="text-xl font-bold text-gray-900">Filters</h3>
                                        <Button onClick={() => setShowFilters(false)} className="text-gray-500 hover:text-gray-700" variant="ghost">
                                            <X className="w-6 h-6" />
                                        </Button>
                                    </div>
                                    
                                    <div className="space-y-6">
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <h4 className="font-semibold text-gray-900 mb-3">Categories</h4>
                                            <div className="space-y-2">
                                                {categories.map((category) => (
                                                    <Button
                                                        key={category.id}
                                                        onClick={() => setSelectedCategory(category.id)}
                                                        variant={selectedCategory === category.id ? "default" : "ghost"}
                                                        className={`w-full flex items-center justify-between p-2 rounded-md transition-all ${
                                                            selectedCategory === category.id
                                                                ? 'bg-blue-600 text-white'
                                                                : 'hover:bg-gray-100 text-gray-700'
                                                        }`}
                                                    >
                                                        <div className="flex items-center space-x-2">
                                                            {getCategoryIcon(category.id)}
                                                            <span>{category.name}</span>
                                                        </div>
                                                        <Badge variant="secondary" className="ml-2">
                                                            {category.count}
                                                        </Badge>
                                                    </Button>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <h4 className="font-semibold text-gray-900 mb-3">Price Range</h4>
                                            <div className="space-y-4">
                                                <div className="flex items-center justify-between text-sm text-gray-600">
                                                    <span>${priceRange[0]}</span>
                                                    <span>${priceRange[1]}</span>
                                                </div>
                                                <input
                                                    type="range"
                                                    min="0"
                                                    max="200"
                                                    value={priceRange[1]}
                                                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                                />
                                            </div>
                                        </div>

                                        <Button 
                                            onClick={() => setShowFilters(false)}
                                            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                                        >
                                            Apply Filters
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Sidebar Filters - Desktop */}
                        <div className="hidden lg:block w-72 space-y-6">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={scaleIn}
                                className="bg-gray-50 border border-gray-200 rounded-xl p-6"
                            >
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                                <div className="space-y-3">
                                    {categories.map((category) => (
                                        <Button
                                            key={category.id}
                                            onClick={() => setSelectedCategory(category.id)}
                                            variant={selectedCategory === category.id ? "default" : "ghost"}
                                            className={`w-full flex items-center justify-between p-3 rounded-lg transition-all ${
                                                selectedCategory === category.id
                                                    ? 'bg-blue-600 text-white'
                                                    : 'hover:bg-gray-100 text-gray-700'
                                            }`}
                                        >
                                            <div className="flex items-center space-x-2">
                                                {getCategoryIcon(category.id)}
                                                <span className="font-medium">{category.name}</span>
                                            </div>
                                            <Badge variant="secondary" className="ml-2">
                                                {category.count}
                                            </Badge>
                                        </Button>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={scaleIn}
                                className="bg-gray-50 border border-gray-200 rounded-xl p-6"
                            >
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Price Range</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between text-sm text-gray-600">
                                        <span>${priceRange[0]}</span>
                                        <span>${priceRange[1]}</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="0"
                                        max="200"
                                        value={priceRange[1]}
                                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                    />
                                </div>
                            </motion.div>

                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={scaleIn}
                                className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-6"
                            >
                                <div className="flex items-center space-x-3 mb-3">
                                    <Shield className="w-6 h-6 text-blue-600" />
                                    <h3 className="text-lg font-semibold text-gray-900">Prescription Info</h3>
                                </div>
                                <p className="text-sm text-gray-600 mb-4">
                                    Some medications require a prescription. Please consult with our dermatologists before purchasing.
                                </p>
                                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white w-full">
                                    <Phone className="w-4 h-4 mr-2" />
                                    Contact Doctor
                                </Button>
                            </motion.div>
                        </div>

                        {/* Products Grid */}
                        <div className="flex-1">
                            {filteredProducts.length > 0 ? (
                                <>
                                    <motion.div
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        variants={containerVariants}
                                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6"
                                    >
                                        {currentProducts.map((product) => (
                                            <motion.div
                                                key={product.id}
                                                variants={itemVariants}
                                                whileHover={{ 
                                                    scale: 1.03,
                                                    transition: { duration: 0.3 }
                                                }}
                                                className="group relative bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
                                            >
                                                {/* Product Badge */}
                                                {product.badge && (
                                                    <div className={`absolute top-4 left-4 z-10 px-3 py-1 ${getBadgeStyle(product.badge)} text-white text-xs font-semibold rounded-full`}>
                                                        {product.badge}
                                                    </div>
                                                )}

                                                {/* Prescription Badge */}
                                                {product.prescription && (
                                                    <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-gradient-to-r from-red-500 to-pink-600 text-white text-xs font-semibold rounded-full">
                                                        Prescription
                                                    </div>
                                                )}

                                                {/* Wishlist Button */}
                                                <button
                                                    onClick={() => toggleWishlist(product.id)}
                                                    className="absolute top-16 right-4 z-10 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-all"
                                                >
                                                    <Heart className={`w-5 h-5 ${wishlist.includes(product.id) ? 'text-red-500 fill-current' : 'text-gray-400'}`} />
                                                </button>

                                                {/* Product Image */}
                                                <div className="relative overflow-hidden aspect-square bg-gray-50">
                                                    <img
                                                        src={product.image}
                                                        alt={product.name}
                                                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 p-4"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                    
                                                    {/* Quick View Button */}
                                                    <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                        <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 transform scale-75 group-hover:scale-100 transition-transform shadow-md">
                                                            <Eye className="w-5 h-5 text-blue-600" />
                                                        </div>
                                                    </button>
                                                </div>

                                                {/* Product Info */}
                                                <div className="p-5">
                                                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                                        {product.name}
                                                    </h3>
                                                    <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                                                        {product.description}
                                                    </p>

                                                    {/* Rating */}
                                                    <div className="flex items-center space-x-2 mb-3">
                                                        <div className="flex items-center space-x-1">
                                                            {[...Array(5)].map((_, i) => (
                                                                <Star 
                                                                    key={i} 
                                                                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
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
                                                            {product.ingredients.slice(0, 3).map((ingredient, i) => (
                                                                <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                                                    {ingredient}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {/* Price */}
                                                    <div className="flex items-center justify-between mb-4">
                                                        <div className="flex items-center space-x-2">
                                                            <span className="text-xl font-bold text-blue-600">${product.price}</span>
                                                            {product.originalPrice && (
                                                                <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
                                                            )}
                                                        </div>
                                                        {product.originalPrice && (
                                                            <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                                                                Save ${product.originalPrice - product.price}
                                                            </span>
                                                        )}
                                                    </div>

                                                    {/* Add to Cart Button */}
                                                    <Button 
                                                        onClick={() => addToCart(product)}
                                                        className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center space-x-2"
                                                    >
                                                        <ShoppingCart className="w-5 h-5" />
                                                        <span>Add to Cart</span>
                                                    </Button>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </motion.div>

                                    {/* Pagination */}
                                    {totalPages > 1 && (
                                        <motion.div
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            variants={fadeInUp}
                                            className="flex justify-center mt-10"
                                        >
                                            <div className="flex items-center space-x-2">
                                                <Button
                                                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                                    disabled={currentPage === 1}
                                                    variant="outline"
                                                    className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                                >
                                                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                                                </Button>
                                                
                                                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                                                    <Button
                                                        key={page}
                                                        onClick={() => setCurrentPage(page)}
                                                        variant={currentPage === page ? "default" : "ghost"}
                                                        className={`w-10 h-10 rounded-lg ${currentPage === page ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                                                    >
                                                        {page}
                                                    </Button>
                                                ))}
                                                
                                                <Button
                                                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                                    disabled={currentPage === totalPages}
                                                    variant="outline"
                                                    className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                                >
                                                    <ChevronRight className="w-5 h-5 text-gray-600" />
                                                </Button>
                                            </div>
                                        </motion.div>
                                    )}
                                </>
                            ) : (
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeInUp}
                                    className="text-center py-16"
                                >
                                    <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                                    <h3 className="text-xl font-semibold text-gray-700 mb-2">No medicines found</h3>
                                    <p className="text-gray-500">Try adjusting your filters or search terms</p>
                                    <Button 
                                        onClick={() => {
                                            setSelectedCategory('all');
                                            setSearchQuery('');
                                            setPriceRange([0, 200]);
                                        }}
                                        variant="ghost"
                                        className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
                                    >
                                        Reset all filters
                                    </Button>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Consultation CTA */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="py-16 bg-blue-600"
            >
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                            Need a Prescription?
                        </h2>
                        <div className="w-20 h-1 bg-white mx-auto mb-6" />
                        <p className="text-lg sm:text-xl text-blue-100 mb-8">
                            Some of our medications require a prescription. Book a consultation with our dermatologists to get the right treatment for your condition.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button className="bg-white text-blue-600 hover:bg-blue-50 px-6 sm:px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                                <Phone className="w-5 h-5 mr-2" />
                                Book Consultation
                            </Button>
                            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-6 sm:px-8 py-3 rounded-xl font-semibold transition-all duration-300 w-full sm:w-auto">
                                <Mail className="w-4 h-4 mr-2" />
                                Send Message
                            </Button>
                        </div>
                    </div>
                </div>
            </motion.section>
        </div>
    );
};

export default ShopPage;