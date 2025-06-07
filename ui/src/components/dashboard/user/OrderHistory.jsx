import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Eye, Download, ShoppingBag, Package, Truck, Check, X } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const OrdersHistory = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [selectedOrder, setSelectedOrder] = useState(null)

  // Mock data
  const orders = [
    {
      id: "ORD-5923",
      date: "June 2, 2025",
      items: [
        {
          id: 1,
          name: "Tretinoin Cream",
          quantity: 1,
          price: 4500,
          image: "https://images.pexels.com/photos/4047149/pexels-photo-4047149.jpeg?auto=compress&cs=tinysrgb&w=400",
        },
        {
          id: 2,
          name: "Hydrocortisone Cream",
          quantity: 2,
          price: 1500,
          image: "https://images.pexels.com/photos/4047153/pexels-photo-4047153.jpeg?auto=compress&cs=tinysrgb&w=400",
        },
      ],
      total: 7500,
      status: "delivered",
      paymentMethod: "Credit Card",
      shippingAddress: "123 Main St, Nairobi, Kenya",
      trackingNumber: "KE12345678",
      deliveryDate: "June 5, 2025",
    },
    {
      id: "ORD-5845",
      date: "May 28, 2025",
      items: [
        {
          id: 3,
          name: "Ketoconazole Shampoo",
          quantity: 1,
          price: 2200,
          image: "https://images.pexels.com/photos/4047148/pexels-photo-4047148.jpeg?auto=compress&cs=tinysrgb&w=400",
        },
      ],
      total: 2200,
      status: "processing",
      paymentMethod: "M-Pesa",
      shippingAddress: "456 Park Ave, Nairobi, Kenya",
      trackingNumber: "KE87654321",
      deliveryDate: "June 10, 2025",
    },
    {
      id: "ORD-5721",
      date: "May 15, 2025",
      items: [
        {
          id: 4,
          name: "Clindamycin Gel",
          quantity: 1,
          price: 2500,
          image: "https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=400",
        },
        {
          id: 5,
          name: "Benzoyl Peroxide Wash",
          quantity: 1,
          price: 1500,
          image: "https://images.pexels.com/photos/3683056/pexels-photo-3683056.jpeg?auto=compress&cs=tinysrgb&w=400",
        },
      ],
      total: 4000,
      status: "delivered",
      paymentMethod: "Credit Card",
      shippingAddress: "789 River Rd, Nairobi, Kenya",
      trackingNumber: "KE23456789",
      deliveryDate: "May 20, 2025",
    },
    {
      id: "ORD-5632",
      date: "April 30, 2025",
      items: [
        {
          id: 6,
          name: "Salicylic Acid Solution",
          quantity: 2,
          price: 1800,
          image: "https://images.pexels.com/photos/4047152/pexels-photo-4047152.jpeg?auto=compress&cs=tinysrgb&w=400",
        },
      ],
      total: 3600,
      status: "cancelled",
      paymentMethod: "M-Pesa",
      shippingAddress: "321 Hill St, Nairobi, Kenya",
      trackingNumber: "N/A",
      deliveryDate: "N/A",
    },
  ]

  const getStatusIcon = (status) => {
    switch (status) {
      case "processing":
        return <Package className="h-4 w-4 text-blue-600" />
      case "shipped":
        return <Truck className="h-4 w-4 text-purple-600" />
      case "delivered":
        return <Check className="h-4 w-4 text-green-600" />
      case "cancelled":
        return <X className="h-4 w-4 text-red-600" />
      default:
        return <ShoppingBag className="h-4 w-4 text-gray-600" />
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "processing":
        return "bg-blue-100 text-blue-700"
      case "shipped":
        return "bg-purple-100 text-purple-700"
      case "delivered":
        return "bg-green-100 text-green-700"
      case "cancelled":
        return "bg-red-100 text-red-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const filteredOrders = orders.filter((order) => {
    const matchesSearch = order.id.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = filterStatus === "all" || order.status === filterStatus
    return matchesSearch && matchesStatus
  })

  const handleViewOrder = (order) => {
    setSelectedOrder(order)
  }

  const handleCloseOrderDetails = () => {
    setSelectedOrder(null)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">My Orders</h1>
          <p className="text-muted-foreground">View and track your order history</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <ShoppingBag className="mr-2 h-4 w-4" />
          Continue Shopping
        </Button>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <TabsList>
            <TabsTrigger value="all">All Orders</TabsTrigger>
            <TabsTrigger value="processing">Processing</TabsTrigger>
            <TabsTrigger value="delivered">Delivered</TabsTrigger>
            <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
          </TabsList>

          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search orders..."
                className="pl-9 w-[200px]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="processing">Processing</SelectItem>
                <SelectItem value="shipped">Shipped</SelectItem>
                <SelectItem value="delivered">Delivered</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <TabsContent value="all" className="mt-0">
          <OrdersTable
            orders={filteredOrders}
            getStatusIcon={getStatusIcon}
            getStatusColor={getStatusColor}
            onViewOrder={handleViewOrder}
          />
        </TabsContent>
        <TabsContent value="processing" className="mt-0">
          <OrdersTable
            orders={orders.filter((order) => order.status === "processing")}
            getStatusIcon={getStatusIcon}
            getStatusColor={getStatusColor}
            onViewOrder={handleViewOrder}
          />
        </TabsContent>
        <TabsContent value="delivered" className="mt-0">
          <OrdersTable
            orders={orders.filter((order) => order.status === "delivered")}
            getStatusIcon={getStatusIcon}
            getStatusColor={getStatusColor}
            onViewOrder={handleViewOrder}
          />
        </TabsContent>
        <TabsContent value="cancelled" className="mt-0">
          <OrdersTable
            orders={orders.filter((order) => order.status === "cancelled")}
            getStatusIcon={getStatusIcon}
            getStatusColor={getStatusColor}
            onViewOrder={handleViewOrder}
          />
        </TabsContent>
      </Tabs>

      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-lg shadow-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto"
          >
            <div className="sticky top-0 bg-blue-600 text-white p-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Order Details - {selectedOrder.id}</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleCloseOrderDetails}
                className="text-white hover:bg-blue-700"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Order Information</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Order Date:</span>
                      <span className="text-sm font-medium">{selectedOrder.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Status:</span>
                      <Badge className={getStatusColor(selectedOrder.status)}>
                        {selectedOrder.status.charAt(0).toUpperCase() + selectedOrder.status.slice(1)}
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Payment Method:</span>
                      <span className="text-sm font-medium">{selectedOrder.paymentMethod}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Total Amount:</span>
                      <span className="text-sm font-medium">KSh {selectedOrder.total.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Shipping Information</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Address:</span>
                      <span className="text-sm font-medium">{selectedOrder.shippingAddress}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Tracking Number:</span>
                      <span className="text-sm font-medium">{selectedOrder.trackingNumber}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Delivery Date:</span>
                      <span className="text-sm font-medium">{selectedOrder.deliveryDate}</span>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-sm font-medium text-muted-foreground mb-3">Order Items</h3>
              <div className="border rounded-lg overflow-hidden mb-6">
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
                    {selectedOrder.items.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>
                          <div className="flex items-center space-x-3">
                            <div className="h-10 w-10 rounded bg-gray-100 overflow-hidden">
                              <img
                                src={item.image || "/placeholder.svg"}
                                alt={item.name}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <span className="font-medium">{item.name}</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">{item.quantity}</TableCell>
                        <TableCell className="text-right">KSh {item.price.toLocaleString()}</TableCell>
                        <TableCell className="text-right">
                          KSh {(item.price * item.quantity).toLocaleString()}
                        </TableCell>
                      </TableRow>
                    ))}
                    <TableRow>
                      <TableCell colSpan={3} className="text-right font-medium">
                        Subtotal
                      </TableCell>
                      <TableCell className="text-right font-medium">
                        KSh {selectedOrder.total.toLocaleString()}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>

              <div className="flex justify-end space-x-3">
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Download Invoice
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700">Track Order</Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}

const OrdersTable = ({ orders, getStatusIcon, getStatusColor, onViewOrder }) => {
  return (
    <Card>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Items</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>{order.items.length}</TableCell>
                  <TableCell>KSh {order.total.toLocaleString()}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Badge className={getStatusColor(order.status)}>
                        <span className="flex items-center">
                          {getStatusIcon(order.status)}
                          <span className="ml-1">{order.status.charAt(0).toUpperCase() + order.status.slice(1)}</span>
                        </span>
                      </Badge>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" onClick={() => onViewOrder(order)}>
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8">
                  <div className="flex flex-col items-center justify-center text-muted-foreground">
                    <ShoppingBag className="h-10 w-10 mb-2" />
                    <h3 className="font-medium mb-1">No orders found</h3>
                    <p className="text-sm">You haven't placed any orders yet.</p>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

export default OrdersHistory
