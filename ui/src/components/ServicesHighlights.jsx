import { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceCard from '@/components/ui/service-card';
import { services } from '@/data/services';

const ServicesHighlights = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const displayedServices = showAll ? services : services.slice(0, 3);

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y, opacity }}
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <div className="mx-auto w-20 h-1 bg-gradient-to-r from-primary to-primary/50 mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive dermatological services tailored to your unique skin needs. 
            We combine cutting-edge technology with personalized care for optimal results.
          </p>
        </motion.div>

        {/* Services Display - Carousel Layout */}
        <div className="relative h-[600px] mb-16">
          {/* Navigation Buttons */}
          <button
            onClick={() => setActiveIndex((prev) => (prev - 1 + services.length) % services.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full cursor-pointer bg-stone-700 backdrop-blur-sm border border-primary text-white hover:text-primary hover:bg-primary/10 transition-colors"
            aria-label="Previous service"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => setActiveIndex((prev) => (prev + 1) % services.length)}
            className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-stone-700 backdrop-blur-sm border border-primary text-white hover:text-primary hover:bg-primary/10 transition-colors"
            aria-label="Next service"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Services Display */}
          <div className="relative w-full h-full">
            <AnimatePresence mode="popLayout">
              {services.map((service, index) => {
                const distance = (index - activeIndex + services.length) % services.length;
                const isActive = distance === 0;
                const offset = distance <= services.length / 2 ? distance : distance - services.length;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0.5, x: offset * 100 }}
                    animate={{
                      opacity: isActive ? 1 : 0.3,
                      x: offset * 300,
                      y: Math.abs(offset) * 30,
                      scale: isActive ? 1 : 0.8,
                      zIndex: isActive ? 1 : 0
                    }}
                    exit={{ opacity: 0, x: offset * 100 }}
                    transition={{
                      duration: 0.8,
                      ease: "easeIn",
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.1}
                    onDragEnd={(e, { offset, velocity }) => {
                      const swipe = Math.abs(offset.x) * velocity.x;
                      if (swipe < -100) {
                        setActiveIndex((prev) => (prev + 1) % services.length);
                      } else if (swipe > 100) {
                        setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
                      }
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg"
                  >
                    <div className={`block rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/30 backdrop-blur-sm border ${isActive ? `border-stone-700 border-4` : 'border-white/10'} transform-gpu transition-all duration-300 ${isActive ? 'hover:border-primary' : ''}`}>
                      {/* Image Container */}
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                        {/* Category Badge */}
                        <div className="absolute top-4 left-4 flex items-center gap-2">
                          <span className="px-3 py-1 text-xs font-medium text-white bg-black/30 backdrop-blur-sm rounded-full">
                            {service.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        {/* Highlight Section */}
                        <div className="mb-6 p-4 bg-primary/5 backdrop-blur-sm rounded-lg border border-primary/10">
                          <h3 className="text-xl font-semibold text-foreground mb-2">
                            {service.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {service.description}
                          </p>
                        </div>

                        {/* Features */}
                        <ul className="mb-4 space-y-2">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <div className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary">
                                <ArrowRight className="w-4 h-4" />
                              </div>
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>

                        <Link
                          to={`/services/${service.slug}`}
                          className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                        >
                          <span className="text-sm font-medium">Learn More</span>
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Service Indicators */}
        <div className="flex justify-center gap-2 mb-8">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeIndex ? 'w-8 bg-primary' : 'bg-primary/30'}`}
              aria-label={`Go to service ${index + 1}`}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20">
          <div className="px-6 py-3 rounded-xl bg-background/80 backdrop-blur-sm">
            <p className="text-lg text-muted-foreground mb-4">
              Ready to experience our premium dermatological care?
            </p>
            <Link
              to="/services"
              className="group inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-all"
            >
              View All Services
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHighlights;