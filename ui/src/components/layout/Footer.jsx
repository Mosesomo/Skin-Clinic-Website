import { useState, useEffect } from 'react';
import { Sparkles, Award, MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, ChevronRight } from 'lucide-react';


// Footer Component with Animations
const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredLink, setHoveredLink] = useState(null);
    
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.1 }
      );
      
      const footerElement = document.getElementById('footer');
      if (footerElement) {
        observer.observe(footerElement);
      }
      
      return () => observer.disconnect();
    }, []);
  
    const quickLinks = [
      { name: 'About Us', href: '#about' },
      { name: 'Services', href: '#services' },
      { name: 'Our Team', href: '#team' },
      { name: 'Patient Reviews', href: '#reviews' },
      { name: 'Contact', href: '#contact' }
    ];
  
    const services = [
      { name: 'Acne Treatment', href: '#' },
      { name: 'Anti-Aging', href: '#' },
      { name: 'Laser Therapy', href: '#' },
      { name: 'Chemical Peels', href: '#' },
      { name: 'Skin Cancer Screening', href: '#' }
    ];
  
    const socialLinks = [
      { 
        name: 'Facebook', 
        icon: Facebook, 
        href: 'https://facebook.com/dermacare',
        color: 'hover:text-blue-500' 
      },
      { 
        name: 'Instagram', 
        icon: Instagram, 
        href: 'https://instagram.com/dermacare',
        color: 'hover:text-pink-500' 
      },
      { 
        name: 'Twitter', 
        icon: Twitter, 
        href: 'https://twitter.com/dermacare',
        color: 'hover:text-blue-400' 
      }
    ];
  
    return (
      <footer 
        id="footer"
        className="bg-gradient-to-br from-card via-background to-accent/5 border-t border-border relative overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-accent/30 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/10 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
            
            {/* Company Info */}
            <div className={`space-y-6 transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center transform hover:rotate-12 transition-transform duration-300">
                  <Sparkles className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-2xl font-bold text-foreground">DermaCare</span>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                Leading dermatology clinic providing expert skin care solutions with 
                cutting-edge treatments and personalized care for all your skin needs.
              </p>
              
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Award className="w-4 h-4 text-primary" />
                <span>Award-Winning Dermatology Care Since 1998</span>
              </div>
              
              {/* Newsletter Signup */}
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Stay Updated</h4>
                <div className="flex space-x-2">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 text-sm border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                  />
                  <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transform hover:scale-105 transition-all duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
  
            {/* Quick Links */}
            <div className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`} style={{ transitionDelay: '200ms' }}>
              <h3 className="text-lg font-semibold text-foreground mb-6 relative">
                Quick Links
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-primary rounded-full"></div>
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      onMouseEnter={() => setHoveredLink(`quick-${index}`)}
                      onMouseLeave={() => setHoveredLink(null)}
                      className={`text-muted-foreground hover:text-primary transition-all duration-300 flex items-center space-x-2 group ${
                        hoveredLink === `quick-${index}` ? 'translate-x-2' : ''
                      }`}
                    >
                      <ChevronRight className={`w-4 h-4 transition-all duration-300 ${
                        hoveredLink === `quick-${index}` ? 'opacity-100' : 'opacity-0'
                      }`} />
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Services */}
            <div className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`} style={{ transitionDelay: '400ms' }}>
              <h3 className="text-lg font-semibold text-foreground mb-6 relative">
                Our Services
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-primary rounded-full"></div>
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.href}
                      onMouseEnter={() => setHoveredLink(`service-${index}`)}
                      onMouseLeave={() => setHoveredLink(null)}
                      className={`text-muted-foreground hover:text-primary transition-all duration-300 flex items-center space-x-2 group ${
                        hoveredLink === `service-${index}` ? 'translate-x-2' : ''
                      }`}
                    >
                      <ChevronRight className={`w-4 h-4 transition-all duration-300 ${
                        hoveredLink === `service-${index}` ? 'opacity-100' : 'opacity-0'
                      }`} />
                      <span>{service.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Contact Info */}
            <div className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`} style={{ transitionDelay: '600ms' }}>
              <h3 className="text-lg font-semibold text-foreground mb-6 relative">
                Contact Info
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-primary rounded-full"></div>
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3 group">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      123 Medical Center Drive<br />
                      Nairobi, Kenya 00100
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 group">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      +254 700 123 456<br />
                      Emergency: +254 700 123 457
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 group">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      info@dermacare.com<br />
                      appointments@dermacare.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 group">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <Clock className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Mon - Fri: 8:00 AM - 6:00 PM<br />
                      Sat: 9:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          {/* Social Media & Bottom Section */}
          <div className={`border-t border-border pt-8 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`} style={{ transitionDelay: '800ms' }}>
            
            {/* Social Media Links */}
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
                <h4 className="font-semibold text-foreground">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 bg-background border border-border rounded-full flex items-center justify-center text-muted-foreground hover:border-primary ${social.color} transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg group`}
                      >
                        <IconComponent className="w-5 h-5 group-hover:animate-pulse" />
                      </a>
                    );
                  })}
                </div>
              </div>
              
              {/* Emergency Contact */}
              <div className="flex items-center space-x-3 bg-destructive/10 text-destructive px-4 py-2 rounded-full border border-destructive/20">
                <Phone className="w-4 h-4 animate-pulse" />
                <span className="text-sm font-medium">24/7 Emergency: +254 700 999 000</span>
              </div>
            </div>
            
            {/* Copyright */}
            <div className="mt-8 pt-8 border-t border-border text-center">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <p className="text-sm text-muted-foreground">
                  © 2024 DermaCare Clinic. All rights reserved. | Designed with ❤️ for better skin health
                </p>
                <div className="flex space-x-6 text-sm">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                    Privacy Policy
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                    Terms of Service
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                    Cookie Policy
                  </a>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        
        {/* Floating Animation Elements */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary animate-pulse"></div>
      </footer>
    );
  };

export default Footer;