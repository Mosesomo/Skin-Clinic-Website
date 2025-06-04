import React from 'react';
import { Award, Microscope, Heart, Stethoscope, Users, MapPin, Phone, Mail, Calendar, Home, Shield, Sparkles } from 'lucide-react';

const AboutSection = () => {
    const team = [
        {
            name: "Dr. Sarah Johnson",
            role: "Chief Dermatologist",
            location: "Nairobi, Kenya",
            joinedYear: "2015",
            bio: "Board-certified dermatologist with extensive experience in medical dermatology, skin biopsies, and histopathology. Specializes in comprehensive skin health education and patient care.",
            expertise: ["Medical Dermatology", "Skin Biopsies", "Histopathology", "Patient Education"],
            image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=800",
            social: {
                linkedin: "#",
                twitter: "#",
                email: "sarah@jomoderma.com",
                website: "#"
            }
        },
        {
            name: "Dr. Michael Chen",
            role: "Cosmetic & Laser Specialist",
            location: "Nairobi, Kenya",
            joinedYear: "2018",
            bio: "Expert in dermoscopy, cryotherapy, and advanced laser treatments. Focused on detailed skin analysis and innovative aesthetic procedures with comprehensive patient care.",
            expertise: ["Dermoscopy", "Cryotherapy", "Laser Treatments", "Skin Analysis"],
            image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=800",
            social: {
                linkedin: "#",
                twitter: "#",
                email: "michael@jomoderma.com",
                website: "#"
            }
        },
        {
            name: "Dr. Emma Williams",
            role: "Specialist in Genetic Conditions",
            location: "Nairobi, Kenya",
            joinedYear: "2020",
            bio: "Dedicated to treating patients with albinism and xeroderma pigmentosa. Leads our skin cancer screening programs and community outreach initiatives for vulnerable populations.",
            expertise: ["Albinism Care", "Xeroderma Pigmentosa", "Skin Cancer Screening", "Community Outreach"],
            image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=800",
            social: {
                linkedin: "#",
                twitter: "#",
                email: "emma@jomoderma.com",
                website: "#"
            }
        }
    ];

    const services = [
        {
            icon: <Stethoscope className="w-6 h-6" />,
            title: "Comprehensive Diagnostics",
            description: "Skin biopsies for histopathology and relevant laboratory tests to support accurate diagnoses"
        },
        {
            icon: <Microscope className="w-6 h-6" />,
            title: "Advanced Procedures",
            description: "Dermoscopy and cryotherapy services with upcoming detailed skin analysis and laser treatments"
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Patient Education",
            description: "Detailed health education on pathogenesis of skin diseases - our added virtue to patient care"
        },
        {
            icon: <Heart className="w-6 h-6" />,
            title: "Community Outreach",
            description: "Skin cancer screening programs, especially for people living with albinism and xeroderma pigmentosa"
        },
        {
            icon: <Home className="w-6 h-6" />,
            title: "Home Visitation",
            description: "Dermatology reviews at home - our kind gesture to immobilized clients who need our care"
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Venereal Disease Consultation",
            description: "Comprehensive consultation and treatment for sexually transmitted infections and related conditions"
        }
    ];

    // Simple UserCard component since the import was missing
    const UserCard = ({ member }) => (
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300">
            <div className="text-center">
                <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-blue-100"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
                <p className="text-sm text-gray-500 mb-4 flex items-center justify-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {member.location}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                <div className="flex flex-wrap gap-1 justify-center mb-4">
                    {member.expertise.map((skill, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                            {skill}
                        </span>
                    ))}
                </div>
                <div className="flex justify-center space-x-3">
                    <a href={`mailto:${member.social.email}`} className="text-gray-400 hover:text-blue-600 transition-colors">
                        <Mail className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </div>
    );

    // Simple Badge component since the import was missing
    const Badge = ({ children, variant = "default", className = "" }) => {
        const baseClasses = "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium";
        const variantClasses = variant === "outline" 
            ? "border border-gray-300 text-gray-700" 
            : "bg-blue-600 text-white";
        
        return (
            <span className={`${baseClasses} ${variantClasses} ${className}`}>
                {children}
            </span>
        );
    };

    // Simple Button component since the import was missing
    const Button = ({ children, variant = "default", className = "", onClick, ...props }) => {
        const baseClasses = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2";
        const variantClasses = variant === "outline" 
            ? "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50" 
            : "bg-blue-600 text-white hover:bg-blue-700 shadow-sm";
        
        return (
            <button 
                className={`${baseClasses} ${variantClasses} ${className}`}
                onClick={onClick}
                {...props}
            >
                {children}
            </button>
        );
    };

    return (
        <div className="min-h-screen bg-gray-50 overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative h-[70vh] min-h-[600px] w-full mb-2 overflow-hidden">
                {/* Enhanced Background with Multiple Layers */}
                <div className="absolute inset-0">
                    {/* Primary Background Image */}
                    <div 
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-[20s] hover:scale-110"
                        style={{
                            backgroundImage: `url('https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=1920&h=1080')`
                        }}
                    />
                    
                    {/* Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/40"/>
                    
                    {/* Animated Particles */}
                    <div className="absolute inset-0">
                        {[...Array(20)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute animate-pulse"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    animationDelay: `${Math.random() * 3}s`,
                                    animationDuration: `${3 + Math.random() * 2}s`
                                }}
                            >
                                <Sparkles className="h-4 w-4 text-white/20" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Hero Content */}
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 h-full mt-16 md:mt-4 flex items-center">
                        {/* Left Content */}
                        <div className="text-center">
                            <div className="mb-4">
                                <Badge variant="outline" className="mb-4 bg-white/10 text-white border-white/30 hover:bg-white/20">
                                    About JOMO DERMA CENTRE
                                </Badge>
                            </div>
                            
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                                We Treat Skin, Hair & Nail Conditions
                            </h1>
                            
                            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-300 mb-6 mx-auto" />
                            
                            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-8 text-center">
                                Leading dermatological care with comprehensive diagnostics, advanced treatments, and compassionate patient education.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                                    <Phone className="w-4 h-4 mr-2" />
                                    Book Consultation
                                </Button>
                                <Button variant="outline" className="border-white text-primary hover:bg-white hover:text-gray-900 px-6 sm:px-8 py-3 rounded-xl font-semibold transition-all duration-300">
                                    Learn More
                                </Button>
                        </div>
                    </div>
                    
                </div>
            </section>
            
            <section className="py-10 md:py-10 bg-white">
                {/* Mission Statement */}
                <div className="max-w-4xl mx-auto mt-16 sm:mt-20">
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8 lg:p-10">
                            <div className="text-center mb-8">
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Our Philosophy</h2>
                                <div className="h-1 w-16 bg-primary mx-auto mb-6" />
                            </div>
                            <blockquote className="text-center">
                                <p className="text-lg sm:text-xl text-gray-700 italic leading-relaxed mb-6">
                                    "We are dedicated to treating skin, hair, and nail conditions with the highest standard of medical excellence. 
                                    Through comprehensive diagnostics, advanced treatments, and detailed patient education, we serve our community 
                                    with special attention to vulnerable populations."
                                </p>
                                <footer className="text-2xl sm:text-3xl font-bold text-primary">
                                    WE TREAT and GOD HEALS
                                </footer>
                            </blockquote>
                        </div>
                    </div>
            </section>
            {/* Services Section */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12 sm:mb-16">
                        <div className="mb-4">
                            <Badge variant="outline" className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
                                Our Services
                            </Badge>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Comprehensive Dermatological Care
                        </h2>
                        <div className="mx-auto w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mb-6" />
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            From advanced diagnostics to community outreach, we provide complete dermatological solutions
                        </p>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {services.map((service, index) => (
                            <div 
                                key={index} 
                                className="group p-6 sm:p-8 rounded-xl bg-gray-50 hover:bg-white border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 hover:scale-105"
                            >
                                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 group-hover:bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 transition-colors duration-300">
                                    <div className="text-blue-600 group-hover:text-white transition-colors duration-300">
                                        {service.icon}
                                    </div>
                                </div>
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 text-center">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 text-center leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 sm:py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12 sm:mb-16">
                        <div className="mb-4">
                            <Badge variant="outline" className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
                                Our Experts
                            </Badge>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Meet Our Dermatologists
                        </h2>
                        <div className="mx-auto w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mb-6" />
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Our board-certified specialists are dedicated to providing exceptional care with deep expertise in dermatological conditions
                        </p>
                    </div>
                    
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {team.map((member, index) => (
                            <div
                                key={index}
                                className="transform transition-transform duration-300 hover:scale-105"
                            >
                                <UserCard member={member} />
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                            Book Consultation
                        </Button>
                    </div>
                </div>
            </section>

            {/* Contact CTA Section */}
            <section className="py-16 sm:py-20 bg-blue-600">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                            Ready to Start Your Skin Health Journey?
                        </h2>
                        <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                            Contact us today for comprehensive dermatological care, from routine check-ups to specialized treatments
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Button className="bg-white text-primary hover:bg-blue-50 px-6 sm:px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto">
                                <Phone className="w-4 h-4 mr-2 text-primary" />
                                <span className="text-primary">Call Us Now</span>
                            </Button>
                            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-6 sm:px-8 py-3 rounded-xl font-semibold transition-all duration-300 w-full sm:w-auto">
                                <Mail className="w-4 h-4 mr-2 text-primary" />
                                <span className="text-primary">Send Message</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutSection;