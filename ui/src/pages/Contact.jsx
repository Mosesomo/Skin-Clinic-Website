import { useState } from 'react';
import { motion } from "framer-motion";
import { Calendar, MapPin, Phone, Mail, Clock, ArrowRight, MessageCircle, Star, CheckCircle } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

const ContactPage = () => {
    const [appointment, setAppointment] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        service: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const submitAppointment = async () => {
        if (appointment.name && appointment.email && appointment.date) {
            setIsSubmitting(true);
            // Simulate API call
            setTimeout(() => {
                alert('Appointment request submitted successfully!');
                setAppointment({ name: '', email: '', phone: '', date: '', service: '', message: '' });
                setIsSubmitting(false);
            }, 1500);
        }
    };

    const contactInfo = [
        {
            icon: <MapPin className="w-6 h-6" />,
            title: "Visit Our Clinic",
            value: "Saba Saba -Kin'gorani Road, Ronald Ngala Rd, Mombasa",
            description: "State-of-the-art facilities",
            gradient: "from-emerald-500 to-teal-600"
        },
        {
            icon: <Phone className="w-6 h-6" />,
            title: "Call Us Today",
            value: "0720 108898",
            description: "Available during business hours",
            gradient: "from-blue-500 to-indigo-600"
        },
        {
            icon: <Mail className="w-6 h-6" />,
            title: "Email Us",
            value: "info@skincare.co.ke",
            description: "Quick response guaranteed",
            gradient: "from-purple-500 to-pink-600"
        }
    ];

    const businessHours = [
        { day: "Monday - Friday", time: "7:00 AM - 8:00 PM" },
        { day: "Saturday", time: "Closed" },
        { day: "Sunday", time: "1:00 PM - 8:00 PM" }
    ];

    const features = [
        "Free consultation",
        "Expert dermatologists",
        "Modern equipment",
        "Flexible scheduling"
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Hero Background Image */}
                <div className="absolute inset-0">
                    <img 
                        src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                        alt="Modern dermatology clinic"
                        className="w-full h-full object-cover"
                    />
                    {/* Overlay for better text readability */}
                    <div className="absolute inset-0 bg-black/50" />
                    
                    {/* Subtle animated overlay elements */}
                    <motion.div
                        className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <motion.div
                        className="absolute bottom-20 left-20 w-24 h-24 bg-cyan-400/20 rounded-full blur-lg"
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.2, 0.5, 0.2]
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                        }}
                    />
                    
                    {/* Floating Particles */}
                    {[...Array(8)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-white/30 rounded-full"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [-10, -30, -10],
                                opacity: [0, 1, 0],
                                scale: [0.5, 1, 0.5]
                            }}
                            transition={{
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                                ease: "easeInOut"
                            }}
                        />
                    ))}
                </div>

                {/* Hero Content */}
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    
                    <motion.h1 
                        className="text-2xl md:text-5xl font-bold text-white mb-8"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        <span className="block">Transform Your</span>
                        <span className="block text-primary">
                            Skin Journey
                        </span>
                    </motion.h1>
                    
                    <motion.p 
                        className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        Book your consultation with Kenya's leading dermatologists and discover 
                        personalized treatments that reveal your skin's natural radiance.
                    </motion.p>
                    
                    <motion.div
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.9 }}
                    >
                        <motion.button
                            className="group relative bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden"
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                animate={{
                                    x: ['-100%', '100%']
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            />
                            <span className="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center">
                                Book Consultation
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </span>
                        </motion.button>
                        
                        <motion.div 
                            className="flex items-center text-white/90"
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="flex -space-x-2 mr-4">
                                {[...Array(4)].map((_, i) => (
                                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 border-2 border-white" />
                                ))}
                            </div>
                            <div>
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                    ))}
                                </div>
                                <p className="text-sm">1,000+ Happy Patients</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
                    </div>
                </motion.div>
            </section>

            {/* Contact Section */}
            <section className="relative py-20 overflow-hidden" id="contact-form">
                {/* Background Elements */}
                <div className="absolute inset-0">
                    <motion.div
                        className="absolute top-40 left-20 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-600/10 rounded-full blur-3xl"
                        animate={{
                            x: [0, 80, 0],
                            y: [0, -40, 0]
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <Badge variant="outline" className="mb-6 px-6 py-2 text-sm font-medium">
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Get Started Today
                        </Badge>
                        
                        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                            Book Your <span className="text-primary">Consultation</span>
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                            Take the first step towards healthier, more radiant skin with our expert team.
                        </p>
                    </motion.div>
                    
                    <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
                        {/* Appointment Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="relative p-8 rounded-3xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-white/20 dark:border-slate-700/20 shadow-2xl">
                                <motion.div
                                    className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full"
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
                                
                                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                                    <Calendar className="w-6 h-6 mr-3 text-primary" />
                                    Book Appointment
                                </h3>
                                
                                <div className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <motion.div
                                            whileFocus={{ scale: 1.02 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <input
                                                type="text"
                                                placeholder="Full name *"
                                                value={appointment.name}
                                                onChange={(e) => setAppointment({...appointment, name: e.target.value})}
                                                className="w-full p-4 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white/50 dark:bg-slate-700/50 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-all duration-300 backdrop-blur-sm"
                                            />
                                        </motion.div>
                                        <motion.div
                                            whileFocus={{ scale: 1.02 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <input
                                                type="email"
                                                placeholder="Email address *"
                                                value={appointment.email}
                                                onChange={(e) => setAppointment({...appointment, email: e.target.value})}
                                                className="w-full p-4 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white/50 dark:bg-slate-700/50 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-all duration-300 backdrop-blur-sm"
                                            />
                                        </motion.div>
                                    </div>
                                    
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <motion.div
                                            whileFocus={{ scale: 1.02 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <input
                                                type="tel"
                                                placeholder="Phone number"
                                                value={appointment.phone}
                                                onChange={(e) => setAppointment({...appointment, phone: e.target.value})}
                                                className="w-full p-4 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white/50 dark:bg-slate-700/50 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-all duration-300 backdrop-blur-sm"
                                            />
                                        </motion.div>
                                        <motion.div
                                            whileFocus={{ scale: 1.02 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <input
                                                type="date"
                                                value={appointment.date}
                                                onChange={(e) => setAppointment({...appointment, date: e.target.value})}
                                                className="w-full p-4 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white/50 dark:bg-slate-700/50 text-foreground focus:border-primary focus:outline-none transition-all duration-300 backdrop-blur-sm"
                                            />
                                        </motion.div>
                                    </div>
                                    
                                    <motion.div
                                        whileFocus={{ scale: 1.02 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <select
                                            value={appointment.service}
                                            onChange={(e) => setAppointment({...appointment, service: e.target.value})}
                                            className="w-full p-4 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white/50 dark:bg-slate-700/50 text-foreground focus:border-primary focus:outline-none transition-all duration-300 backdrop-blur-sm"
                                        >
                                            <option value="">Select service</option>
                                            <option value="consultation">General Consultation</option>
                                            <option value="acne">Acne Treatment</option>
                                            <option value="anti-aging">Anti-Aging Treatment</option>
                                            <option value="screening">Skin Cancer Screening</option>
                                            <option value="cosmetic">Cosmetic Procedures</option>
                                        </select>
                                    </motion.div>
                                    
                                    <motion.div
                                        whileFocus={{ scale: 1.02 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <textarea
                                            placeholder="Tell us about your concerns (optional)"
                                            value={appointment.message}
                                            onChange={(e) => setAppointment({...appointment, message: e.target.value})}
                                            rows={4}
                                            className="w-full p-4 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white/50 dark:bg-slate-700/50 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-all duration-300 resize-none backdrop-blur-sm"
                                        />
                                    </motion.div>
                                    
                                    <motion.button
                                        onClick={submitAppointment}
                                        disabled={isSubmitting}
                                        className="group relative w-full bg-primary text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden disabled:opacity-50"
                                        whileHover={{ scale: 1.02, y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
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
                                        <span className="relative z-10 flex items-center justify-center space-x-2">
                                            {isSubmitting ? (
                                                <motion.div
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                                />
                                            ) : (
                                                <>
                                                    <Calendar className="w-5 h-5" />
                                                    <span>Book Appointment</span>
                                                </>
                                            )}
                                        </span>
                                    </motion.button>
                                    
                                    <div className="flex flex-wrap gap-3 pt-4">
                                        {features.map((feature, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, scale: 0 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                                className="flex items-center text-sm text-muted-foreground"
                                            >
                                                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                                {feature}
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        
                        {/* Contact Information */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-8"
                        >
                            <h3 className="text-2xl font-bold text-foreground">Contact Information</h3>
                            
                            <div className="space-y-6">
                                {contactInfo.map((contact, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ 
                                            opacity: 0, 
                                            y: 30
                                        }}
                                        whileInView={{ 
                                            opacity: 1, 
                                            y: 0
                                        }}
                                        viewport={{ once: true }}
                                        transition={{ 
                                            duration: 0.6, 
                                            delay: index * 0.1
                                        }}
                                        whileHover={{ 
                                            x: 10,
                                            scale: 1.02
                                        }}
                                        className="group cursor-pointer"
                                    >
                                        <div className="relative p-6 rounded-2xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-white/20 dark:border-slate-700/20 shadow-lg hover:shadow-xl transition-all duration-300">
                                            <motion.div
                                                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${contact.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                                            />
                                            
                                            <div className="flex items-center space-x-4 relative z-10">
                                                <motion.div
                                                    className={`p-3 rounded-xl bg-gradient-to-br ${contact.gradient} text-white shadow-md`}
                                                    whileHover={{ 
                                                        scale: 1.1,
                                                        rotate: 5
                                                    }}
                                                >
                                                    {contact.icon}
                                                </motion.div>
                                                
                                                <div className="flex-1">
                                                    <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                                                        {contact.title}
                                                    </h4>
                                                    <p className="text-primary font-medium">
                                                        {contact.value}
                                                    </p>
                                                    <p className="text-muted-foreground text-sm">
                                                        {contact.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                            
                            {/* Business Hours */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="relative p-8 rounded-3xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-white/20 dark:border-slate-700/20 shadow-xl"
                            >
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
                                            className="flex justify-between items-center py-3 border-b border-slate-200/50 dark:border-slate-700/50 last:border-b-0"
                                        >
                                            <span className="text-muted-foreground font-medium">{schedule.day}</span>
                                            <span className="text-foreground font-semibold">{schedule.time}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;