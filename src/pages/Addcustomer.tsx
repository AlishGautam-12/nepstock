"use client"

import { useState } from "react"
import { ArrowLeft, Upload, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from "react-router-dom"

export function AddCustomerForm() {
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    contactNo: "",
    address: "",
    dob: "",
    gender: "",
    customerId: "",
    paymentMethod: "",
    storeLocation: "",
    deliveryPreferences: "Door-to-door Delivery",
    notes: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className=" md:w-300 mx-auto p-6 ">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <Link to={"/customer"}>
        <Button variant="ghost" size="sm" className="p-2">
          <ArrowLeft className="h-4 w-4" />

        </Button>
        </Link>
        <h1 className="text-xl font-semibold">Add Customer</h1>
      </div>

      <div className="space-y-6">
        {/* Basic Customer Information */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Basic Customer Information</CardTitle>
            <p className="text-sm text-muted-foreground">Enter Basic Information of the Customer</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column - Profile Image */}
              <div className="space-y-4">
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
                    <User className="w-16 h-16 text-gray-400" />
                  </div>
                  <Button
                    variant="outline"
                    className="text-green-600 border-green-600 hover:bg-green-50 bg-transparent"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    UPLOAD PROFILE IMAGE
                  </Button>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter Email Address"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                  />
                </div>
              </div>

              {/* Right Column - Form Fields */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    placeholder="Enter Full Name"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contactNo">Contact No.</Label>
                  <Input
                    id="contactNo"
                    placeholder="Enter Contact Number"
                    value={formData.contactNo}
                    onChange={(e) => handleInputChange("contactNo", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    placeholder="Enter Address"
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dob">DOB</Label>
                  <Input
                    id="dob"
                    type="date"
                    placeholder="Enter Date of Birth"
                    value={formData.dob}
                    onChange={(e) => handleInputChange("dob", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="gender">Gender</Label>
                  <Select value={formData.gender} onValueChange={(value) => handleInputChange("gender", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Advanced Customer Details */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Advanced Customer Details</CardTitle>
            <p className="text-sm text-muted-foreground">Enter Advanced Customer details</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="customerId">Customer ID</Label>
                  <Input
                    id="customerId"
                    placeholder="Enter Customer ID"
                    value={formData.customerId}
                    onChange={(e) => handleInputChange("customerId", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="storeLocation">Store Location</Label>
                  <Input
                    id="storeLocation"
                    placeholder="Enter Store Location"
                    value={formData.storeLocation}
                    onChange={(e) => handleInputChange("storeLocation", e.target.value)}
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="paymentMethod">Payment Method</Label>
                  <Input
                    id="paymentMethod"
                    placeholder="Enter Payment Method"
                    value={formData.paymentMethod}
                    onChange={(e) => handleInputChange("paymentMethod", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="deliveryPreferences">Delivery Preferences</Label>
                  <Select
                    value={formData.deliveryPreferences}
                    onValueChange={(value) => handleInputChange("deliveryPreferences", value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Door-to-door Delivery">Door-to-door Delivery</SelectItem>
                      <SelectItem value="Pickup">Pickup</SelectItem>
                      <SelectItem value="Express Delivery">Express Delivery</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Notes - Full Width */}
            <div className="mt-6 space-y-2">
              <Label htmlFor="notes">Notes</Label>
              <Textarea
                id="notes"
                placeholder="Enter Notes"
                className="min-h-[100px]"
                value={formData.notes}
                onChange={(e) => handleInputChange("notes", e.target.value)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 pt-4">
          <Button variant="outline" className="px-8 bg-transparent">
            Cancel
          </Button>
          <Button variant="outline" className="px-8 bg-transparent">
            History
          </Button>
          <Button className="px-8 bg-blue-600 hover:bg-blue-700">Save</Button>
        </div>
      </div>
    </div>
  )
}
