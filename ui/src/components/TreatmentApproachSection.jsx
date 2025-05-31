import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, MapPin, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";


const TreatmentApproachSection = () => {
    const approaches = [
        {
            icon: <ShieldCheck className="w-10 h-10" />,
            title: "Evidence-Based",
            description: "All treatments are backed by the latest clinical research and proven methodologies.",
            gradient: "from-emerald-500 to-teal-600",
            delay: 0
        },
        {
            icon: <MapPin className="w-10 h-10" />,
            title: "Localized Solutions",
            description: "Customized approaches that consider environmental factors and regional skin concerns.",
            gradient: "from-blue-500 to-indigo-600",
            delay: 0.2
        },
        {
            icon: <Clock className="w-10 h-10" />,
            title: "Long-Term Results",
            description: "We focus on sustainable solutions rather than quick fixes for lasting skin health.",
            gradient: "from-purple-500 to-pink-600",
            delay: 0.4
        }
    ];

    return (
        <section className="relative py-20 bg-white overflow-hidden">
            {/* Dynamic background elements */}
            <div className="absolute inset-0">
                
                
                {/* Grid pattern overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
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
                        initial={{ scale: 0, rotate: -90 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Badge variant="outline" className="mb-6 px-6 py-2 text-sm font-medium border text-primary">
                            <ShieldCheck className="w-4 h-4 mr-2" />
                            Our Philosophy
                        </Badge>
                    </motion.div>
                    
                    <motion.h2 
                        className="text-2xl  md:text-4xl font-bold mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <span className="text-primary">
                            Treatment Excellence
                        </span>
                        <br />
                        <span className="relative text-foreground">
                            Through Innovation
                            <motion.div
                                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-primary rounded-full"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 1 }}
                            />
                        </span>
                    </motion.h2>
                    
                    <motion.p 
                        className="text-md md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        Our commitment to excellence drives us to combine cutting-edge medical expertise 
                        with personalized care, ensuring optimal outcomes for every patient.
                    </motion.p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {approaches.map((approach, index) => (
                        <motion.div
                            key={index}
                            initial={{ 
                                opacity: 0, 
                                y: 60,
                                rotateX: -20,
                                scale: 0.9
                            }}
                            whileInView={{ 
                                opacity: 1, 
                                y: 0,
                                rotateX: 0,
                                scale: 1
                            }}
                            viewport={{ once: true }}
                            transition={{ 
                                duration: 0.8, 
                                delay: approach.delay,
                                ease: [0.6, -0.05, 0.01, 0.99]
                            }}
                            whileHover={{ 
                                y: -20,
                                rotateY: 10,
                                scale: 1.05,
                                transition: { duration: 0.3 }
                            }}
                            className="group perspective-1000"
                        >
                            <div className="relative h-full">
                                {/* Main card with glassmorphism effect */}
                                <div className="relative p-6 rounded-3xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-white/20 dark:border-slate-700/20 shadow-xl hover:shadow-2xl transition-all duration-500 h-full">
                                    {/* Animated background gradient */}
                                    <motion.div
                                        className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${approach.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                                        whileHover={{ scale: 1.02 }}
                                    />
                                    
                                    {/* Icon with floating animation */}
                                    <motion.div
                                        className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${approach.gradient} text-white shadow-lg mb-6 group-hover:shadow-xl transition-shadow duration-300`}
                                        animate={{
                                            y: [0, -8, 0],
                                            rotate: [0, 5, 0]
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            delay: index * 0.5,
                                            ease: "easeInOut"
                                        }}
                                        whileHover={{ 
                                            scale: 1.1,
                                            rotate: 15
                                        }}
                                    >
                                        {approach.icon}
                                    </motion.div>
                                    
                                    <motion.h3 
                                        className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
                                        layoutId={`approach-title-${index}`}
                                    >
                                        {approach.title}
                                    </motion.h3>
                                    
                                    <motion.p 
                                        className="text-slate-600 dark:text-slate-300 leading-relaxed text-base"
                                        initial={{ opacity: 0.8 }}
                                        whileHover={{ opacity: 1 }}
                                    >
                                        {approach.description}
                                    </motion.p>

                                    {/* Decorative elements */}
                                    <motion.div
                                        className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-full"
                                        animate={{
                                            scale: [1, 1.1, 1],
                                            opacity: [0.3, 0.6, 0.3]
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            delay: index * 0.7
                                        }}
                                    />
                                    
                                    {/* Bottom accent line */}
                                    <motion.div
                                        className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${approach.gradient} rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                                        initial={{ scaleX: 0 }}
                                        whileHover={{ scaleX: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </div>

                                {/* Outer glow effect */}
                                <motion.div
                                    className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${approach.gradient} opacity-0 group-hover:opacity-20 blur-xl -z-10 transition-opacity duration-500`}
                                    whileHover={{ scale: 1.1 }}
                                />

                                {/* Floating particles */}
                                <motion.div
                                    className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full opacity-60"
                                    animate={{
                                        y: [0, -15, 0],
                                        x: [0, 10, 0],
                                        scale: [1, 1.2, 1]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        delay: index * 0.4,
                                        ease: "easeInOut"
                                    }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Call-to-action section */}
                <motion.div 
                    className="text-center mt-20"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <motion.div
                        className="relative inline-block"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button 
                            asChild 
                            className="group relative bg-primary text-white border-0 px-10 py-6 text-md md:text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden"
                        >
                            <Link to="/services">
                                {/* Animated background */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    animate={{
                                        x: ['-100%', '100%']
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                />
                                
                                <motion.span
                                    className="relative z-10"
                                    whileHover={{ x: -5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    Learn Our Approach
                                </motion.span>
                                <motion.div
                                    className="relative z-10"
                                    whileHover={{ x: 5, rotate: 45 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <ArrowRight className="ml-3 h-5 w-5" />
                                </motion.div>
                            </Link>
                        </Button>
                        
                        {/* Pulsing ring effect */}
                        <motion.div
                            className="absolute inset-0 rounded-full border-2 border-blue-400 opacity-30"
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.3, 0, 0.3]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeOut"
                            }}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default TreatmentApproachSection;