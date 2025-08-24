import InputField from "@/components/InputField";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEmployeeStore } from "@/components/store/employeeStore"; //  ideally rename to counterStore later
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";

export const Addcounter = () => {
  const addEmployee = useEmployeeStore((state) => state.addEmployee); //  replace with addCounter when you make a counter store
  const navigate = useNavigate();

  const [form, setForm] = useState({
    counterId: "",
    counterName: "",
    cashierName: "",
    section: "",
    availability: "",
    status: "",
    dob: "",
    lastUpdate: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    addEmployee({
      ...form,
      id: Date.now(),
      fullName: "",
      email: "",
      gender: "",
      contact: "",
      address: "",
      position: "",
      shift: "",
      salary: ""
    });

    navigate("/counter");
  };

  return (
    <div className="w-full p-5 overflow-y-auto">
        <div className="flex items-center gap-2 p-4  border-gray-200">
        <Link to="/counter">
          <Button variant="ghost" size="sm" className="p-1">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-lg font-medium">Counter</h1>
      </div>
      <div className="mt-5">
        <div className="w-full border-t pt-5">
          <h1 className="font-bold text-gray-800 text-lg">Counter Information</h1>
          <p className="text-sm text-gray-400 mb-6">
            Enter information of the counter
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField
            name="counterId"
            label="Counter ID"
            onChange={handleChange}
            placeholder="Counter No 1"
            value={form.counterId}
          />
          <InputField
            name="counterName"
            label="Counter Name"
            onChange={handleChange}
            placeholder="Counter Name"
            value={form.counterName}
          />
          <InputField
            name="cashierName"
            label="Cashier Name"
            onChange={handleChange}
            placeholder="Gajni Ram"
            value={form.cashierName}
          />
          <InputField
            name="section"
            label="Section"
            onChange={handleChange}
            placeholder="Section"
            value={form.section}
          />
          <InputField
            name="availability"
            label="Availability"
            onChange={handleChange}
            placeholder="Available / Not Available"
            value={form.availability}
          />
          <InputField
            name="status"
            label="Status"
            onChange={handleChange}
            placeholder="Active / Inactive"
            value={form.status}
          />

          <div className="space-y-2">
            <Label htmlFor="dob">DOB</Label>
            <Input
              id="dob"
              name="dob"
              type="date"
              value={form.dob}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="lastUpdate">Last Maintenance / Update</Label>
            <Input
              id="lastUpdate"
              name="lastUpdate"
              type="date"
              value={form.lastUpdate}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row justify-center gap-40 mt-10">
          <Button variant="outline" onClick={() => navigate("/counter")}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} type="submit">
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};
