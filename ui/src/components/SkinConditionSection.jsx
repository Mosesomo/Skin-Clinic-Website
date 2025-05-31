import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Heart } from "lucide-react";

const SkinConditionSection = () => {
    const conditions = [
        {
            title: "Acne & Rosacea",
            description: "Comprehensive treatment for all acne types including hormonal, cystic, and rosacea-related breakouts.",
            image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600",
            gradient: "from-rose-500/20 to-pink-600/20"
        },
        {
            title: "Eczema & Psoriasis",
            description: "Specialized care for chronic inflammatory skin conditions to reduce flare-ups and discomfort.",
            image: "https://images.unsplash.com/photo-1620656798856-04e0e6a4e8af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600",
            gradient: "from-blue-500/20 to-cyan-600/20"
        },
        {
            title: "Skin Cancer Screening",
            description: "Early detection and treatment of melanoma and non-melanoma skin cancers with advanced techniques.",
            image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600",
            gradient: "from-emerald-500/20 to-teal-600/20"
        },
        {
            title: "Hyperpigmentation",
            description: "Treatment for melasma, sun spots, and post-inflammatory hyperpigmentation with proven methods.",
            image: "https://images.unsplash.com/photo-1571757767119-68b8db2238b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600",
            gradient: "from-amber-500/20 to-orange-600/20"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const cardVariants = {
        hidden: { 
            opacity: 0, 
            y: 50,
            rotateX: -15
        },
        visible: { 
            opacity: 1, 
            y: 0,
            rotateX: 0,
            transition: {
                duration: 0.8,
                ease: [0.6, -0.05, 0.01, 0.99]
            }
        }
    };

    return (
        <section className="relative py-20 bg-white overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
               
                <motion.div 
                    className="absolute top-20 right-20 w-72 h-72"
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
                <motion.div 
                    className="absolute bottom-20 left-20 w-96 h-96"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [360, 180, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div 
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Badge variant="outline" className="mb-6 px-6 py-2 text-sm font-medium bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 text-primary">
                            <Sparkles className="w-4 h-4 mr-2" />
                            Skin Health Excellence
                        </Badge>
                    </motion.div>
                    
                    <motion.h2 
                        className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Conditions We
                        <span className="block relative">
                            <span className="relative z-10 mb-2 text-primary">Transform</span>
                            {/*<motion.div
                                className="absolute -bottom-6 left-0 right-0 h-4 bg-gradient-to-r from-blue-400/30 to-purple-600/30 rounded-full"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                            />*/}
                        </span>
                    </motion.h2>
                    
                    <motion.p 
                        className="text-md md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        Advanced dermatological solutions tailored to your unique skin needs, 
                        backed by cutting-edge research and compassionate care.
                    </motion.p>
                </motion.div>

                <motion.div 
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {conditions.map((condition, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ 
                                y: -10,
                                rotateY: 5,
                                transition: { duration: 0.3 }
                            }}
                            className="group perspective-1000"
                        >
                            <div className="relative overflow-hidden rounded-2xl border bg-card/10 backdrop-blur-sm hover:bg-card/20 transition-all duration-500 h-full">
                                {/* Gradient overlay */}
                                <div className={`absolute inset-0 `} />
                                
                                <div className="aspect-video overflow-hidden relative">
                                    <motion.img
                                        src={condition.image}
                                        alt={condition.title}
                                        className="w-full h-full object-cover"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.6 }}
                                    />
                                    <div className="absolute inset-0 bg-black/20" />
                                    
                                    {/* Floating particles */}
                                    <motion.div
                                        className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full"
                                        animate={{
                                            y: [0, -10, 0],
                                            opacity: [0.7, 1, 0.7]
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: index * 0.2
                                        }}
                                    />
                                </div>
                                
                                <div className="p-6 relative z-10">
                                    <motion.h3 
                                        className="text-xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors"
                                        layoutId={`title-${index}`}
                                    >
                                        {condition.title}
                                    </motion.h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {condition.description}
                                    </p>
                                </div>

                                {/* Hover effect border */}
                                <motion.div
                                    className="absolute inset-0 rounded-2xl"
                                    initial={{ background: "linear-gradient(45deg, transparent, transparent)" }}
                                    whileHover={{
                                        background: [
                                            "linear-gradient(45deg, transparent, transparent)",
                                            "linear-gradient(45deg, rgba(59, 130, 246, 0.5), rgba(147, 51, 234, 0.5))",
                                            "linear-gradient(45deg, transparent, transparent)"
                                        ]
                                    }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                    style={{ padding: "2px" }}
                                >
                                    <div className="w-full h-full rounded-2xl bg-card/90" />
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div 
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <Button 
                        asChild 
                        className="group bg-primary hover:from-primary/90 hover:to-chart-4/90 text-primary-foreground border-0 px-8 py-6 text-md md:text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
                    >
                        <Link to="/book">
                            <motion.span
                                whileHover={{ x: -5 }}
                                transition={{ duration: 0.2 }}
                            >
                                Book Appointment
                            </motion.span>
                            <motion.div
                                whileHover={{ x: 5 }}
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

export default SkinConditionSection;