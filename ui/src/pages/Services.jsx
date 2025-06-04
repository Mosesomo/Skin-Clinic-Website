import React, { useMemo, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { services, serviceCategories } from '@/data/services';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Filter, Search, Sparkles, X, ArrowRight, Calendar, Phone } from 'lucide-react';

// SearchInput Component
const SearchInput = React.memo(({ value, onChange }) => (
    <div className="relative">
        <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"/>
            <input
                type="text"
                placeholder="Search services..."
                value={value}
                onChange={onChange}
                className="w-full pl-10 pr-4 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
        </div>
    </div>
));

// Filter Panel Component
const FilterPanel = React.memo(({className, searchQuery, onSearchChange, selectedCategory, onCategoryChange}) => (
    <div className={cn("space-y-6", className)}>
        {/* Search */}
        <SearchInput value={searchQuery} onChange={onSearchChange} />

        {/* Categories */}
        <div>
            <h3 className="font-semibold mb-3">Categories</h3>
            <div className="space-y-2">
                <Button
                    variant={selectedCategory === 'all' ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => onCategoryChange('all')}
                >
                    All Services
                </Button>
                {serviceCategories.map(category => (
                    <Button
                        key={category.id}
                        variant={selectedCategory === category.id ? "default" : "ghost"}
                        className="w-full justify-start"
                        onClick={() => onCategoryChange(category.id)}
                    >
                        {category.title}
                    </Button>
                ))}
            </div>
        </div>
    </div>
));

// Service Card Component
const ServiceCard = React.memo(({ service, variant = "default" }) => (
    <Card className="group relative overflow-hidden hover:shadow-lg transition-all duration-300">
        <div className="aspect-video relative overflow-hidden">
            <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            
            {/* Category Badge */}
            <div className="absolute top-4 left-4">
                <Badge className="bg-primary/10 text-white backdrop-blur-sm">
                    {service.category}
                </Badge>
            </div>

            {/* Icon */}
            <div className="absolute bottom-4 right-4">
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <service.Icon className="w-5 h-5 text-white" />
                </div>
            </div>
        </div>

        <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {service.title}
            </h3>
            <p className="text-muted-foreground mb-4">
                {service.description}
            </p>

            <div className="space-y-4">
                {/* Features */}
                <div className="grid grid-cols-2 gap-2">
                    {service.features.slice(0, 4).map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-muted-foreground">
                            <Sparkles className="w-4 h-4 mr-2 text-primary" />
                            {feature}
                        </div>
                    ))}
                </div>

                {/* Action Button */}
                <Link to={`/services/${service.slug}`} className="block">
                    <Button className="w-full group-hover:bg-primary">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                </Link>
            </div>
        </div>
    </Card>
));

const ServicesPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const servicesPerPage = 6;

    const handleSearchChange = useCallback((e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1);
    }, []);

    const handleCategoryChange = useCallback((category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
    }, []);

    // Filter and search services
    const filteredServices = useMemo(() => {
        return services.filter(service => {
            const matchesCategory = selectedCategory === 'all' || 
                serviceCategories.find(cat => cat.id === selectedCategory)?.services.includes(service.id);
            const matchesSearch = searchQuery === '' ||
                service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                service.description.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchQuery]);

    const totalPages = Math.ceil(filteredServices.length / servicesPerPage);

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative h-[70vh] min-h-[600px] w-screen mb-16 overflow-hidden">
                <div className="absolute inset-0">
                    <img 
                        src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80"
                        alt="Services Hero"
                        className="w-full h-full object-cover"
                        loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/40" />
                </div>

                <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="mb-6"
                        >
                            <Badge className="bg-primary/10 text-white backdrop-blur-sm">
                                Our Services
                            </Badge>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
                        >
                            Expert Dermatological Care
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-xl md:text-2xl text-white/90 mb-8"
                        >
                            Comprehensive skin care solutions tailored to your unique needs
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="flex flex-wrap gap-4 justify-center"
                        >
                            <Button size="lg" className="bg-primary hover:bg-primary/90">
                                <Calendar className="mr-2 h-5 w-5" />
                                Book Appointment
                            </Button>
                            <Button size="lg" variant="outline" className="bg-white/10 text-white hover:bg-white/20">
                                <Phone className="mr-2 h-5 w-5" />
                                Contact Us
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mobile Filter Button */}
            <div className="lg:hidden fixed bottom-6 left-6 z-50">
                <Button
                    size="lg"
                    className="rounded-full bg-primary border-2 border-accent shadow-lg h-14 w-14 p-0"
                    onClick={() => setIsFilterOpen(true)}
                >
                    <Filter className="h-6 w-6" />
                </Button>
            </div>

            {/* Mobile Filter Panel */}
            <AnimatePresence>
                {isFilterOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '-100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '-100%' }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-y-0 left-0 w-full max-w-sm bg-background border-r shadow-xl z-50 lg:hidden"
                    >
                        <div className="h-full flex flex-col">
                            <div className="p-4 border-b flex items-center justify-between">
                                <h2 className="text-lg font-semibold">Filters</h2>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => setIsFilterOpen(false)}
                                >
                                    <X className="h-5 w-5" />
                                </Button>
                            </div>
                            <div className="flex-1 overflow-y-auto p-4">
                                <FilterPanel
                                    searchQuery={searchQuery}
                                    onSearchChange={handleSearchChange}
                                    selectedCategory={selectedCategory}
                                    onCategoryChange={handleCategoryChange}
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
                            />
                        </div>
                    </aside>

                    {/* Services Grid */}
                    <div className="space-y-8">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-semibold">
                                {selectedCategory === 'all' 
                                    ? 'All Services' 
                                    : serviceCategories.find(c => c.id === selectedCategory)?.title}
                            </h2>
                            <Button
                                variant="outline"
                                size="sm"
                                className="lg:hidden"
                                onClick={() => setIsFilterOpen(true)}
                            >
                                <Filter className="h-4 w-4 mr-2" />
                                Filters
                            </Button>
                        </div>

                        {filteredServices.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {filteredServices
                                    .slice((currentPage - 1) * servicesPerPage, currentPage * servicesPerPage)
                                    .map((service, index) => (
                                        <motion.div
                                            key={service.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                        >
                                            <ServiceCard service={service} />
                                        </motion.div>
                                    ))}
                            </div>
                        ) : (
                            <div className="text-center py-12">
                                <p className="text-lg text-muted-foreground">
                                    No services found matching your criteria. Try adjusting your filters.
                                </p>
                            </div>
                        )}

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="flex justify-center gap-2 mt-8">
                                <Button
                                    variant="outline"
                                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                    disabled={currentPage === 1}
                                >
                                    Previous
                                </Button>
                                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                                    <Button
                                        key={page}
                                        variant={currentPage === page ? "default" : "outline"}
                                        onClick={() => setCurrentPage(page)}
                                    >
                                        {page}
                                    </Button>
                                ))}
                                <Button
                                    variant="outline"
                                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                                    disabled={currentPage === totalPages}
                                >
                                    Next
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesPage; 