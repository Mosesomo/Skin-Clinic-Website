import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useNavigate } from "react-router-dom"
import {
  Bell,
  Menu,
  X,
  Home,
  Calendar,
  ShoppingBag,
  User,
  Settings,
  LogOut,
  ArrowLeft,
  Heart,
  Clock,
  HelpCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import DashboardOverview from "@/components/dashboard/user/DashboardOverview"
import OrdersHistory from "@/components/dashboard/user/OrderHistory"
import Appointments from "@/components/dashboard/user/Appointments"
import UserProfile from "@/components/dashboard/user/UserProfile"
import Favorites from "@/components/dashboard/user/Favorites"
import MedicalRecords from "@/components/dashboard/user/MedicalRecords"
import UserSettings from "@/components/dashboard/user/UserSetting"

const UserDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [activeTab, setActiveTab] = useState("overview")
  const [isMobile, setIsMobile] = useState(false)
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Appointment Reminder",
      message: "Your appointment with Dr. Sarah is tomorrow at 10:00 AM",
      isRead: false,
    },
    {
      id: 2,
      title: "Order Shipped",
      message: "Your order #12345 has been shipped and will arrive in 2-3 days",
      isRead: false,
    },
    {
      id: 3,
      title: "Prescription Renewal",
      message: "Your prescription for Tretinoin Cream is due for renewal",
      isRead: true,
    },
  ])
  const [showNotifications, setShowNotifications] = useState(false)
  const navigate = useNavigate()

  // User data (replace with actual user data from auth context)
  const user = {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    avatar:
      "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    memberSince: "January 2023",
  }

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false)
      } else {
        setIsSidebarOpen(true)
      }
    }

    handleResize() // Initial check
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const sidebarItems = [
    { id: "overview", label: "Dashboard", icon: Home },
    { id: "orders", label: "My Orders", icon: ShoppingBag },
    { id: "appointments", label: "Appointments", icon: Calendar },
    { id: "favorites", label: "Favorites", icon: Heart },
    { id: "medical-records", label: "Medical Records", icon: Clock },
    { id: "profile", label: "My Profile", icon: User },
    { id: "settings", label: "Settings", icon: Settings },
  ]

  const handleLogout = () => {
    // Add logout logic here
    navigate("/login")
  }

  const handleBack = () => {
    navigate("/")
  }

  const handleTabChange = (tabId) => {
    setActiveTab(tabId)
    if (isMobile) {
      setIsSidebarOpen(false)
    }
  }

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications)
  }

  const markAllAsRead = () => {
    setNotifications(notifications.map((notif) => ({ ...notif, isRead: true })))
  }

  const unreadCount = notifications.filter((notif) => !notif.isRead).length

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return <DashboardOverview user={user} />
      case "orders":
        return <OrdersHistory />
      case "appointments":
        return <Appointments />
      case "favorites":
        return <Favorites />
      case "medical-records":
        return <MedicalRecords />
      case "profile":
        return <UserProfile user={user} />
      case "settings":
        return <UserSettings user={user} />
      default:
        return <DashboardOverview user={user} />
    }
  }

  return (
    <div className="flex min-h-screen bg-background mt-8">
      {/* Overlay for mobile */}
      <AnimatePresence>
        {isSidebarOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.aside
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            exit={{ x: -280 }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed left-0 z-40 h-screen w-[280px] bg-card shadow-lg overflow-y-auto"
          >
            <div className="flex h-full flex-col px-4 py-6">
              <div className="mb-8 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">DC</span>
                  </div>
                  <h2 className="text-xl font-bold">DermaCare</h2>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(false)} className="lg:hidden">
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* User Profile Summary */}
              <div className="mb-6 flex flex-col items-center text-center">
                <Avatar className="h-20 w-20 mb-3 border-2 border-primary">
                  <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-lg">{user.name}</h3>
                <p className="text-sm text-muted-foreground">{user.email}</p>
                <Badge variant="outline" className="mt-2 bg-blue-50 text-blue-700">
                  Premium Member
                </Badge>
              </div>

              <Separator className="my-4" />

              <nav className="flex-1 space-y-1">
                {sidebarItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <Button
                      key={item.id}
                      variant={activeTab === item.id ? "secondary" : "ghost"}
                      className={`w-full justify-start ${activeTab === item.id ? "bg-blue-50 text-blue-700" : ""}`}
                      onClick={() => handleTabChange(item.id)}
                    >
                      <Icon className="mr-2 h-5 w-5" />
                      {item.label}
                    </Button>
                  )
                })}
              </nav>

              <Separator className="my-4" />
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start" onClick={handleBack}>
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Back to Website
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-destructive hover:text-destructive hover:bg-red-50"
                  onClick={handleLogout}
                >
                  <LogOut className="mr-2 h-5 w-5" />
                  Logout
                </Button>
              </div>

              {/* Help Section */}
              <div className="mt-6 bg-blue-50 rounded-lg p-4">
                <div className="flex items-center space-x-2 text-blue-700 mb-2">
                  <HelpCircle className="h-5 w-5" />
                  <h4 className="font-medium">Need Help?</h4>
                </div>
                <p className="text-sm text-blue-600 mb-3">Our support team is just a click away</p>
                <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700">
                  Contact Support
                </Button>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className={`flex-1 ${isSidebarOpen && !isMobile ? "lg:ml-[280px]" : ""}`}>
        {/* Header */}
        <header className="sticky top-0 z-20 flex h-16 items-center justify-between bg-background px-4 sm:px-6 shadow">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
              <Menu className="h-5 w-5" />
            </Button>
            <h2 className="text-lg font-semibold hidden sm:block">
              {sidebarItems.find((item) => item.id === activeTab)?.label}
            </h2>
          </div>
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <div className="relative">
              <Button variant="ghost" size="icon" className="relative" onClick={toggleNotifications}>
                <Bell className="h-5 w-5" />
                {unreadCount > 0 && (
                  <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-red-500 text-[10px] text-white flex items-center justify-center">
                    {unreadCount}
                  </span>
                )}
              </Button>

              {/* Notifications Dropdown */}
              <AnimatePresence>
                {showNotifications && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg overflow-hidden z-50"
                  >
                    <div className="p-3 bg-blue-50 border-b flex items-center justify-between">
                      <h3 className="font-medium">Notifications</h3>
                      <Button variant="ghost" size="sm" onClick={markAllAsRead} className="text-xs h-8">
                        Mark all as read
                      </Button>
                    </div>
                    <div className="max-h-[300px] overflow-y-auto">
                      {notifications.length > 0 ? (
                        notifications.map((notification) => (
                          <div
                            key={notification.id}
                            className={`p-3 border-b last:border-0 ${
                              !notification.isRead ? "bg-blue-50" : ""
                            } hover:bg-gray-50`}
                          >
                            <div className="flex items-start">
                              <div className="flex-1">
                                <p className="text-sm font-medium">{notification.title}</p>
                                <p className="text-xs text-gray-500 mt-1">{notification.message}</p>
                              </div>
                              {!notification.isRead && <div className="h-2 w-2 rounded-full bg-blue-600 mt-1.5"></div>}
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="p-4 text-center text-gray-500">No notifications</div>
                      )}
                    </div>
                    <div className="p-2 bg-gray-50 border-t text-center">
                      <Button variant="ghost" size="sm" className="text-xs w-full text-blue-600">
                        View all notifications
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Separator orientation="vertical" className="h-8 hidden sm:block" />

            {/* User Menu */}
            <div className="flex items-center space-x-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="hidden sm:block">
                <p className="text-sm font-medium">{user.name}</p>
                <p className="text-xs text-muted-foreground">Member since {user.memberSince}</p>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="p-4 sm:p-6">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="container mx-auto max-w-7xl"
          >
            {renderContent()}
          </motion.div>
        </main>
      </div>
    </div>
  )
}

export default UserDashboard
