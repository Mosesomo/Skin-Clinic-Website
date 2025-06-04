import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  Plus,
  Edit,
  Trash2,
  Package,
  Tag,
  AlertCircle,
  MoreVertical,
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
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Mock products data
const mockProducts = [
  {
    id: 1,
    name: 'Acne Treatment Cream',
    category: 'Treatments',
    price: 45.00,
    stock: 50,
    requiresPrescription: true,
    status: 'in-stock',
  },
  {
    id: 2,
    name: 'Facial Cleanser',
    category: 'Skincare',
    price: 25.00,
    stock: 75,
    requiresPrescription: false,
    status: 'in-stock',
  },
  {
    id: 3,
    name: 'Anti-Aging Serum',
    category: 'Treatments',
    price: 89.99,
    stock: 5,
    requiresPrescription: false,
    status: 'low-stock',
  },
  {
    id: 4,
    name: 'Tretinoin Cream',
    category: 'Medications',
    price: 65.00,
    stock: 0,
    requiresPrescription: true,
    status: 'out-of-stock',
  },
];

const ProductList = () => {
  const [products, setProducts] = useState(mockProducts);
  const [searchQuery, setSearchQuery] = useState('');
  const [deleteDialog, setDeleteDialog] = useState({ open: false, product: null });

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDeleteProduct = () => {
    setProducts(products.filter((p) => p.id !== deleteDialog.product.id));
    setDeleteDialog({ open: false, product: null });
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      'in-stock': { color: 'bg-green-500', label: 'In Stock' },
      'low-stock': { color: 'bg-yellow-500', label: 'Low Stock' },
      'out-of-stock': { color: 'bg-red-500', label: 'Out of Stock' },
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

  // Mobile product card component
  const ProductCard = ({ product }) => (
    <Card className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h3 className="font-medium">{product.name}</h3>
          <Badge variant="secondary" className="flex w-fit items-center gap-1">
            <Package className="h-3 w-3" />
            {product.category}
          </Badge>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Edit className="h-4 w-4 mr-2" />
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem
              className="text-red-600"
              onClick={() => setDeleteDialog({ open: true, product })}
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex flex-wrap gap-2">
        <Badge variant="outline" className="flex items-center gap-1">
          <Tag className="h-3 w-3" />
          ${product.price.toFixed(2)}
        </Badge>
        {getStatusBadge(product.status)}
        {product.requiresPrescription && (
          <Badge variant="destructive" className="flex items-center gap-1">
            <AlertCircle className="h-3 w-3" />
            Rx Required
          </Badge>
        )}
      </div>

      <div className="text-sm text-muted-foreground">
        Stock: {product.stock} units
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
          <h2 className="text-2xl font-bold">Products</h2>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <div className="relative flex-1 sm:flex-initial">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-full"
              />
            </div>
            <Button className="flex items-center space-x-2">
              <Plus className="h-4 w-4" />
              <span>Add Product</span>
            </Button>
          </div>
        </div>

        {/* Desktop Table View */}
        <div className="rounded-md border hidden md:block">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Prescription</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="flex w-fit items-center gap-1">
                      <Package className="h-3 w-3" />
                      {product.category}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="flex w-fit items-center gap-1">
                      <Tag className="h-3 w-3" />
                      ${product.price.toFixed(2)}
                    </Badge>
                  </TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>{getStatusBadge(product.status)}</TableCell>
                  <TableCell>
                    {product.requiresPrescription ? (
                      <Badge variant="destructive" className="flex w-fit items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        Required
                      </Badge>
                    ) : (
                      <Badge variant="secondary" className="w-fit">No</Badge>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end space-x-2">
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-red-500 hover:text-red-600"
                        onClick={() => setDeleteDialog({ open: true, product })}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Mobile Card View */}
        <div className="grid gap-4 md:hidden">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Card>

      <Dialog
        open={deleteDialog.open}
        onOpenChange={() => setDeleteDialog({ open: false, product: null })}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Product</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete "{deleteDialog.product?.name}"? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex-col sm:flex-row gap-2">
            <Button
              variant="outline"
              onClick={() => setDeleteDialog({ open: false, product: null })}
              className="w-full sm:w-auto"
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleDeleteProduct}
              className="w-full sm:w-auto"
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};

export default ProductList; 