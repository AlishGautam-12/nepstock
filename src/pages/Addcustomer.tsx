"use client"

import { useState } from "react"
import { CustomerHeader } from "@/usableComponents/CustomerHeader"
import { CustomerBasicInfo } from "@/usableComponents/CustomerBasicInfo"

import { CustomerActions } from "@/usableComponents/CustomerActions"
import { CustomerAdvancedInfo } from "@/usableComponents/CustomerAdvancedInfo"

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
    <div className="md:w-300 mx-auto p-6">
      <CustomerHeader />
      <div className="space-y-6">
        <CustomerBasicInfo formData={formData} handleInputChange={handleInputChange} />
        <CustomerAdvancedInfo formData={formData} handleInputChange={handleInputChange} />
        <CustomerActions />
      </div>
    </div>
  )
}

