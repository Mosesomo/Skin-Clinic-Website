import { useState } from 'react';
import { Star, Quote, Sparkles, Heart, ThumbsUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FeedBack = () => {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

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

    return (
        <section ref={ref} className="relative py-6 bg-white overflow-hidden">
            {/* Parallax Background */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{ y: inView ? 0 : -100, opacity: inView ? 1 : 0 }}
            >
                {/* Mesh */}
                <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background" />

                {/* Grid */}
                <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage: `
                    radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0),
                    linear-gradient(45deg, transparent 0%, transparent 49%, currentColor 50%, transparent 51%),
                    linear-gradient(-45deg, transparent 0%, transparent 49%, currentColor 50%, transparent 51%)
                    `,
                    backgroundSize: '30px 30px, 60px 60px, 60px 60px',
                    backgroundPosition: '0 0, 0 0, 0 0'
                }}
                />

                {/* Decoration Elements */}
                <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                    }}
                    transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                    }}
                    className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-3xl"
                />
                <motion.div
                    animate={{
                    scale: [1.2, 1, 1.2],
                    rotate: [90, 0, 90],
                    }}
                    transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                    }}
                    className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-tl from-primary/10 to-transparent blur-3xl"
                />
                </div>
            </motion.div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full mb-4 animate-pulse">
                        <Heart className="w-6 h-6 text-primary" />
                    </div>
                    
                    <h2 className="text-4xl font-bold text-foreground mb-4">
                        Patient
                        <span className="text-primary ml-2">
                            Reviews
                        </span>
                    </h2>
                    
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                        Discover what our patients say about their transformative experiences with DermaCare
                    </p>

                    {/* Rating Summary */}
                    <div className="flex items-center justify-center space-x-6 mb-8">
                        <div className="flex items-center space-x-2">
                            <div className="flex items-center space-x-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star 
                                        key={i} 
                                        className={`w-5 h-5 ${i < Math.floor(averageRating) ? 'text-yellow-400 fill-current' : 'text-muted-foreground/30'}`} 
                                    />
                                ))}
                            </div>
                            <span className="text-lg font-semibold text-foreground">{averageRating.toFixed(1)}</span>
                        </div>
                        <div className="h-6 w-px bg-border" />
                        <div className="text-muted-foreground">
                            <span className="font-semibold text-foreground">{totalReviews}</span> Reviews
                        </div>
                    </div>
                </div>
                
                {/* Reviews Grid */}
                <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {reviews.map((review, index) => (
                        <div
                            key={review.id}
                            className="group relative transform transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2"
                            style={{
                                animationDelay: `${index * 200}ms`
                            }}
                        >
                            <div className="relative h-full p-8 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 hover:border-border transition-all duration-300 hover:shadow-2xl">
                                {/* Background pattern */}
                                <div className={`absolute inset-0 ${review.bgPattern} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                
                                {/* Quote icon */}
                                <div className="absolute -top-4 -left-4">
                                    <div className={`w-12 h-12 bg-gradient-to-r ${review.color} rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                                        <Quote className="w-6 h-6 text-white" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="relative z-10 pt-4">
                                    {/* Rating */}
                                    <div className="flex items-center space-x-1 mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star 
                                                key={i} 
                                                className={`w-4 h-4 transition-all duration-300 ${
                                                    i < review.rating 
                                                        ? 'text-yellow-400 fill-current transform group-hover:scale-110' 
                                                        : 'text-muted-foreground/30'
                                                }`}
                                                style={{ animationDelay: `${i * 100}ms` }}
                                            />
                                        ))}
                                    </div>

                                    {/* Comment */}
                                    <p className="text-muted-foreground leading-relaxed mb-6 group-hover:text-foreground/80 transition-colors duration-300">
                                        "{review.comment}"
                                    </p>

                                    {/* Footer */}
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                                                {review.name}
                                            </h4>
                                            <p className={`text-sm bg-gradient-to-r ${review.color} bg-clip-text text-transparent font-medium`}>
                                                {review.service}
                                            </p>
                                        </div>
                                        
                                        <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <ThumbsUp className="w-4 h-4 text-primary" />
                                            <span className="text-sm text-muted-foreground">Verified</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Hover glow effect */}
                                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${review.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`} />
                                
                                {/* Side accent line */}
                                <div className={`absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b ${review.color} rounded-full transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top`} />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full border border-border/50 hover:border-primary/50 transition-all duration-300 group cursor-pointer">
                        <Sparkles className="w-5 h-5 text-primary group-hover:animate-spin" />
                        <span className="text-foreground font-medium">Share Your Experience</span>
                        <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse" />
                    </div>
                </div>

                {/* Bottom decorative elements */}
                <div className="flex justify-center mt-12 space-x-4">
                    {[0, 1, 2, 3].map((i) => (
                        <div
                            key={i}
                            className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse"
                            style={{
                                animationDelay: `${i * 300}ms`,
                                animationDuration: '2s'
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeedBack;