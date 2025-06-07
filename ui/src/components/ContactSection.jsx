import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, ArrowRight, MessageCircle } from "lucide-react";


const ContactSection = () => {
    const contactMethods = [
        {
            icon: <Phone className="w-6 h-6" />,
            title: "Call Us",
            value: "0720 108898",
            description: "Speak directly with our team",
            gradient: "from-emerald-500 to-teal-600",
            delay: 0
        },
        {
            icon: <Mail className="w-6 h-6" />,
            title: "Email Us",
            value: "info@skincare.co.ke",
            description: "Get detailed information",
            gradient: "from-blue-500 to-indigo-600",
            delay: 0.2
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            title: "Visit Us",
            value: "Saba Saba - Kin'gorani Road",
            description: "Professional consultation",
            gradient: "from-purple-500 to-pink-600",
            delay: 0.4
        }
    ];

    const businessHours = [
        { day: "Mon - Fri", time: "7:00 AM - 8:00 PM" },
        { day: "Saturday", time: "Closed" },
        { day: "Sunday", time: "1:00 PM - 8:00 PM" }
    ];

    return (
        <section className="relative py-20  overflow-hidden">
            {/* Dynamic background elements */}
            <div className="absolute inset-0">
                {/* Animated gradient orbs */}
                <motion.div
                    className="absolute top-20 left-20 w-64 h-64  rounded-full blur-3xl"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-emerald-400/20 to-teal-600/20 rounded-full blur-3xl"
                    animate={{
                        x: [0, -80, 0],
                        y: [0, 30, 0],
                        scale: [1, 0.8, 1]
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div 
                    className="text-center mb-16"
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
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Get In Touch
                        </Badge>
                    </motion.div>
                    
                    <motion.h2 
                        className="text-2xl md:text-4xl font-bold mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <span className="text-primary">
                            Ready to Transform
                        </span>
                        <br />
                        <span className="relative text-foreground">
                            Your Skin?
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
                        className="text-md md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        Schedule your consultation today and take the first step towards healthier, more radiant skin.
                    </motion.p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Methods */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-2xl font-bold text-foreground mb-8">Contact Information</h3>
                        <div className="space-y-6">
                            {contactMethods.map((method, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ 
                                        opacity: 0, 
                                        y: 30,
                                        scale: 0.9
                                    }}
                                    whileInView={{ 
                                        opacity: 1, 
                                        y: 0,
                                        scale: 1
                                    }}
                                    viewport={{ once: true }}
                                    transition={{ 
                                        duration: 0.6, 
                                        delay: method.delay
                                    }}
                                    whileHover={{ 
                                        x: 10,
                                        scale: 1.02,
                                        transition: { duration: 0.2 }
                                    }}
                                    className="group cursor-pointer"
                                >
                                    <div className="relative p-6 rounded-2xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-white/20 dark:border-slate-700/20 shadow-lg hover:shadow-xl transition-all duration-300">
                                        {/* Animated background gradient */}
                                        <motion.div
                                            className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                                        />
                                        
                                        <div className="flex items-center space-x-4 relative z-10">
                                            <motion.div
                                                className={`p-3 rounded-xl bg-gradient-to-br ${method.gradient} text-white shadow-md group-hover:shadow-lg transition-shadow duration-300`}
                                                whileHover={{ 
                                                    scale: 1.1,
                                                    rotate: 5
                                                }}
                                            >
                                                {method.icon}
                                            </motion.div>
                                            
                                            <div className="flex-1">
                                                <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                                                    {method.title}
                                                </h4>
                                                <p className="text-primary font-medium text-base">
                                                    {method.value}
                                                </p>
                                                <p className="text-muted-foreground text-sm">
                                                    {method.description}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Bottom accent line */}
                                        <motion.div
                                            className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${method.gradient} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Business Hours & CTA */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >
                        {/* Business Hours */}
                        <div className="relative p-8 rounded-3xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-white/20 dark:border-slate-700/20 shadow-xl">
                            <motion.div
                                className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    rotate: [0, 180, 360]
                                }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            />
                            
                            <div className="flex items-center mb-6">
                                <motion.div
                                    className="p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-md mr-4"
                                    animate={{
                                        rotate: [0, 10, -10, 0]
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    <Clock className="w-6 h-6" />
                                </motion.div>
                                <h3 className="text-2xl font-bold text-foreground">Business Hours</h3>
                            </div>
                            
                            <div className="space-y-3">
                                {businessHours.map((schedule, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="flex justify-between items-center py-2 border-b border-slate-200/50 dark:border-slate-700/50 last:border-b-0"
                                    >
                                        <span className="text-muted-foreground font-medium">{schedule.day}</span>
                                        <span className="text-foreground font-semibold">{schedule.time}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Call-to-action */}
                        <motion.div 
                            className="text-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <motion.div
                                className="relative inline-block"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button 
                                    className="group relative bg-primary text-white border-0 px-10 py-6 text-md md:text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden w-full"
                                    onClick={() => window.location.href = '/contact'}
                                >
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
                                            className="relative z-10 flex items-center justify-center"
                                            whileHover={{ x: -5 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            Book Consultation
                                            <motion.div
                                                className="relative z-10 ml-3"
                                                whileHover={{ x: 5, rotate: 45 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <ArrowRight className="h-5 w-5" />
                                            </motion.div>
                                        </motion.span>
                                </Button>
                                
                                {/* Pulsing ring effect */}
                                <motion.div
                                    className="absolute inset-0 rounded-full border-2 border-blue-400 opacity-30"
                                    animate={{
                                        scale: [1, 1.3, 1],
                                        opacity: [0.3, 0, 0.3]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeOut"
                                    }}
                                />
                            </motion.div>

                            <motion.p 
                                className="text-muted-foreground text-sm mt-4"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                Free consultation • No obligation • Expert advice
                            </motion.p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;