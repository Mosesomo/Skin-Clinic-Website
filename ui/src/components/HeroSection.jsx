import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck, Stethoscope, HeartPulse, Calendar, Award, Microscope } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Hero slides with dermatology focused content
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=1920&h=1080",
      title: "Expert Dermatological Care",
      subtitle: "Advanced diagnosis and treatment for all skin conditions",
      description: "Our board-certified dermatologists provide comprehensive care using state-of-the-art medical technology and evidence-based treatments.",
      cta: "Book Consultation",
      ctaLink: "/contact",
      secondaryCta: "Emergency Care",
      secondaryCtaLink: "#contact"
    },
    {
      image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=1920&h=1080",
      title: "Advanced Treatment Technologies",
      subtitle: "Latest medical innovations for optimal results",
      description: "From laser treatments to surgical procedures, we utilize cutting-edge technology to deliver the most effective care for your skin health.",
      cta: "Our Services",
      ctaLink: "/services",
      secondaryCta: "Treatment Options",
      secondaryCtaLink: "#options"
    },
    {
      image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=1920&h=1080",
      title: "Comprehensive Skin Health",
      subtitle: "Prevention, diagnosis, and specialized treatment",
      description: "From routine skin cancer screenings to complex dermatological conditions, our expert team provides personalized care tailored to your needs.",
      cta: "Schedule Screening",
      ctaLink: "/contact",
      secondaryCta: "Learn More",
      secondaryCtaLink: "/about"
    },
    {
      image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&q=80&w=1920&h=1080",
      title: "Personalized Patient Care",
      subtitle: "Individual treatment plans for every patient",
      description: "We believe in personalized medicine, creating customized treatment approaches that address your unique skin concerns and health goals.",
      cta: "Meet Our Team",
      ctaLink: "#team",
      secondaryCta: "Patient Portal",
      secondaryCtaLink: "/account"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y, opacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black/50" />
        
        {/* Circular Opacity Overlays */}
        <div className="absolute top-20 left-32 w-96 h-96 bg-black/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-black/40 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-black/25 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-40 w-48 h-48 bg-black/35 rounded-full blur-2xl"></div>
        <div className="absolute top-40 right-1/3 w-72 h-72 bg-black/20 rounded-full blur-3xl"></div>
      </motion.div>

      {/* Carousel */}
      <div className="relative h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90" />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-4xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {/* Medical Badge */}
                  <motion.div 
                    className="inline-flex items-center space-x-2 bg-primary/20 text-white mt-10 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <ShieldCheck className="w-4 h-4" />
                    <span>Accredited Dermatology Clinic</span>
                  </motion.div>

                  <motion.h1
                    className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {slides[currentSlide].title}
                  </motion.h1>
                  <motion.h2
                    className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-200 mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    {slides[currentSlide].subtitle}
                  </motion.h2>
                  <motion.p
                    className="text-lg text-white/90 mb-8 max-w-2xl drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    {slides[currentSlide].description}
                  </motion.p>
                  <motion.div
                    className="flex flex-col sm:flex-row gap-4 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <Link to={slides[currentSlide].ctaLink}>
                      <Button
                        size="lg"
                        className="group bg-blue-600 hover:bg-blue-700 text-white border-0"
                      >
                        <Stethoscope className="mr-2 h-5 w-5" />
                        {slides[currentSlide].cta}
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                      </Button>
                    </Link>
                    <Link to={slides[currentSlide].secondaryCtaLink}>
                      <Button
                        variant="outline"
                        size="lg"
                        className="group border-white/30 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm"
                      >
                        <HeartPulse className="mr-2 h-5 w-5" />
                        {slides[currentSlide].secondaryCta}
                      </Button>
                    </Link>
                  </motion.div>

                  {/* Stats */}
                  {/*<motion.div 
                    className="grid grid-cols-3 gap-8 max-w-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="text-center"
                    >
                      <div className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">20K+</div>
                      <div className="text-sm text-white/80">Patients Treated</div>
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="text-center"
                    >
                      <div className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">15+</div>
                      <div className="text-sm text-white/80">Specialist Doctors</div>
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="text-center"
                    >
                      <div className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">25+</div>
                      <div className="text-sm text-white/80">Years Experience</div>
                    </motion.div>
                  </motion.div>*/}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/30 text-white hover:bg-black/50 transition-all duration-300 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/30 text-white hover:bg-black/50 transition-all duration-300 backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                setIsAutoPlaying(false);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-blue-500 w-8'
                  : 'bg-white/50 hover:bg-white/75 w-2'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 right-8 items-center hidden md:block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-sm">
            <motion.div
              className="w-1 h-3 bg-white/50 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
            />
          </div>
        </motion.div>

        {/* Medical Icons Floating Animation */}
        <motion.div
          className="absolute top-20 right-20 hidden lg:block"
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
            <Microscope className="h-8 w-8 text-white/70" />
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-40 right-32 hidden lg:block"
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        >
          <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
            <Award className="h-6 w-6 text-white/70" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;