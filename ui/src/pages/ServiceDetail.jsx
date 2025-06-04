import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { services } from '@/data/services';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Clock, CheckCircle, AlertCircle, Phone, Calendar } from 'lucide-react';

const ServiceDetail = () => {
    const { slug } = useParams();
    const service = services.find(s => s.slug === slug);

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Service Not Found</h1>
                    <p className="text-gray-600 mb-4">The service you're looking for doesn't exist.</p>
                    <Button onClick={() => window.history.back()}>Go Back</Button>
                </div>
            </div>
        );
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                duration: 0.8
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[400px] flex items-center">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img 
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
                </div>

                {/* Content */}
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="max-w-3xl"
                    >
                        <motion.div variants={itemVariants}>
                            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
                                {service.category}
                            </Badge>
                        </motion.div>
                        
                        <motion.h1 
                            variants={itemVariants}
                            className="text-4xl md:text-5xl font-bold text-white mb-6"
                        >
                            {service.title}
                        </motion.h1>
                        
                        <motion.p 
                            variants={itemVariants}
                            className="text-xl text-gray-200 mb-8 leading-relaxed"
                        >
                            {service.description}
                        </motion.p>

                        <motion.div 
                            variants={itemVariants}
                            className="flex flex-wrap gap-4"
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
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="md:col-span-2 space-y-8">
                            {/* Features */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-xl shadow-md p-6"
                            >
                                <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {service.features.map((feature, index) => (
                                        <div key={index} className="flex items-start space-x-3">
                                            <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                                            <span className="text-gray-700">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Treatment Process */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-xl shadow-md p-6"
                            >
                                <h2 className="text-2xl font-bold mb-6">Treatment Process</h2>
                                <div className="space-y-4">
                                    {service.process?.map((step, index) => (
                                        <div key={index} className="flex items-start space-x-4">
                                            <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                                                {index + 1}
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                                                <p className="text-gray-600">{step.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            {/* Quick Info */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-xl shadow-md p-6"
                            >
                                <h3 className="text-xl font-bold mb-4">Service Information</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-3">
                                        <Clock className="w-5 h-5 text-gray-400" />
                                        <div>
                                            <p className="text-sm text-gray-500">Duration</p>
                                            <p className="font-medium">{service.duration}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Calendar className="w-5 h-5 text-gray-400" />
                                        <div>
                                            <p className="text-sm text-gray-500">Availability</p>
                                            <p className="font-medium">{service.availability}</p>
                                        </div>
                                    </div>
                                </div>
                                <Button className="w-full mt-6">
                                    Book Now
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </motion.div>

                            {/* FAQs */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-xl shadow-md p-6"
                            >
                                <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
                                <div className="space-y-4">
                                    {service.faqs?.map((faq, index) => (
                                        <div key={index} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                                            <h4 className="font-medium text-gray-900 mb-2">{faq.question}</h4>
                                            <p className="text-gray-600 text-sm">{faq.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetail; 