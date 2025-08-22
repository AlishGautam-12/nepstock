
// /* eslint-disable @typescript-eslint/no-unused-vars */
// import InputField from '@/components/InputField'
// import { Button } from '@/components/ui/button'
// import { ArrowLeft, Upload, User } from 'lucide-react'
// import React, { useState, type ChangeEvent } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { useEmployeeStore } from '@/components/store/employeeStore'
// import { Input } from '@/components/ui/input'
// import { Label } from '@/components/ui/label'

// export const Addcounter = () => {
//   const addEmployee = useEmployeeStore((state) => state.addEmployee);
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     fullName: "",
//     email: "",
//     dob: "",
//     gender: "",
//     contact: "",
//     address: "",
//     position: "",
//     shift: "",
//     salary: "",
//     availability: "",
//     image: "",
//   });

//   const [image, setImage] = useState<string | null>(null);

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => setImage(reader.result as string);
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = () => {
//     addEmployee({
//       ...form,
//       image,
//       id: Date.now(),
//     });

//     console.log(form);
//     navigate("/counter")
//   };

//   return (
//     <div className="w-full p-5 overflow-y-auto ">
//       {/* Job Info Section */}
//       <div className="mt-10">
//         <div className="w-full border-t pt-5">
//           <h1 className="font-bold text-gray-800 text-lg">Counter Information</h1>
//           <p className="text-sm text-gray-400 mb-6">
//             Enter information of the counter
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <InputField
//             name="CounterID"
//             label="CounterID"
//             onChange={handleChange}
//             placeholder="Counter No 1"
//             value={form.position}
//           />
//             <InputField
//             name="Counter Name"
//             label="Counter Name"
//             onChange={handleChange}
//             placeholder="Counter Name"
//             value={form.availability}
//           />
//           <InputField
//             name="Cashier Name"
//             label="Cashier Name"
//             onChange={handleChange}
//             placeholder="Gajni ram"
//             value={form.shift}
//           />
         
          
//           <InputField
//             name="Section"
//             label="Section"
//             onChange={handleChange}
//             placeholder="Section"
//             value={form.salary}
//           />
//           <InputField
//             name="Availability"
//             label="Availability"
//             onChange={handleChange}
//             placeholder="Enter the availability"
//             value={form.availability}
//           />
//            <InputField
//             name="Status"
//             label="Status"
//             onChange={handleChange}
//             placeholder="Status"
//             value={form.availability}
//           />
      
//           <div className="space-y-2">
//                   <Label htmlFor="dob">DOB</Label>
//                   <Input
//                     id="dob"
//                     type="date"
//                     placeholder="Enter Date of Birth"
                   
                    
//                   />
//                 </div>
          
//   <div className="space-y-2">
//                   <Label htmlFor="dob">Last Maintenence/Update</Label>
//                   <Input
//                     id="dob"
//                     type="date"
//                     placeholder="Enter Date of Birth"
                   
                    
//                   />
//                 </div>
          

          

//         </div>

//         {/* Actions */}
//         <div className="flex flex-col sm:flex-row justify-center gap-40 mt-10">
//           <Button variant="outline">Cancel</Button>
//           <Button onClick={handleSubmit} type="submit">
//             Save
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

/* eslint-disable @typescript-eslint/no-unused-vars */
import InputField from "@/components/InputField";
import { Button } from "@/components/ui/button";
import React, { useState, type ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEmployeeStore } from "@/components/store/employeeStore"; // ⚡ ideally rename to counterStore later
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";

export const Addcounter = () => {
  const addEmployee = useEmployeeStore((state) => state.addEmployee); // ⚡ replace with addCounter when you make a counter store
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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    addEmployee({
      ...form,
      id: Date.now(),
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
