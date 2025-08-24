

import InputField from "@/components/InputField";
import { Button } from "@/components/ui/button";
import { Upload, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useItemStore } from "@/components/store/useItemStore";
import { useState } from "react";

export default function AddItem() {
  const addItem = useItemStore((state) => state.addItem);

  const [form, setForm] = useState({
    itemCode: "",
    itemName: "",
    category: "",
    quantity: "",
    uom: "",
    price: "",
    tax: "",
    supplier: "",
    reorderLevel: "",
    minOrderQty: "",
    preferredStock: "",
    expiryDate: "",
    customAttributes: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addItem({
      itemCode: form.itemCode,
      itemName: form.itemName,
      category: form.category,
      quantity: Number(form.quantity),
      uom: form.uom,
      price: Number(form.price),
      tax: Number(form.tax),
      supplier: form.supplier,
      reorderLevel: Number(form.reorderLevel),
      minOrderQty: Number(form.minOrderQty),
      preferredStock: Number(form.preferredStock),
      expiryDate: form.expiryDate,
      customAttributes: form.customAttributes,
      description: form.description,
    });

    setForm({
      itemCode: "",
      itemName: "",
      category: "",
      quantity: "",
      uom: "",
      price: "",
      tax: "",
      supplier: "",
      reorderLevel: "",
      minOrderQty: "",
      preferredStock: "",
      expiryDate: "",
      customAttributes: "",
      description: "",
    });

    alert("Item saved!");
  };

  return (
    <div className="w-full p-5 md:ml-2 mt-5">
      {/* Header */}
      <div className="flex items-center gap-2 p-4 border-b border-gray-200">
        <Link to="/items">
          <Button variant="ghost" size="sm" className="p-1">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-lg font-medium">Add Item</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Info */}
        <div>
          <h2 className="text-base font-medium text-gray-800 mt-5">Basic Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-3">
            <InputField name="itemCode" label="Item Code" value={form.itemCode} onChange={handleChange} placeholder="ITM-001" />
            <InputField name="itemName" label="Item Name" value={form.itemName} onChange={handleChange} placeholder="Samsung Galaxy S23" />
            <InputField name="category" label="Category" value={form.category} onChange={handleChange} placeholder="Electronics" />
            <InputField name="quantity" label="Quantity" value={form.quantity} onChange={handleChange} placeholder="100" />
            <InputField name="uom" label="Unit of Measure" value={form.uom} onChange={handleChange} placeholder="pcs, box, kg" />
            <InputField name="price" label="Price Per Unit" value={form.price} onChange={handleChange} placeholder="500" />
            <InputField name="tax" label="Tax / VAT (%)" value={form.tax} onChange={handleChange} placeholder="13" />
          </div>
        </div>

        {/* Advanced Info */}
        <div className="mt-10">
          <h2 className="text-base font-medium text-gray-900">Advanced Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-3">
            <InputField name="supplier" label="Supplier" value={form.supplier} onChange={handleChange} placeholder="ABC Suppliers" />
            <InputField name="reorderLevel" label="Reorder Level" value={form.reorderLevel} onChange={handleChange} placeholder="20" />
            <InputField name="minOrderQty" label="Minimum Order Qty" value={form.minOrderQty} onChange={handleChange} placeholder="5" />
            <InputField name="preferredStock" label="Preferred Stock Level" value={form.preferredStock} onChange={handleChange} placeholder="200" />
            <InputField name="expiryDate" label="Expiry Date" value={form.expiryDate} onChange={handleChange} placeholder="yyyy-mm-dd" />
            <InputField name="customAttributes" label="Custom Attributes" value={form.customAttributes} onChange={handleChange} placeholder="Color: Red, Size: L" />
          </div>

          {/* Description */}
          <div className="mt-5">
            <label className="mb-1 text-sm font-medium">Item Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Enter detailed description"
              className="w-full h-28 border rounded-md p-3 text-sm"
            />
          </div>
        </div>

        {/* Image Upload */}
        <div className="space-y-2 mt-3">
          <h2 className="text-base font-medium text-gray-900">Add Images</h2>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8">
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="p-3 bg-gray-100 rounded-full">
                <Upload className="h-6 w-6 text-gray-400" />
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600">Drag and drop files here</p>
                <Button variant="link" className="text-blue-600 p-0 h-auto font-normal">Browse Files</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col md:flex-row gap-3 pt-2 mb-10">
          <Button variant="outline" className="px-8 w-full md:w-auto">Cancel</Button>
          <Button type="submit" className="px-8 bg-black hover:bg-gray-800 w-full md:w-auto">Save</Button>
        </div>
      </form>
    </div>
  );
}
