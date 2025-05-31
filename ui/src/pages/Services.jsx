import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight, ChevronLeft, ChevronRight, Clock, Users, BadgeCheck, Sparkles } from 'lucide-react';
import ServiceCard from '@/components/ui/service-card';
import { services, serviceCategories } from '@/data/services';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const ServicesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredServices, setFilteredServices] = useState(services);
  
  useEffect(() => {
    const filtered = services.filter(service => {
      const matchesCategory = selectedCategory === 'all' 
        ? true 
        : serviceCategories.find(cat => cat.id === selectedCategory)?.services.includes(service.id);
      
      const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesCategory && matchesSearch;
    });
    
    setFilteredServices(filtered);
  }, [selectedCategory, searchQuery]);

  const features = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Quick Appointments",
      description: "Get seen by our specialists within 24-48 hours"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Team",
      description: "Board-certified dermatologists with years of experience"
    },
    {
      icon: <BadgeCheck className="w-6 h-6" />,
      title: "Quality Care",
      description: "State-of-the-art facilities and advanced treatments"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Personalized Treatment",
      description: "Customized care plans for your specific needs"
    }
  ];
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[480px] flex items-center justify-center overflow-hidden bg-gradient-to-r from-primary/5 to-accent/5">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=2070&auto=format&fit=crop"
            alt="Dermatology Services"
            className="w-full h-full object-cover opacity-50"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                Professional Dermatology Services
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-xl">
                Experience comprehensive skin care solutions tailored to your unique needs, delivered by our expert dermatologists.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <button 
                  onClick={() => document.getElementById('services-section').scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Explore Services
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Features Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-background rounded-xl border border-border hover:border-primary/20 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section id="services-section" className="py-20 bg-background relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 bg-grid-pattern opacity-3" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl font-bold text-foreground mb-4"
            >
              Our Services
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Discover our range of specialized dermatological treatments
            </motion.p>
          </div>

          {/* Search and Filter Section */}
          <div className="mb-12 space-y-6">
            {/* Search Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-md mx-auto"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
            </motion.div>

            {/* Category Filter */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-3"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory('all')}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                    : 'bg-card text-muted-foreground hover:text-foreground border border-border hover:bg-accent/10'
                }`}
              >
                All Services
              </motion.button>
              {serviceCategories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-xl font-medium capitalize transition-all ${
                    selectedCategory === category.id
                      ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                      : 'bg-card text-muted-foreground hover:text-foreground border border-border hover:bg-accent/10'
                  }`}
                >
                  {category.title}
                </motion.button>
              ))}
            </motion.div>
          </div>
          
          {/* Services Grid/Slider */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredServices.length > 0 ? (
                filteredServices.map((service, index) => (
                  <ServiceCard key={service.id} service={service} index={index} />
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="col-span-full text-center py-12"
                >
                  <p className="text-lg text-muted-foreground">
                    No services found matching your criteria.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Services Slider */}
          <div className="md:hidden">
            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false
              }}
              className="pb-12"
            >
              {filteredServices.map((service, index) => (
                <SwiperSlide key={service.id}>
                  <ServiceCard service={service} index={index} />
                </SwiperSlide>
              ))}
              <div className="swiper-button-prev !text-primary !w-10 !h-10 !bg-background/80 !backdrop-blur-sm rounded-full shadow-lg"></div>
              <div className="swiper-button-next !text-primary !w-10 !h-10 !bg-background/80 !backdrop-blur-sm rounded-full shadow-lg"></div>
            </Swiper>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Skin?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Book a consultation with our expert dermatologists and start your journey to healthier skin today.
            </p>
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors inline-flex items-center gap-2">
              Book Appointment
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;