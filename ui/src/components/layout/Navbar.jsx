import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, ShoppingCart, User, Stethoscope, LayoutDashboard, LogIn, UserPlus } from "lucide-react"
import { LoginModal } from "./LoginModal"
import { RegisterModal } from "./RegisterModal"

// Header Component
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [cartCount, setCartCount] = useState(0)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showRegisterModal, setShowRegisterModal] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false) // Replace with actual auth state
  const location = useLocation()
  const isAdmin = true // Replace with actual auth logic

  const navItems = [
    { id: "", label: "Home", path: "/" },
    { id: "about", label: "About", path: "/about" },
    { id: "services", label: "Services", path: "/services" },
    { id: "shop", label: "Chemist", path: "/shop" },
    { id: "contact", label: "Contact", path: "/contact" },
    ...(isAdmin ? [{ id: "dashboard", label: "Dashboard", path: "/dashboard", icon: LayoutDashboard }] : []),
  ]

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest("header") && !event.target.closest(".mobile-menu")) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [isMenuOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  const toggleMenu = (e) => {
    e.stopPropagation()
    setIsMenuOpen(!isMenuOpen)
  }

  // Check if a path is active
  const isActivePath = (path) => {
    if (path === "/") {
      return location.pathname === "/"
    }
    return location.pathname.startsWith(path)
  }

  const handleLoginSuccess = () => {
    setIsLoggedIn(true)
    setShowLoginModal(false)
  }

  const handleRegisterSuccess = () => {
    setIsLoggedIn(true)
    setShowRegisterModal(false)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    // Add logout logic here
  }

  const switchToRegister = () => {
    setShowLoginModal(false)
    setShowRegisterModal(true)
  }

  const switchToLogin = () => {
    setShowRegisterModal(false)
    setShowLoginModal(true)
  }

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? "bg-white shadow-lg border-b border-gray-200" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="/" className="flex items-center space-x-3 group">
              <div
                className={`w-9 h-9 lg:w-10 lg:h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:rotate-180 hover:scale-110 ${
                  isScrolled ? "bg-blue-600 shadow-md" : "bg-white/20 border border-white/30"
                }`}
              >
                <Stethoscope
                  className={`w-5 h-5 lg:w-6 lg:h-6 transition-colors duration-300 ${
                    isScrolled ? "text-white" : "text-white"
                  }`}
                />
              </div>
              <span
                className={`text-xl lg:text-2xl font-bold transition-colors duration-300 ${
                  isScrolled ? "text-gray-900 group-hover:text-blue-600" : "text-white group-hover:text-blue-200"
                }`}
              >
                DermaCare
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`flex items-center space-x-1 text-sm font-medium transition-colors duration-300 ${
                    isScrolled
                      ? isActivePath(item.path)
                        ? "text-blue-600"
                        : "text-gray-700 hover:text-blue-600"
                      : "text-white hover:text-blue-200"
                  }`}
                >
                  {item.icon && <item.icon className="w-4 h-4 mr-1" />}
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>

            {/* Desktop Right Section */}
            <div className="hidden lg:flex items-center space-x-3">
              {/* Cart */}
              <button
                className={`relative p-2.5 rounded-xl transition-all duration-300 hover:scale-105 ${
                  isScrolled
                    ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                    : "text-white/90 hover:text-white hover:bg-white/20"
                }`}
              >
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-medium">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Auth Section */}
              {isLoggedIn ? (
                <div className="flex items-center space-x-2">
                  <button
                    className={`p-2.5 rounded-xl transition-all duration-300 hover:scale-105 ${
                      isScrolled
                        ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                        : "text-white/90 hover:text-white hover:bg-white/20"
                    }`}
                  >
                    <Link to="/account">
                      <User className="w-5 h-5" />
                    </Link>
                  </button>
                  <button
                    onClick={handleLogout}
                    className={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 ${
                      isScrolled
                        ? "text-gray-700 hover:text-red-600 hover:bg-red-50"
                        : "text-white/90 hover:text-red-200 hover:bg-white/20"
                    }`}
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setShowLoginModal(true)}
                    className={`flex items-center space-x-1 px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 hover:scale-105 ${
                      isScrolled
                        ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                        : "text-white/90 hover:text-white hover:bg-white/20"
                    }`}
                  >
                    <LogIn className="w-4 h-4" />
                    <span>Login</span>
                  </button>
                  <button
                    onClick={() => setShowRegisterModal(true)}
                    className={`flex items-center space-x-1 px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 hover:scale-105 ${
                      isScrolled
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-white text-blue-600 hover:bg-blue-50"
                    }`}
                  >
                    <UserPlus className="w-4 h-4" />
                    <span>Register</span>
                  </button>
                </div>
              )}

              {/* Book Appointment */}
              <button
                className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-0.5 ${
                  isScrolled
                    ? "bg-primary text-white"
                    : "bg-white  text-primary"
                }`}
              >
                Book Appointment
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden p-2 rounded-xl transition-all duration-300 ${
                isScrolled ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50" : "text-white hover:bg-white/20"
              }`}
              onClick={toggleMenu}
            >
              <div className={`transform transition-transform duration-300 ${isMenuOpen ? "rotate-180" : "rotate-0"}`}>
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`mobile-menu fixed top-0 right-0 h-full w-80 max-w-[85vw] z-50 bg-white shadow-2xl lg:hidden transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <Stethoscope className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-gray-900">DermaCare</span>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-gray-600 hover:text-gray-900 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Content */}
          <div className="flex-1 overflow-y-auto p-6">
            <nav className="space-y-2">
              {navItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`transform transition-all duration-200 ${
                    isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-5 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block w-full px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 ${
                      isActivePath(item.path)
                        ? "bg-blue-50 text-blue-600 border border-blue-100"
                        : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                    }`}
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
            </nav>

            {/* Mobile Actions */}
            <div className="mt-8 pt-6 border-t border-gray-200 space-y-4">
              <button
                className={`flex items-center justify-between w-full px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-xl transition-all duration-200 ${
                  isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-5 opacity-0"
                }`}
                style={{ transitionDelay: "500ms" }}
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
              </button>

              {/* Mobile Auth Section */}
              {isLoggedIn ? (
                <>
                  <button
                    className={`flex items-center space-x-3 w-full px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-xl transition-all duration-200 ${
                      isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-5 opacity-0"
                    }`}
                    style={{ transitionDelay: "600ms" }}
                  >
                    <Link to="/account">
                      <User className="w-5 h-5" />
                      <span>My Account</span>
                    </Link>
                  </button>
                  <button
                    onClick={handleLogout}
                    className={`flex items-center space-x-3 w-full px-4 py-3 text-base font-medium text-red-600 hover:text-red-700 hover:bg-red-50 rounded-xl transition-all duration-200 ${
                      isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-5 opacity-0"
                    }`}
                    style={{ transitionDelay: "700ms" }}
                  >
                    <LogIn className="w-5 h-5" />
                    <span>Logout</span>
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => {
                      setShowLoginModal(true)
                      setIsMenuOpen(false)
                    }}
                    className={`flex items-center space-x-3 w-full px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-xl transition-all duration-200 ${
                      isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-5 opacity-0"
                    }`}
                    style={{ transitionDelay: "600ms" }}
                  >
                    <LogIn className="w-5 h-5" />
                    <span>Login</span>
                  </button>
                  <button
                    onClick={() => {
                      setShowRegisterModal(true)
                      setIsMenuOpen(false)
                    }}
                    className={`flex items-center space-x-3 w-full px-4 py-3 text-base font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-xl transition-all duration-200 ${
                      isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-5 opacity-0"
                    }`}
                    style={{ transitionDelay: "700ms" }}
                  >
                    <UserPlus className="w-5 h-5" />
                    <span>Register</span>
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Mobile Menu Footer */}
          <div className="p-6 border-t border-gray-200">
            <button
              onClick={() => setIsMenuOpen(false)}
              className={`w-full bg-green-600 text-white px-6 py-3 rounded-xl text-base font-semibold hover:bg-green-700 transition-all duration-200 shadow-lg hover:scale-102 ${
                isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
              }`}
              style={{ transitionDelay: "800ms" }}
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>

      {/* Auth Modals */}
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onSuccess={handleLoginSuccess}
        onSwitchToRegister={switchToRegister}
      />
      <RegisterModal
        isOpen={showRegisterModal}
        onClose={() => setShowRegisterModal(false)}
        onSuccess={handleRegisterSuccess}
        onSwitchToLogin={switchToLogin}
      />
    </>
  )
}

export default Navbar
