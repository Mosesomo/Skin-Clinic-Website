import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, X } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const ProductForm = ({ editProduct = null }) => {
  const [formData, setFormData] = useState({
    name: editProduct?.name || '',
    category: editProduct?.category || '',
    price: editProduct?.price || '',
    stock: editProduct?.stock || '',
    description: editProduct?.description || '',
    requiresPrescription: editProduct?.requiresPrescription || false,
    images: editProduct?.images || [],
  });

  const [dragActive, setDragActive] = useState(false);

  const categories = [
    'Skincare',
    'Treatments',
    'Medications',
    'Tools',
    'Accessories',
  ];

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleFiles = (files) => {
    const validImageTypes = ['image/jpeg', 'image/png', 'image/gif'];
    const newImages = Array.from(files)
      .filter((file) => validImageTypes.includes(file.type))
      .map((file) => ({
        url: URL.createObjectURL(file),
        file,
      }));

    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...newImages],
    }));
  };

  const handleFileInput = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  };

  const removeImage = (index) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto"
    >
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-6">
          {editProduct ? 'Edit Product' : 'Add New Product'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Product Images */}
          <div>
            <Label>Product Images</Label>
            <div
              className={`mt-2 border-2 border-dashed rounded-lg p-6 text-center ${
                dragActive ? 'border-primary bg-primary/5' : 'border-border'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <Input
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                id="file-upload"
                onChange={handleFileInput}
              />
              <Label
                htmlFor="file-upload"
                className="cursor-pointer flex flex-col items-center"
              >
                <Upload className="h-12 w-12 text-muted-foreground mb-2" />
                <span className="text-sm text-muted-foreground">
                  Drag and drop images here, or click to select files
                </span>
              </Label>
            </div>

            {formData.images.length > 0 && (
              <div className="mt-4 grid grid-cols-3 gap-4">
                {formData.images.map((image, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={image.url}
                      alt={`Product ${index + 1}`}
                      className="w-full h-24 object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-1 right-1 p-1 bg-background/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="grid gap-4">
            <div>
              <Label htmlFor="name">Product Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                required
              />
            </div>

            <div>
              <Label htmlFor="category">Category</Label>
              <Select
                value={formData.category}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, category: value }))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category.toLowerCase()}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="price">Price</Label>
                <Input
                  id="price"
                  type="number"
                  min="0"
                  step="0.01"
                  value={formData.price}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, price: e.target.value }))
                  }
                  required
                />
              </div>
              <div>
                <Label htmlFor="stock">Stock</Label>
                <Input
                  id="stock"
                  type="number"
                  min="0"
                  value={formData.stock}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, stock: e.target.value }))
                  }
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
                rows={4}
              />
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                id="prescription"
                checked={formData.requiresPrescription}
                onCheckedChange={(checked) =>
                  setFormData((prev) => ({
                    ...prev,
                    requiresPrescription: checked,
                  }))
                }
              />
              <Label htmlFor="prescription">Requires Prescription</Label>
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button type="submit">
              {editProduct ? 'Update Product' : 'Add Product'}
            </Button>
          </div>
        </form>
      </Card>
    </motion.div>
  );
};

export default ProductForm;