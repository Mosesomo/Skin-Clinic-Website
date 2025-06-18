import { useState, useEffect } from 'react';
import { Star, Quote, Sparkles, Heart, ThumbsUp, ChevronLeft, ChevronRight } from 'lucide-react';

const FeedBack = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const [reviews, setReviews] = useState([
      {
        id: 1,
        name: "Sarah M.",
        rating: 5,
        comment: "Excellent service and professional staff. My skin has never looked better! The treatment was thorough and the results are amazing.",
        service: "Acne Treatment",
        color: "from-blue-400 to-cyan-500",
        bgPattern: "bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.15),transparent_50%)]"
      },
      {
        id: 2,
        name: "John D.",
        rating: 5,
        comment: "The anti-aging treatment exceeded my expectations. The staff was incredibly knowledgeable and made me feel comfortable throughout.",
        service: "Anti-Aging Treatment",
        color: "from-purple-400 to-pink-500",
        bgPattern: "bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.15),transparent_50%)]"
      },
      {
        id: 3,
        name: "Maria L.",
        rating: 4,
        comment: "Great products and knowledgeable team. The consultation was detailed and I learned so much about skincare. Will definitely return!",
        service: "Product Purchase",
        color: "from-emerald-400 to-teal-500",
        bgPattern: "bg-[radial-gradient(circle_at_50%_80%,rgba(16,185,129,0.15),transparent_50%)]"
      },
      {
        id: 4,
        name: "David K.",
        rating: 5,
        comment: "Outstanding results from my laser treatment. The technology is cutting-edge and the care is personalized. Highly recommended!",
        service: "Laser Treatment",
        color: "from-orange-400 to-red-500",
        bgPattern: "bg-[radial-gradient(circle_at_30%_70%,rgba(251,146,60,0.15),transparent_50%)]"
      }
    ]);

    const totalReviews = reviews.length;
    const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / totalReviews;

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return;
        
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % reviews.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, reviews.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % reviews.length);
        setIsAutoPlaying(false);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length);
        setIsAutoPlaying(false);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
        setIsAutoPlaying(false);
    };

    return (
        <section id="reviews" className="relative py-8 bg-white overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Mesh gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50" />

                {/* Animated grid */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `
                        radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0),
                        linear-gradient(45deg, transparent 0%, transparent 49%, currentColor 50%, transparent 51%),
                        linear-gradient(-45deg, transparent 0%, transparent 49%, currentColor 50%, transparent 51%)
                        `,
                        backgroundSize: '40px 40px, 80px 80px, 80px 80px',
                        backgroundPosition: '0 0, 0 0, 0 0'
                    }}
                />

                {/* Floating elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div 
                        className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-br from-blue-400/10 to-transparent blur-3xl animate-pulse"
                        style={{ 
                            animation: 'float 20s ease-in-out infinite',
                            animationDelay: '0s'
                        }}
                    />
                    <div 
                        className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-tl from-purple-400/10 to-transparent blur-3xl animate-pulse"
                        style={{ 
                            animation: 'float 15s ease-in-out infinite reverse',
                            animationDelay: '2s'
                        }}
                    />
                </div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full mb-6 animate-pulse">
                        <Heart className="w-8 h-8 text-blue-600" />
                    </div>
                    
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
                        Patient
                        <span className="text-blue-600 ml-3">
                            Reviews
                        </span>
                    </h2>
                    
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
                        Discover what our patients say about their transformative experiences with DermaCare
                    </p>

                    {/* Rating Summary */}
                    <div className="flex items-center justify-center space-x-8 mb-12">
                        <div className="flex items-center space-x-3">
                            <div className="flex items-center space-x-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star 
                                        key={i} 
                                        className={`w-6 h-6 transition-all duration-300 ${
                                            i < Math.floor(averageRating) 
                                                ? 'text-yellow-400 fill-current transform hover:scale-110' 
                                                : 'text-gray-300'
                                        }`} 
                                    />
                                ))}
                            </div>
                            <span className="text-2xl font-bold text-gray-900">{averageRating.toFixed(1)}</span>
                        </div>
                        <div className="h-8 w-px bg-gray-300" />
                        <div className="text-gray-600">
                            <span className="font-bold text-gray-900 text-xl">{totalReviews}</span> Reviews
                        </div>
                    </div>
                </div>
                
                {/* Slider Container */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Main Slider */}
                    <div className="relative overflow-hidden rounded-3xl">
                        <div 
                            className="flex transition-transform duration-700 ease-in-out"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {reviews.map((review, index) => (
                                <div key={review.id} className="w-full flex-shrink-0 px-4">
                                    <div className="group relative mx-auto max-w-2xl">
                                        <div className="relative h-full p-12 rounded-3xl bg-white/80 backdrop-blur-sm border-2 border-gray-100 hover:border-blue-200 transition-all duration-500 hover:shadow-2xl transform hover:scale-[1.02]">
                                            {/* Background pattern */}
                                            <div className={`absolute inset-0 ${review.bgPattern} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                                            
                                            {/* Quote icon */}
                                            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
                                                <div className={`w-16 h-16 bg-gradient-to-r ${review.color} rounded-full flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform duration-500`}>
                                                    <Quote className="w-8 h-8 text-white" />
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="relative z-10 pt-8 text-center">
                                                {/* Rating */}
                                                <div className="flex items-center justify-center space-x-1 mb-8">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star 
                                                            key={i} 
                                                            className={`w-6 h-6 transition-all duration-500 ${
                                                                i < review.rating 
                                                                    ? 'text-yellow-400 fill-current transform group-hover:scale-125' 
                                                                    : 'text-gray-300'
                                                            }`}
                                                            style={{ 
                                                                animationDelay: `${i * 100}ms`,
                                                                transitionDelay: `${i * 100}ms`
                                                            }}
                                                        />
                                                    ))}
                                                </div>

                                                {/* Comment */}
                                                <p className="text-gray-600 text-lg leading-relaxed mb-8 group-hover:text-gray-700 transition-colors duration-300 font-medium">
                                                    "{review.comment}"
                                                </p>

                                                {/* Footer */}
                                                <div className="flex items-center justify-center space-x-6">
                                                    <div className="text-center">
                                                        <h4 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-1">
                                                            {review.name}
                                                        </h4>
                                                        <p className={`text-sm bg-gradient-to-r ${review.color} bg-clip-text text-transparent font-semibold`}>
                                                            {review.service}
                                                        </p>
                                                    </div>
                                                    
                                                    <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                                                        <ThumbsUp className="w-5 h-5 text-blue-600" />
                                                        <span className="text-sm text-gray-500 font-medium">Verified</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Hover glow effect */}
                                            <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${review.color} opacity-0 group-hover:opacity-5 transition-opacity duration-700 blur-2xl`} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:bg-blue-50 border border-gray-200"
                        style={{ zIndex: 10 }}
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
                    </button>
                    
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:bg-blue-50 border border-gray-200"
                        style={{ zIndex: 10 }}
                    >
                        <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
                    </button>
                </div>

                {/* Slide Indicators */}
                <div className="flex justify-center mt-12 space-x-3">
                    {reviews.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`transition-all duration-300 rounded-full ${
                                index === currentSlide
                                    ? 'w-12 h-3 bg-gradient-to-r from-blue-500 to-purple-500'
                                    : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                            }`}
                        />
                    ))}
                </div>

                {/* Auto-play indicator */}
                <div className="flex justify-center mt-6">
                    <button
                        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                        className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors duration-300"
                    >
                        <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`} />
                        <span>{isAutoPlaying ? 'Auto-playing' : 'Paused'}</span>
                    </button>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-8">
                    <div className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 group cursor-pointer hover:shadow-lg">
                        <Sparkles className="w-6 h-6 text-blue-600 group-hover:animate-spin" />
                        <span className="text-gray-900 font-semibold text-lg">Share Your Experience</span>
                        <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
                    </div>
                </div>

                {/* Bottom decorative elements */}
                <div className="flex justify-center mt-12 space-x-6">
                    {[0, 1, 2, 3].map((i) => (
                        <div
                            key={i}
                            className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"
                            style={{
                                animationDelay: `${i * 500}ms`,
                                animationDuration: '2s'
                            }}
                        />
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(5deg); }
                }
            `}</style>
        </section>
    );
};

export default FeedBack;