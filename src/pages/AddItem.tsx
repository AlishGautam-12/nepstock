import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowLeft, Upload } from 'lucide-react'
import React from 'react'
import { Label } from 'recharts'

export  const AddItem = () => {
  return (
    <div className='ml-0 py-4 p-5 ml-30 w-320  overflow-y-auto'>
        <div className='flex item-center gap-4 p-4 border-b border-gray-200'>
            <Button variant="ghost" size="sm" className='p-1'>
                <ArrowLeft className='h-4 w-4'/>
            </Button>
<h1 className='text-lg  font-medium  '>Add Item</h1>
</div>

        <div>

        <h2 className='text-base text-lg font-medium text-gray-800 mt-5'>Basic Information</h2>
        <p className='text-sm text-gray-500 mb-5'>Enter Basic Information of the item</p>
       <div className="grid grid-cols-2 gap-4 w-280 gap-x-60 ">
        <div className="flex flex-col">
        <label className="mb-1 text-sm font-medium">Name</label>
        <Input
          type="text"
          placeholder="Enter name"
          className="w-full pl-3 pr-3 py-2"
        />
      </div>
      <div className='flex flex-col'>
        <label className='mb-1 text-sm font-medium'>ItemName</label>
      <Input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-3 py-2"
              />
              </div>

              <div className='flex flex-col'>
              <label className='mb-1 text-sm font-medium'>Category</label>
        <Input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-3 py-2"
              />
              </div>
              
        <div className='flex flex-col'>
              <label className='mb-1 text-sm font-medium'>Category</label>
        <Input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-3 py-2"
              />
              </div>
        <div className='flex flex-col'>
              <label className='mb-1 text-sm font-medium'>Category</label>
        <Input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-3 py-2"
              />
              </div>

               <div className='flex flex-col'>
              <label className='mb-1 text-sm font-medium'>Category</label>
        <Input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-3 py-2"
              />
              </div>
</div>

        </div>
        <div className='mt-10'>
            <div className='space-y-4'>
       <h1 className='text-base font-medium text-gray-900 m-1'>Advanced Information</h1>
       <p className='text-sm text-gray-500'>Enter Advanced information of the item</p>
       </div>
      <div className='grid grid-cols-2 gap-4 w-280 gap-x-60 mt-5'>
        <div className='flex flex-col'>
              <label className='mb-1 text-sm font-medium'>Category</label>
        <Input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-3 py-2"
              />
              </div>
        <div className='flex flex-col'>
              <label className='mb-1 text-sm font-medium'>Category</label>
        <Input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-3 py-2"
              />
              </div>
      <div className='flex flex-col'>
              <label className='mb-1 text-sm font-medium'>Category</label>
        <Input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-3 py-2"
              />
              </div>
                 <div className='flex flex-col'>
              <label className='mb-1 text-sm font-medium'>Category</label>
        <Input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-3 py-2"
              />
              </div>
                 <div className='flex flex-col'>
              <label className='mb-1 text-sm font-medium'>Category</label>
        <Input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-3 py-2"
              />
              </div>
                 <div className='flex flex-col'>
              <label className='mb-1 text-sm font-medium'>Category</label>
        <Input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-3 py-2"
              />
              </div>
              </div>

               <div className='w-300 mt-5'>
              <label className='mb-1 text-sm font-medium'>Description</label>
        <Input
                type="text"
                placeholder="Description"
                className="w-full h-20 pl-10 pr-3 py-2"
              />
              </div>


    <div className="space-y-4">
          <div>
           <h2 className="text-base font-medium text-gray-900">Add Image</h2>
         </div>
         <div className="border-2 border-dashed border-gray-300 rounded-lg p-8">
           <div className="flex flex-col items-center justify-center space-y-4">
               <div className="p-3 bg-gray-100 rounded-full">
                 <Upload className="h-6 w-6 text-gray-400" />
               </div>
               <div className="text-center">
                 <p className="text-sm text-gray-600">Drag and drop files here</p>
                 <div className="flex items-center gap-2 my-2">
                   <div className="h-px bg-gray-300 flex-1"></div>
                   <span className="text-xs text-gray-400 px-2">OR</span>
                   <div className="h-px bg-gray-300 flex-1"></div>
                 </div>
                 <Button variant="link" className="text-blue-600 p-0 h-auto font-normal">
                   Browse Files
                 </Button>
               </div>
             </div>
           </div>
         </div>

          {/* Action Buttons */}
         <div className="flex justify-end gap-3 pt-6">
           <Button variant="outline" className="px-8 bg-transparent">
             Cancel
           </Button>
           <Button className="px-8 bg-black hover:bg-gray-800">Save</Button>
         </div>


        <div>


        </div>



   </div>
   </div>
 
  )
}


// "use client"

// import { useState } from "react"
// import { ArrowLeft, Upload } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Textarea } from "@/components/ui/textarea"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// export default function AddItem() {
//   const [formData, setFormData] = useState({
//     itemName: "",
//     category: "",
//     unitOfMeasure: "",
//     quantity: "",
//     pricePerUnit: "",
//     suppliers: "",
//     reorderLevel: "",
//     minimumOrder: "",
//     preferredStock: "",
//     expiryDate: "",
//     customAttributes: "",
//     itemDescription: "",
//   })

//   const handleInputChange = (field: string, value: string) => {
//     setFormData((prev) => ({ ...prev, [field]: value }))
//   }

//   return (
//     <div className="max-w-4xl mx-auto bg-white min-h-screen">
//       {/* Header */}
//       <div className="flex items-center gap-4 p-4 border-b border-gray-200">
//         <Button variant="ghost" size="sm" className="p-1">
//           <ArrowLeft className="h-4 w-4" />
//         </Button>
//         <h1 className="text-lg font-medium">Add Item</h1>
//       </div>

//       <div className="p-6 space-y-8">
//         {/* Basic Information Section */}
//         <div className="space-y-4">
//           <div>
//             <h2 className="text-base font-medium text-gray-900 mb-1">Basic Information</h2>
//             <p className="text-sm text-gray-500">Enter basic informations of the item</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="space-y-2">
//               <Label htmlFor="itemName" className="text-sm font-medium text-gray-700">
//                 Item Name
//               </Label>
//               <Input
//                 id="itemName"
//                 placeholder="Enter Item Name"
//                 value={formData.itemName}
//                 onChange={(e) => handleInputChange("itemName", e.target.value)}
//                 className="bg-gray-50 border-gray-200"
//               />
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="category" className="text-sm font-medium text-gray-700">
//                 Category
//               </Label>
//               <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
//                 <SelectTrigger className="bg-gray-50 border-gray-200">
//                   <SelectValue placeholder="Select Category" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="electronics">Electronics</SelectItem>
//                   <SelectItem value="clothing">Clothing</SelectItem>
//                   <SelectItem value="food">Food</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="unitOfMeasure" className="text-sm font-medium text-gray-700">
//                 Unit of Measure
//               </Label>
//               <Input
//                 id="unitOfMeasure"
//                 placeholder="Enter Unit of Measure"
//                 value={formData.unitOfMeasure}
//                 onChange={(e) => handleInputChange("unitOfMeasure", e.target.value)}
//                 className="bg-gray-50 border-gray-200"
//               />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="unitOfMeasure" className="text-sm font-medium text-gray-700">
//                 Unit of Measure
//               </Label>
//               <Input
//                 id="unitOfMeasure"
//                 placeholder="Enter Unit of Measure"
//                 value={formData.unitOfMeasure}
//                 onChange={(e) => handleInputChange("unitOfMeasure", e.target.value)}
//                 className="bg-gray-50 border-gray-200"
//               />
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="quantity" className="text-sm font-medium text-gray-700">
//                 Quantity
//               </Label>
//               <Input
//                 id="quantity"
//                 placeholder="Enter Quantity"
//                 value={formData.quantity}
//                 onChange={(e) => handleInputChange("quantity", e.target.value)}
//                 className="bg-gray-50 border-gray-200"
//               />
//             </div>

//             <div className="space-y-2 md:col-span-1">
//               <Label htmlFor="pricePerUnit" className="text-sm font-medium text-gray-700">
//                 Price Per Unit
//               </Label>
//               <Input
//                 id="pricePerUnit"
//                 placeholder="Enter Price Per Unit"
//                 value={formData.pricePerUnit}
//                 onChange={(e) => handleInputChange("pricePerUnit", e.target.value)}
//                 className="bg-gray-50 border-gray-200"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Advanced Information Section */}
//         <div className="space-y-4">
//           <div>
//             <h2 className="text-base font-medium text-gray-900 mb-1">Advanced Information</h2>
//             <p className="text-sm text-gray-500">Enter Advanced informations of the item</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="space-y-2">
//               <Label htmlFor="suppliers" className="text-sm font-medium text-gray-700">
//                 Suppliers
//               </Label>
//               <Input
//                 id="suppliers"
//                 placeholder="Enter Suppliers"
//                 value={formData.suppliers}
//                 onChange={(e) => handleInputChange("suppliers", e.target.value)}
//                 className="bg-gray-50 border-gray-200"
//               />
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="reorderLevel" className="text-sm font-medium text-gray-700">
//                 Reorder Level
//               </Label>
//               <Input
//                 id="reorderLevel"
//                 placeholder="Enter Reorder Level"
//                 value={formData.reorderLevel}
//                 onChange={(e) => handleInputChange("reorderLevel", e.target.value)}
//                 className="bg-gray-50 border-gray-200"
//               />
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="minimumOrder" className="text-sm font-medium text-gray-700">
//                 Minimum Order
//               </Label>
//               <Input
//                 id="minimumOrder"
//                 placeholder="Enter Min Order"
//                 value={formData.minimumOrder}
//                 onChange={(e) => handleInputChange("minimumOrder", e.target.value)}
//                 className="bg-gray-50 border-gray-200"
//               />
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="preferredStock" className="text-sm font-medium text-gray-700">
//                 Preferred Stock
//               </Label>
//               <Input
//                 id="preferredStock"
//                 placeholder="Enter Preferred Stock"
//                 value={formData.preferredStock}
//                 onChange={(e) => handleInputChange("preferredStock", e.target.value)}
//                 className="bg-gray-50 border-gray-200"
//               />
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="expiryDate" className="text-sm font-medium text-gray-700">
//                 Expiry Date
//               </Label>
//               <Input
//                 id="expiryDate"
//                 type="date"
//                 value={formData.expiryDate}
//                 onChange={(e) => handleInputChange("expiryDate", e.target.value)}
//                 className="bg-gray-50 border-gray-200"
//               />
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="customAttributes" className="text-sm font-medium text-gray-700">
//                 Custom Attributes
//               </Label>
//               <Input
//                 id="customAttributes"
//                 placeholder="Enter Custom Attributes"
//                 value={formData.customAttributes}
//                 onChange={(e) => handleInputChange("customAttributes", e.target.value)}
//                 className="bg-gray-50 border-gray-200"
//               />
//             </div>

//             <div className="space-y-2 md:col-span-2">
//               <Label htmlFor="itemDescription" className="text-sm font-medium text-gray-700">
//                 Item Description
//               </Label>
//               <Textarea
//                 id="itemDescription"
//                 placeholder="Enter Item Description"
//                 value={formData.itemDescription}
//                 onChange={(e) => handleInputChange("itemDescription", e.target.value)}
//                 className="bg-gray-50 border-gray-200 min-h-[100px]"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Add Image Section */}
//         <div className="space-y-4">
//           <div>
//             <h2 className="text-base font-medium text-gray-900">Add Image</h2>
//           </div>

//           <div className="border-2 border-dashed border-gray-300 rounded-lg p-8">
//             <div className="flex flex-col items-center justify-center space-y-4">
//               <div className="p-3 bg-gray-100 rounded-full">
//                 <Upload className="h-6 w-6 text-gray-400" />
//               </div>
//               <div className="text-center">
//                 <p className="text-sm text-gray-600">Drag and drop files here</p>
//                 <div className="flex items-center gap-2 my-2">
//                   <div className="h-px bg-gray-300 flex-1"></div>
//                   <span className="text-xs text-gray-400 px-2">OR</span>
//                   <div className="h-px bg-gray-300 flex-1"></div>
//                 </div>
//                 <Button variant="link" className="text-blue-600 p-0 h-auto font-normal">
//                   Browse Files
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Action Buttons */}
//         <div className="flex justify-end gap-3 pt-6">
//           <Button variant="outline" className="px-8 bg-transparent">
//             Cancel
//           </Button>
//           <Button className="px-8 bg-black hover:bg-gray-800">Save</Button>
//         </div>
//       </div>
//     </div>
//   )
// }

