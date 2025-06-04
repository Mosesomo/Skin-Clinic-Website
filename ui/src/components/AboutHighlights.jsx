import { motion } from "framer-motion";
import { Stethoscope, Microscope, Users, Heart, Sparkles } from 'lucide-react';
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const AboutHighlights = () => {
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView) {
            console.log("AboutHighlights is in view");
        }
    }, [inView]);
    
    const highlights = [
        {
            icon: <Stethoscope className="w-6 h-6" />,
            title: "Comprehensive Diagnostics",
            description: "We provide thorough skin biopsies for histopathology and relevant laboratory tests to support accurate diagnoses of all skin conditions.",
            color: "from-blue-400 to-cyan-500",
            bgPattern: "bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.15),transparent_50%)]"
        },
        {
            icon: <Microscope className="w-6 h-6" />,
            title: "Advanced Procedures",
            description: "Our state-of-the-art dermoscopy and cryotherapy services, combined with detailed skin analysis and laser treatments, ensure the best possible care.",
            color: "from-purple-400 to-pink-500",
            bgPattern: "bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.15),transparent_50%)]"
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Patient Education & Community Care",
            description: "We believe in empowering our patients through detailed health education and supporting vulnerable populations with our community outreach programs.",
            color: "from-emerald-400 to-teal-500",
            bgPattern: "bg-[radial-gradient(circle_at_50%_80%,rgba(16,185,129,0.15),transparent_50%)]"
        }
    ];

    return (
        <section className="relative py-20 bg-background overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0">
                
                
                {/* Floating elements */}
                <motion.div
                    className="absolute top-16 right-20 w-12 h-12 border border-border/50 rounded-full"
                    animate={{
                        y: [0, -15, 0],
                        rotate: [0, 180, 360]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-20 left-16 w-8 h-8"
                    animate={{
                        rotate: [0, 45, 0],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-4"
                    >
                        <Sparkles className="w-6 h-6 text-primary" />
                    </motion.div>
                    
                    <motion.h2 
                        className="text-3xl font-bold text-foreground mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Why Choose 
                        <span className="text-primary ml-2">
                            Jomo Derma Centre?
                        </span>
                    </motion.h2>
                    
                    <motion.p 
                        className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        We are dedicated to treating skin, hair, and nail conditions with the highest standard of medical excellence. 
                        Through comprehensive diagnostics, advanced treatments, and detailed patient education, we serve our community 
                        with special attention to vulnerable populations.
                    </motion.p>
                </motion.div>
                
                <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {highlights.map((highlight, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ 
                                duration: 0.6, 
                                delay: index * 0.2,
                                ease: [0.6, -0.05, 0.01, 0.99]
                            }}
                            whileHover={{ 
                                y: -8,
                                transition: { duration: 0.3 }
                            }}
                            className="group relative"
                        >
                            <div className="relative h-full p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-border transition-all duration-300">
                                {/* Background pattern */}
                                <div className={`absolute inset-0 ${highlight.bgPattern} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                
                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Icon container */}
                                    <motion.div
                                        className={`w-14 h-14 bg-gradient-to-r ${highlight.color} rounded-xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg`}
                                        whileHover={{ 
                                            scale: 1.1,
                                            rotate: 12,
                                            transition: { duration: 0.2 }
                                        }}
                                        animate={{
                                            y: [0, -3, 0]
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            delay: index * 0.5,
                                            ease: "easeInOut"
                                        }}
                                    >
                                        {highlight.icon}
                                    </motion.div>
                                    
                                    <motion.h3 
                                        className="text-xl font-semibold mb-4 text-foreground"
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {highlight.title}
                                    </motion.h3>
                                    
                                    <motion.p 
                                        className="text-muted-foreground leading-relaxed"
                                        initial={{ opacity: 0.8 }}
                                        whileHover={{ opacity: 1 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {highlight.description}
                                    </motion.p>
                                </div>

                                {/* Hover glow effect */}
                                <motion.div
                                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${highlight.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`}
                                    whileHover={{ scale: 1.05 }}
                                />
                            </div>

                            {/* Side accent line */}
                            <motion.div
                                className={`absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b ${highlight.color} rounded-full`}
                                initial={{ scaleY: 0 }}
                                whileInView={{ scaleY: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.3 }}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Bottom decorative element */}
                <motion.div
                    className="flex justify-center mt-16"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <div className="flex space-x-2">
                        {[0, 1, 2].map((i) => (
                            <motion.div
                                key={i}
                                className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full"
                                animate={{
                                    scale: [1, 1.5, 1],
                                    opacity: [0.5, 1, 0.5]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: i * 0.3
                                }}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutHighlights;