"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Upload, X, Plus, Tag, Edit, Info } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const ProductForm = ({ editProduct = null, isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: editProduct?.name || "",
    category: editProduct?.category || "",
    price: editProduct?.price || "",
    stock: editProduct?.stock || "",
    description: editProduct?.description || "",
    requiresPrescription: editProduct?.requiresPrescription || false,
    images: editProduct?.images || [],
  })

  const [dragActive, setDragActive] = useState(false)
  const [categories, setCategories] = useState(["Skincare", "Treatments", "Medications", "Tools", "Accessories"])
  const [showCategoryDialog, setShowCategoryDialog] = useState(false)
  const [newCategory, setNewCategory] = useState("")
  const [hasChanges, setHasChanges] = useState(false)

  useEffect(() => {
    if (editProduct) {
      const hasChanged =
        formData.name !== (editProduct.name || "") ||
        formData.category !== (editProduct.category || "") ||
        formData.price !== (editProduct.price || "") ||
        formData.stock !== (editProduct.stock || "") ||
        formData.description !== (editProduct.description || "") ||
        formData.requiresPrescription !== (editProduct.requiresPrescription || false)
      setHasChanges(hasChanged)
    }
  }, [formData, editProduct])

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    },
  }

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  }

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files)
    }
  }

  const handleFiles = (files) => {
    const validImageTypes = ["image/jpeg", "image/png", "image/gif"]
    const newImages = Array.from(files)
      .filter((file) => validImageTypes.includes(file.type))
      .map((file) => ({
        url: URL.createObjectURL(file),
        file,
      }))

    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...newImages],
    }))
  }

  const handleFileInput = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files)
    }
  }

  const removeImage = (index) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit?.(formData)
    onClose()
  }

  const handleCreateCategory = () => {
    if (newCategory.trim() && !categories.includes(newCategory.trim())) {
      const updatedCategories = [...categories, newCategory.trim()]
      setCategories(updatedCategories)
      setFormData((prev) => ({ ...prev, category: newCategory.trim() }))
      setNewCategory("")
      setShowCategoryDialog(false)
    }
  }

  if (!isOpen) return null

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/50 backdrop-blur-md"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Modal Content */}
      <motion.div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Card className="p-0 shadow-2xl">
          {/* Header */}
          <div
            className={`relative p-6 ${editProduct ? "bg-gradient-to-r from-blue-600 to-blue-500" : "bg-gradient-to-r from-primary to-primary/60"} text-white`}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_70%)]"></div>
            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-3">
                {editProduct && <Edit className="h-6 w-6" />}
                <h2 className="text-2xl font-bold">{editProduct ? "Edit Product" : "Add New Product"}</h2>
              </div>
              <Button variant="ghost" size="icon" onClick={onClose} className="text-white hover:bg-white/10">
                <X className="h-5 w-5" />
              </Button>
            </div>
            {editProduct && <p className="text-white/80 mt-2">Editing: {editProduct.name}</p>}
          </div>

          {/* Form Content */}
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Original vs Current Values - Only show when editing */}
              {editProduct && (
                <motion.div
                  className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 }}
                >
                  <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                    <Info className="h-4 w-4" />
                    Original Product Information
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="text-blue-700 font-medium">Price:</span>
                      <p className="text-blue-600">${editProduct.price}</p>
                    </div>
                    <div>
                      <span className="text-blue-700 font-medium">Stock:</span>
                      <p className="text-blue-600">{editProduct.stock} units</p>
                    </div>
                    <div>
                      <span className="text-blue-700 font-medium">Category:</span>
                      <p className="text-blue-600">{editProduct.category}</p>
                    </div>
                    <div>
                      <span className="text-blue-700 font-medium">Prescription:</span>
                      <p className="text-blue-600">{editProduct.requiresPrescription ? "Required" : "Not Required"}</p>
                    </div>
                  </div>
                </motion.div>
              )}
              {/* Product Images */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                <Label className="text-base font-semibold">Product Images</Label>
                <div
                  className={`mt-2 border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
                    dragActive ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
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
                  <Label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center">
                    <Upload className="h-12 w-12 text-muted-foreground mb-2" />
                    <span className="text-sm text-muted-foreground">
                      Drag and drop images here, or click to select files
                    </span>
                  </Label>
                </div>

                {formData.images.length > 0 && (
                  <div className="mt-4 grid grid-cols-3 gap-4">
                    {formData.images.map((image, index) => (
                      <motion.div
                        key={index}
                        className="relative group"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <img
                          src={image.url || "/placeholder.svg"}
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
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>

              {/* Product Details */}
              <motion.div
                className="grid gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div>
                  <Label htmlFor="name" className="text-base font-semibold">
                    Product Name
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    className={`mt-2 ${editProduct && formData.name !== (editProduct.name || "") ? "ring-2 ring-blue-200 border-blue-300" : ""}`}
                    placeholder="Enter product name"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="category" className="text-base font-semibold">
                    Category
                  </Label>
                  <div className="flex gap-2 mt-2">
                    <Select
                      value={formData.category}
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, category: value }))}
                    >
                      <SelectTrigger className="flex-1">
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
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => setShowCategoryDialog(true)}
                      className="shrink-0"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="price" className="text-base font-semibold">
                      Price ($)
                    </Label>
                    <Input
                      id="price"
                      type="number"
                      min="0"
                      step="0.01"
                      value={formData.price}
                      onChange={(e) => setFormData((prev) => ({ ...prev, price: e.target.value }))}
                      className={`mt-2 ${editProduct && formData.price !== (editProduct.price || "") ? "ring-2 ring-blue-200 border-blue-300" : ""}`}
                      placeholder="0.00"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="stock" className="text-base font-semibold">
                      Stock Quantity
                    </Label>
                    <Input
                      id="stock"
                      type="number"
                      min="0"
                      value={formData.stock}
                      onChange={(e) => setFormData((prev) => ({ ...prev, stock: e.target.value }))}
                      className={`mt-2 ${editProduct && formData.stock !== (editProduct.stock || "") ? "ring-2 ring-blue-200 border-blue-300" : ""}`}
                      placeholder="0"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="description" className="text-base font-semibold">
                    Description
                  </Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        description: e.target.value,
                      }))
                    }
                    className={`mt-2 ${editProduct && formData.description !== (editProduct.description || "") ? "ring-2 ring-blue-200 border-blue-300" : ""}`}
                    rows={4}
                    placeholder="Enter product description..."
                  />
                </div>

                <div className="flex items-center space-x-3 p-4 bg-muted/50 rounded-lg">
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
                  <div>
                    <Label htmlFor="prescription" className="text-base font-semibold">
                      Requires Prescription
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Enable if this product requires a prescription to purchase
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Form Actions */}
              <motion.div
                className="flex justify-between pt-4 border-t"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div>
                  {editProduct && (
                    <Button
                      variant="outline"
                      type="button"
                      onClick={() =>
                        setFormData({
                          name: editProduct.name || "",
                          category: editProduct.category || "",
                          price: editProduct.price || "",
                          stock: editProduct.stock || "",
                          description: editProduct.description || "",
                          requiresPrescription: editProduct.requiresPrescription || false,
                          images: editProduct.images || [],
                        })
                      }
                      className="text-blue-600 border-blue-200 hover:bg-blue-50"
                    >
                      Reset to Original
                    </Button>
                  )}
                </div>
                <div className="flex space-x-4">
                  <Button variant="outline" type="button" onClick={onClose}>
                    Cancel
                  </Button>
                  <Button type="submit" className={editProduct ? "bg-blue-600 hover:bg-blue-700" : ""}>
                    {editProduct ? "Update Product" : "Add Product"}
                  </Button>
                </div>
              </motion.div>
            </form>
          </div>
        </Card>
      </motion.div>

      {/* Category Creation Dialog */}
      <Dialog open={showCategoryDialog} onOpenChange={setShowCategoryDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Tag className="h-5 w-5" />
              Create New Category
            </DialogTitle>
            <DialogDescription>Add a new product category to organize your inventory better.</DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <Label htmlFor="new-category">Category Name</Label>
            <Input
              id="new-category"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              placeholder="Enter category name"
              className="mt-2"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault()
                  handleCreateCategory()
                }
              }}
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowCategoryDialog(false)}>
              Cancel
            </Button>
            <Button onClick={handleCreateCategory} disabled={!newCategory.trim()}>
              Create Category
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </motion.div>
  )
}

export default ProductForm
