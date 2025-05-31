import React, { useState, useEffect } from 'react';
import { 
  Sparkles,
  Menu,
  X,
  ShoppingCart,
  User,
  ChevronDown,
  Stethoscope
} from 'lucide-react';
// Note: Replace with your routing solution (react-router-dom, Next.js router, etc.)
import { motion, AnimatePresence } from 'framer-motion';

// Header Component
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  // Mock location for demo - replace with your router's useLocation hook
  const location = { pathname: '/' };
  
  const navItems = [
    { id: '', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'treatments', label: 'Treatments' },
    { id: 'contact', label: 'Contact' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('header')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200/20' 
            : 'bg-black/20 backdrop-blur-md'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="/" className="flex items-center space-x-3 group">
              <motion.div 
                whileHover={{ rotate: 180, scale: 1.1 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className={`w-9 h-9 lg:w-10 lg:h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                  isScrolled 
                    ? 'bg-blue-600 shadow-md' 
                    : 'bg-white/20 backdrop-blur-sm border border-white/30'
                }`}
              >
                <Stethoscope className={`w-5 h-5 lg:w-6 lg:h-6 transition-colors duration-300 ${
                  isScrolled ? 'text-white' : 'text-white'
                }`} />
              </motion.div>
              <span className={`text-xl lg:text-2xl font-bold transition-colors duration-300 ${
                isScrolled 
                  ? 'text-gray-900 group-hover:text-blue-600' 
                  : 'text-white group-hover:text-blue-200'
              }`}>
                DermaCare
              </span>
            </a>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  href={`/${item.id}`}
                  key={item.id}
                  className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 hover:scale-105 ${
                    location.pathname === '/' + item.id 
                      ? isScrolled 
                        ? 'text-blue-600' 
                        : 'text-white'
                      : isScrolled 
                        ? 'text-gray-700 hover:text-blue-600' 
                        : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.label}
                  {location.pathname === '/' + item.id && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className={`absolute inset-0 rounded-xl -z-10 transition-colors duration-300 ${
                        isScrolled 
                          ? 'bg-blue-50 border border-blue-100' 
                          : 'bg-white/20 backdrop-blur-sm border border-white/30'
                      }`}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </a>
              ))}
            </nav>
            
            {/* Desktop Right Section */}
            <div className="hidden lg:flex items-center space-x-3">
              {/* Cart */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative p-2.5 rounded-xl transition-all duration-300 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' 
                    : 'text-white/90 hover:text-white hover:bg-white/20 backdrop-blur-sm'
                }`}
              >
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-medium"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </motion.button>

              {/* Account */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-2.5 rounded-xl transition-all duration-300 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' 
                    : 'text-white/90 hover:text-white hover:bg-white/20 backdrop-blur-sm'
                }`}
              >
                <User className="w-5 h-5" />
              </motion.button>

              {/* Book Appointment */}
              <motion.button
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl ${
                  isScrolled 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-white text-blue-600 hover:bg-blue-50'
                }`}
              >
                Book Appointment
              </motion.button>
            </div>
            
            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              className={`lg:hidden p-2 rounded-xl transition-all duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' 
                  : 'text-white hover:bg-white/20 backdrop-blur-sm'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-80 max-w-[85vw] z-50 bg-white/95 backdrop-blur-xl shadow-2xl lg:hidden"
          >
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200/50">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <Stethoscope className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg font-bold text-gray-900">DermaCare</span>
                </div>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-gray-600 hover:text-gray-900 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Mobile Menu Content */}
              <div className="flex-1 overflow-y-auto p-6">
                <nav className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <a
                        href={`/${item.id}`}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block w-full px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 ${
                          location.pathname === '/' + item.id
                            ? 'bg-blue-50 text-blue-600 border border-blue-100'
                            : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                        }`}
                      >
                        {item.label}
                      </a>
                    </motion.div>
                  ))}
                </nav>

                {/* Mobile Actions */}
                <div className="mt-8 pt-6 border-t border-gray-200/50 space-y-4">
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-xl transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <ShoppingCart className="w-5 h-5" />
                      <span>Shopping Cart</span>
                    </div>
                    {cartCount > 0 && (
                      <span className="w-6 h-6 bg-red-500 text-white text-sm rounded-full flex items-center justify-center">
                        {cartCount}
                      </span>
                    )}
                  </motion.button>

                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex items-center space-x-3 w-full px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-xl transition-colors"
                  >
                    <User className="w-5 h-5" />
                    <span>My Account</span>
                  </motion.button>
                </div>
              </div>

              {/* Mobile Menu Footer */}
              <div className="p-6 border-t border-gray-200/50">
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-xl text-base font-semibold hover:bg-blue-700 transition-colors shadow-lg"
                >
                  Book Appointment
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;