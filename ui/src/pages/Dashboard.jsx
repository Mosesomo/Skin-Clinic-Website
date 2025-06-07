import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Bell,
  Menu,
  X,
  Home,
  Package,
  Users,
  ShoppingCart,
  BarChart2,
  Settings,
  LogOut,
  ArrowLeft
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Analytics from '@/components/dashboard/admin/Analytics';
import ProductList from '@/components/dashboard/admin/ProductList';
import OrdersTable from '@/components/dashboard/admin/OrdersTable';
import UsersTable from '@/components/dashboard/admin/UsersTable';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const isAdmin = true; // Replace with actual auth logic

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: Home },
    { id: 'products', label: 'Products', icon: Package, adminOnly: true },
    { id: 'orders', label: 'Orders', icon: ShoppingCart },
    { id: 'users', label: 'Users', icon: Users, adminOnly: true },
    { id: 'analytics', label: 'Analytics', icon: BarChart2, adminOnly: true },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const handleLogout = () => {
    // Add logout logic here
    navigate('/login');
  };

  const handleBack = () => {
    navigate('/');
  };

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    if (isMobile) {
      setIsSidebarOpen(false);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <Analytics />;
      case 'products':
        return <ProductList />;
      case 'orders':
        return <OrdersTable />;
      case 'users':
        return <UsersTable />;
      case 'analytics':
        return <Analytics detailed />;
      case 'settings':
        return <div>Settings Content</div>;
      default:
        return <Analytics />;
    }
  };

  return (
    <div className="flex min-h-screen bg-background">
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
                <h2 className="text-2xl font-bold">Skin Doctor</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsSidebarOpen(false)}
                  className="lg:hidden"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>

              <nav className="flex-1 space-y-2">
                {sidebarItems.map((item) => {
                  if (item.adminOnly && !isAdmin) return null;
                  const Icon = item.icon;
                  return (
                    <Button
                      key={item.id}
                      variant={activeTab === item.id ? 'secondary' : 'ghost'}
                      className="w-full justify-start"
                      onClick={() => handleTabChange(item.id)}
                    >
                      <Icon className="mr-2 h-5 w-5" />
                      {item.label}
                    </Button>
                  );
                })}
              </nav>

              <Separator className="my-4" />
              <div className="space-y-2">
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  onClick={handleBack}
                >
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Back to Website
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-destructive"
                  onClick={handleLogout}
                >
                  <LogOut className="mr-2 h-5 w-5" />
                  Logout
                </Button>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className={`flex-1 ${isSidebarOpen && !isMobile ? 'lg:ml-[280px]' : ''}`}>
        {/* Header */}
        <header className="sticky top-0 z-20 flex h-16 items-center justify-between bg-background px-4 sm:px-6 shadow">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
            <h2 className="text-lg font-semibold hidden sm:block">
              {sidebarItems.find(item => item.id === activeTab)?.label}
            </h2>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500" />
            </Button>
            <Separator orientation="vertical" className="h-8 hidden sm:block" />
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-primary" />
              <div className="hidden sm:block">
                <p className="text-sm font-medium">Admin User</p>
                <p className="text-xs text-muted-foreground">admin@example.com</p>
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
  );
};

export default Dashboard; 