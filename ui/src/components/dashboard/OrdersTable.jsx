import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  Filter,
  ChevronDown,
  Eye,
  CheckCircle,
  XCircle,
  Clock,
  Package,
  MoreVertical,
  Calendar,
  User,
  DollarSign,
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';

const mockOrders = [
  {
    id: 'ORD001',
    customer: 'John Doe',
    email: 'john@example.com',
    products: ['Acne Treatment Cream', 'Facial Cleanser'],
    total: 89.99,
    status: 'processing',
    date: '2024-03-15',
  },
  {
    id: 'ORD002',
    customer: 'Sarah Smith',
    email: 'sarah@example.com',
    products: ['Anti-Aging Serum'],
    total: 129.99,
    status: 'completed',
    date: '2024-03-14',
  },
  {
    id: 'ORD003',
    customer: 'Mike Johnson',
    email: 'mike@example.com',
    products: ['Moisturizer', 'Sunscreen', 'Toner'],
    total: 156.50,
    status: 'pending',
    date: '2024-03-13',
  },
];

const OrdersTable = () => {
  const [orders] = useState(mockOrders);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedOrder, setSelectedOrder] = useState(null);

  const filteredOrders = orders.filter((order) => {
    const matchesSearch = (
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.email.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status) => {
    const statusConfig = {
      completed: { color: 'bg-green-500', label: 'Completed' },
      processing: { color: 'bg-yellow-500', label: 'Processing' },
      pending: { color: 'bg-blue-500', label: 'Pending' },
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

  // Mobile order card component
  const OrderCard = ({ order }) => (
    <Card className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h3 className="font-medium">{order.id}</h3>
            {getStatusBadge(order.status)}
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            {order.date}
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>View Details</DropdownMenuItem>
            <DropdownMenuItem>Update Status</DropdownMenuItem>
            <DropdownMenuItem className="text-red-600">Cancel Order</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm">
          <User className="h-4 w-4 text-muted-foreground" />
          <span>{order.customer}</span>
          <span className="text-muted-foreground">•</span>
          <span className="text-muted-foreground">{order.email}</span>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <Package className="h-4 w-4 text-muted-foreground" />
          <span>{order.products.join(', ')}</span>
        </div>

        <div className="flex items-center gap-2 text-sm font-medium">
          <DollarSign className="h-4 w-4 text-muted-foreground" />
          ${order.total.toFixed(2)}
        </div>
      </div>
    </Card>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      <Card className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h2 className="text-2xl font-bold">Orders</h2>
          <div className="relative flex-1 sm:flex-initial max-w-sm">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search orders..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 w-full"
            />
          </div>
        </div>

        {/* Desktop Table View */}
        <div className="rounded-md border hidden md:block">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Products</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>
                    <div>
                      {order.customer}
                      <div className="text-sm text-muted-foreground">
                        {order.email}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{order.products.join(', ')}</TableCell>
                  <TableCell>${order.total.toFixed(2)}</TableCell>
                  <TableCell>{getStatusBadge(order.status)}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Update Status</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          Cancel Order
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Mobile Card View */}
        <div className="grid gap-4 md:hidden">
          {filteredOrders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      </Card>

      <Dialog open={!!selectedOrder} onOpenChange={() => setSelectedOrder(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Order Details - {selectedOrder?.id}</DialogTitle>
          </DialogHeader>
          {selectedOrder && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Customer</p>
                  <p className="font-medium">{selectedOrder.customer}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Date</p>
                  <p className="font-medium">{selectedOrder.date}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Status</p>
                  <div className="mt-1">{getStatusBadge(selectedOrder.status)}</div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Payment</p>
                  <Badge
                    variant={selectedOrder.status === 'completed' ? 'default' : 'secondary'}
                    className="mt-1"
                  >
                    {selectedOrder.status === 'completed' ? 'Paid' : 'Pending Payment'}
                  </Badge>
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-2">Items</p>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Product</TableHead>
                      <TableHead className="text-right">Quantity</TableHead>
                      <TableHead className="text-right">Price</TableHead>
                      <TableHead className="text-right">Total</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {selectedOrder.products.map((product, index) => (
                      <TableRow key={index}>
                        <TableCell>{product}</TableCell>
                        <TableCell className="text-right">{selectedOrder.quantity}</TableCell>
                        <TableCell className="text-right">
                          ${selectedOrder.price.toFixed(2)}
                        </TableCell>
                        <TableCell className="text-right">
                          ${(selectedOrder.quantity * selectedOrder.price).toFixed(2)}
                        </TableCell>
                      </TableRow>
                    ))}
                    <TableRow>
                      <TableCell colSpan={3} className="text-right font-medium">
                        Total
                      </TableCell>
                      <TableCell className="text-right font-bold">
                        ${selectedOrder.total.toFixed(2)}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};

export default OrdersTable;