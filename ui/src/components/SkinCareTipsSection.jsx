import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Sparkles, Zap } from "lucide-react";

const SkinCareTipsSection = () => {
    const tips = [
        {
            title: "Sun Protection",
            description: "Use broad-spectrum SPF 30+ daily, even on cloudy days. Reapply every 2 hours when outdoors.",
            image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600",
            icon: <Zap className="w-6 h-6" />,
            color: "from-yellow-400 to-orange-500"
        },
        {
            title: "Gentle Cleansing",
            description: "Avoid harsh soaps. Use pH-balanced cleansers that don't strip natural oils from your skin.",
            image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600",
            icon: <Sparkles className="w-6 h-6" />,
            color: "from-blue-400 to-cyan-500"
        },
        {
            title: "Moisturize Daily",
            description: "Apply moisturizer immediately after bathing to lock in hydration, especially for dry skin types.",
            image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600",
            icon: <Heart className="w-6 h-6" />,
            color: "from-pink-400 to-rose-500"
        }
    ];

    return (
        <section className="relative py-20 bg-white overflow-hidden">
            {/* Animated mesh background */}
            <div className="absolute inset-0">
               
                
                {/* Floating geometric shapes */}
                <motion.div
                    className="absolute top-20 left-10 w-20 h-20 border border-border rounded-lg"
                    animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
                <motion.div
                    className="absolute bottom-40 right-20 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full"
                    animate={{
                        y: [0, -20, 0],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div 
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <motion.div
                        initial={{ scale: 0, rotate: 180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Badge variant="outline" className="mb-6 px-6 py-2 text-sm font-medium border text-primary">
                            <Heart className="w-4 h-4 mr-2" />
                            Expert Guidance
                        </Badge>
                    </motion.div>
                    
                    <motion.h2 
                        className="text-2xl  md:text-4xl font-bold text-foreground mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <span className="relative text-primary">
                            Radiant Skin
                            <motion.div
                                className="absolute -top-2 -right-8 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-80"
                                animate={{
                                    scale: [1, 1.3, 1],
                                    rotate: [0, 180, 360]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                        </span>
                        <br />
                        <span className="text-foreground">
                            Starts Here
                        </span>
                    </motion.h2>
                    
                    <motion.p 
                        className="text-md md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        Professional insights and proven techniques to maintain your skin's natural beauty and health.
                    </motion.p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {tips.map((tip, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50, rotateX: -30 }}
                            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                            viewport={{ once: true }}
                            transition={{ 
                                duration: 0.8, 
                                delay: index * 0.2,
                                ease: [0.6, -0.05, 0.01, 0.99]
                            }}
                            whileHover={{ 
                                y: -15,
                                rotateY: 8,
                                transition: { duration: 0.3 }
                            }}
                            className="group perspective-1000"
                        >
                            <div className="relative h-full">
                                {/* Main card */}
                                <div className="relative overflow-hidden rounded-3xl bg-white/70 backdrop-blur-md border h-full">
                                    {/* Image section with overlay */}
                                    <div className="relative aspect-square overflow-hidden">
                                        <motion.img
                                            src={tip.image}
                                            alt={tip.title}
                                            className="w-full h-full object-cover"
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.6 }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                        
                                        {/* Floating icon */}
                                        <motion.div
                                            className={`absolute top-6 right-6 p-3 rounded-full bg-gradient-to-r ${tip.color} text-white shadow-lg`}
                                            whileHover={{ 
                                                scale: 1.1,
                                                rotate: 15 
                                            }}
                                            animate={{
                                                y: [0, -5, 0]
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                delay: index * 0.3
                                            }}
                                        >
                                            {tip.icon}
                                        </motion.div>
                                        
                                        {/* Content overlay */}
                                        <div className="absolute bottom-0 left-0 right-0 p-6">
                                            <motion.h3 
                                                className="text-2xl font-bold text-white mb-3"
                                                layoutId={`tip-title-${index}`}
                                            >
                                                {tip.title}
                                            </motion.h3>
                                            <motion.p 
                                                className="text-white/90 text-sm leading-relaxed"
                                                initial={{ opacity: 0.8 }}
                                                whileHover={{ opacity: 1 }}
                                            >
                                                {tip.description}
                                            </motion.p>
                                        </div>
                                    </div>
                                </div>

                                {/* Glow effect on hover */}
                                <motion.div
                                    className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${tip.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl -z-10`}
                                    whileHover={{ scale: 1.05 }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div 
                    className="text-center mt-16"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <Button 
                        asChild 
                        variant="outline"
                        className="group bg-primary text-white border px-8 py-6 text-md md:text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
                    >
                        <Link to="/shop">
                            <motion.span
                                whileHover={{ x: -5 }}
                                transition={{ duration: 0.2 }}
                            >
                                Shop Now
                            </motion.span>
                            <motion.div
                                whileHover={{ x: 5, rotate: 45 }}
                                transition={{ duration: 0.2 }}
                            >
                                <ArrowRight className="ml-3 h-5 w-5" />
                            </motion.div>
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default SkinCareTipsSection;