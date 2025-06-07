import React from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  ShoppingBag,
  CreditCard,
  TrendingUp,
  Activity,
  Calendar,
  Package,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  ShoppingCart,
  Tag,
  AlertCircle,
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

const recentProducts = [
  {
    id: 1,
    name: 'Acne Treatment Cream',
    category: 'Treatments',
    price: 45.00,
    purchaseDate: '2024-03-15',
    status: 'completed',
    requiresPrescription: true,
  },
  {
    id: 2,
    name: 'Facial Cleanser',
    category: 'Skincare',
    price: 25.00,
    purchaseDate: '2024-03-14',
    status: 'processing',
    requiresPrescription: false,
  },
  {
    id: 3,
    name: 'Anti-Aging Serum',
    category: 'Treatments',
    price: 89.99,
    purchaseDate: '2024-03-13',
    status: 'completed',
    requiresPrescription: false,
  },
];

const Analytics = ({ detailed = false }) => {
  const stats = [
    {
      title: 'Total Users',
      value: '2,345',
      change: '+12.5%',
      trend: 'up',
      icon: Users,
    },
    {
      title: 'Total Products',
      value: '145',
      change: '+5.2%',
      trend: 'up',
      icon: Package,
    },
    {
      title: 'Total Orders',
      value: '789',
      change: '+18.7%',
      trend: 'up',
      icon: ShoppingCart,
    },
    {
      title: 'Revenue',
      value: '$12,345',
      change: '-2.4%',
      trend: 'down',
      icon: DollarSign,
    },
  ];

  const recentActivity = [
    {
      id: 1,
      action: 'New order placed',
      user: 'John Doe',
      time: '2 minutes ago',
      amount: '$156.00'
    },
    {
      id: 2,
      action: 'Product restocked',
      user: 'Admin',
      time: '15 minutes ago',
      amount: null
    },
    {
      id: 3,
      action: 'Payment received',
      user: 'Sarah Smith',
      time: '1 hour ago',
      amount: '$342.00'
    }
  ];

  const salesData = [
    { category: 'Skincare', progress: 75 },
    { category: 'Treatments', progress: 62 },
    { category: 'Consultations', progress: 88 },
    { category: 'Products', progress: 45 }
  ];

  const getStatusBadge = (status) => {
    const statusConfig = {
      completed: { color: 'bg-green-500', label: 'Completed' },
      processing: { color: 'bg-yellow-500', label: 'Processing' },
      cancelled: { color: 'bg-red-500', label: 'Cancelled' },
    };

    const config = statusConfig[status];
    return (
      <Badge
        variant="outline"
        className={`${config.color} text-white`}
      >
        {config.label}
      </Badge>
    );
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <stat.icon className="h-5 w-5 text-primary" />
                </div>
                <Badge
                  variant={stat.trend === 'up' ? 'default' : 'destructive'}
                  className="flex items-center space-x-1"
                >
                  {stat.trend === 'up' ? (
                    <ArrowUpRight className="h-4 w-4" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4" />
                  )}
                  <span>{stat.change}</span>
                </Badge>
              </div>
              <div className="mt-4">
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Recent Products */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        <Card className="p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <h2 className="text-xl font-semibold">Recent Purchases</h2>
            <Badge variant="outline" className="w-fit font-normal">
              Last 7 days
            </Badge>
          </div>
          <div className="space-y-4">
            {recentProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Package className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">{product.name}</h3>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mt-1">
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <Tag className="h-3 w-3" />
                        ${product.price.toFixed(2)}
                      </Badge>
                      <span className="hidden sm:inline">•</span>
                      <span>{product.category}</span>
                      <span className="hidden sm:inline">•</span>
                      <span className="text-xs">{product.purchaseDate}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 self-start sm:self-center">
                  {product.requiresPrescription && (
                    <Badge variant="destructive" className="flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      Rx
                    </Badge>
                  )}
                  {getStatusBadge(product.status)}
                </div>
              </motion.div>
            ))}
          </div>
        </Card>
      </motion.div>

      {detailed && (
        <>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Recent Activity */}
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Recent Activity</h3>
                <Activity className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="mt-4 space-y-4">
                {recentActivity.map((activity) => (
                  <motion.div
                    key={activity.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center justify-between border-b pb-2 last:border-0"
                  >
                    <div>
                      <p className="font-medium">{activity.action}</p>
                      <p className="text-sm text-muted-foreground">
                        {activity.user} • {activity.time}
                      </p>
                    </div>
                    {activity.amount && (
                      <span className="font-semibold">{activity.amount}</span>
                    )}
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* Sales Overview */}
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Sales Overview</h3>
                <TrendingUp className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="mt-4 space-y-4">
                {salesData.map((item, index) => (
                  <motion.div
                    key={item.category}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm font-medium">{item.category}</span>
                      <span className="text-sm text-muted-foreground">
                        {item.progress}%
                      </span>
                    </div>
                    <Progress value={item.progress} />
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>

          {/* Calendar View Placeholder */}
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Appointment Calendar</h3>
              <Calendar className="h-5 w-5 text-muted-foreground" />
            </div>
            <div className="mt-4">
              <p className="text-muted-foreground">
                Calendar integration coming soon...
              </p>
            </div>
          </Card>
        </>
      )}
    </div>
  );
};

export default Analytics; 