// /* eslint-disable @typescript-eslint/no-unused-vars */
// import InputField from '@/components/InputField'
// import { Button } from '@/components/ui/button'
// import { ArrowLeft } from 'lucide-react'
// import React, { useState, type ChangeEvent } from 'react'
// import { useNavigate, type Link } from 'react-router-dom'
// import { useEmployeeStore } from '@/components/store/employeeStore'

// export  const AddEmployee = () => {
  
// const addEmployee=useEmployeeStore((state) => state.addEmployee);
// const navigate =useNavigate();

// const [form,setForm] =useState({
//   fullName:"",
//   email:"",
//   dob:"",
//   gender:"",
//   contact:"",
//   address:"",
//   position:"",
//   shift:"",
//   salary:"",
//   availability:"",
//   image:"",
// });

// const [image, setImage] = useState<string | null>(null);

// const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//   const {name,value} =e.target;
//   setForm((prev) =>({...prev,[name]:value}));
// };

// const handleImageUpload =(e: ChangeEvent<HTMLInputElement>) => {
//   const file =e.target.files?.[0];
//   if(file) {
//     const reader =new FileReader();
//     reader.onloadend = () => setImage(reader.result as string);
//     reader.readAsDataURL(file);
//   }
// };

// const handleSubmit = () => {
//   addEmployee({
//     ...form,
//     image,
//     id: Date.now(), // ✅ gives a unique number based on current timestamp
//   });


//   console.log(form);
//   // navigate("/employee")
// };
//   return (

        
//             <div className="  mlw-full  p-5 overflow-y-auto mt-5">
//                <h2 className='mb-5 text-2xl text-bold border-b w-full'>Edit Employee</h2>
//                 <div className='flex item-center  mt-0
                
//   gap-50'>
   
//             <div className='w-125 relative flex flex-col items-cente'>
              
//                 <h1 className='text-lg text-bold text-gray-900 '>Basic personal information</h1>
//                 <p className='text-sm text-gray-400  mb-6'>Enter Basic information of the Employee</p>
                
//              <div className="relative w-35 h-32 mb-8 mt-10 mb-25 ml-30">
//     <img
//       src="/default-avatar.png" // replace with your default image
//       alt="  Profile"
//       className="w-32 h-32 rounded-full object-cover border-2 border-gray-300"
//     />
//     <label className="absolute bottom-0 right-0 w-12 h-10 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600">
//       <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7-7 7 7M5 8v13h14V8" />
//       </svg>
//       <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload}/>
//     </label>
//   </div>



//                 <InputField name="email" label="Email Address" onChange={handleChange} placeholder="Enter Email Address" value={form.email} />

//             </div>
//             <div className=' flex flex-col w-125 gap-6'>
//                 <InputField name="fullName" label="Full Name" onChange={handleChange} placeholder="Enter fullname" value={form.fullName} />
// <InputField name="dob" label="DOB" onChange={handleChange} placeholder="Enter dob" value={form.dob} />
// <InputField name="gender" label="Gender" onChange={handleChange} placeholder="Enter Gender" value={form.gender} />
// <InputField name="contact" label="Contact No" onChange={handleChange} placeholder="Enter Contact" value={form.contact} />
// <InputField name="address" label="Address" onChange={handleChange} placeholder="Enter Address" value={form.address} />

//             </div>

           
//             </div>
//             <div className='mt-10'>
//             <div className='w-full border-t '>
//                 <h1 className='text-bold text-gray-800 text-lg'>Job Information</h1>
//                 <p className='text-sm text-gray-400 mb-6'>Enter job information of the Employee</p>
               

//             </div>

//              <div className='grid grid-cols-2 gap-x-50 gap-y-6 mt-5 w-300  '>

//                 <InputField name="position" label="Position" onChange={handleChange} placeholder="Enter the Position" value={form.position} />
// <InputField name="shift" label="Working Shift" onChange={handleChange} placeholder="Enter the working shift" value={form.shift} />
// <InputField name="salary" label="Salary" onChange={handleChange} placeholder="Enter the salary" value={form.salary} />
// <InputField name="availability" label="Availability" onChange={handleChange} placeholder="Enter the availability" value={form.availability} />

//             </div>
//             <div className=' flex w-60 mt-10 ml-80 '>
//               <Button variant="outline" className='mr-100'>Cancel</Button>
//               <Button onClick={handleSubmit} type='submit' className=''> Save</Button>
//             </div>
//             </div>
//         </div>

      









   
//   )
// }


/* eslint-disable @typescript-eslint/no-unused-vars */
import InputField from '@/components/InputField'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Upload, User } from 'lucide-react'
import React, { useState, type ChangeEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useEmployeeStore } from '@/components/store/employeeStore'

export const AddEmployee = () => {
  const addEmployee = useEmployeeStore((state) => state.addEmployee);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    dob: "",
    gender: "",
    contact: "",
    address: "",
    position: "",
    shift: "",
    salary: "",
    availability: "",
    image: "",
  });

  const [image, setImage] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    addEmployee({
      ...form,
      image,
      id: Date.now(),
    });
    console.log(form);
    navigate("/employee");
  };

  return (
    <div className="w-full p-5 overflow-y-auto mt-2">
      {/* Back Button */}
      <div className="flex items-center gap-2 p-4 border-b border-gray-200 mb-4">
        <Link to="/employee">
          <Button variant="ghost" size="sm" className="p-1">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-lg font-medium">Employee</h1>
      </div>

      <h2 className="mb-5 text-2xl font-bold border-b pb-2">Add Employee</h2>

      {/* Basic Info Section */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left: Profile + Email */}
        <div className="flex-1 flex flex-col items-center lg:items-start gap-4">
          <h1 className="text-lg font-bold text-gray-900">
            Basic Personal Information
          </h1>
          <p className="text-sm text-gray-400 mb-4">
            Enter basic information of the employee
          </p>

          {/* Profile Upload */}
<div className="flex flex-col items-center space-y-4">
  <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
    {image ? (
      <img
        src={image}
        alt="Profile"
        className="w-full h-full object-cover"
      />
    ) : (
      <User className="w-16 h-16 text-gray-400" />
    )}
  </div>

  {/* Hidden file input */}
  <input
    type="file"
    accept="image/*"
    id="profileUpload"
    className="hidden"
    onChange={handleImageUpload}
  />

  {/* Button triggers file input */}
  <Button
    variant="outline"
    className="text-green-600 border-green-600 hover:bg-green-50 bg-transparent flex items-center"
    onClick={() => document.getElementById('profileUpload')?.click()}
  >
    <Upload className="w-4 h-4 mr-2" />
    UPLOAD PROFILE IMAGE
  </Button>
</div>


          {/* Email Input */}
          <InputField
            name="email"
            label="Email Address"
            onChange={handleChange}
            placeholder="Enter Email Address"
            value={form.email}
          />
        </div>

        {/* Right: Other Basic Inputs */}
        <div className="flex-1 flex flex-col gap-6">
          <InputField
            name="fullName"
            label="Full Name"
            onChange={handleChange}
            placeholder="Enter fullname"
            value={form.fullName}
          />
          <InputField
            name="dob"
            label="DOB"
            onChange={handleChange}
            placeholder="Enter dob"
            value={form.dob}
          />
          <InputField
            name="gender"
            label="Gender"
            onChange={handleChange}
            placeholder="Enter Gender"
            value={form.gender}
          />
          <InputField
            name="contact"
            label="Contact No"
            onChange={handleChange}
            placeholder="Enter Contact"
            value={form.contact}
          />
          <InputField
            name="address"
            label="Address"
            onChange={handleChange}
            placeholder="Enter Address"
            value={form.address}
          />
        </div>
      </div>

      {/* Job Info Section */}
      <div className="mt-10">
        <div className="w-full border-t pt-5 mb-4">
          <h1 className="font-bold text-gray-800 text-lg">Job Information</h1>
          <p className="text-sm text-gray-400">
            Enter job information of the employee
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField
            name="position"
            label="Position"
            onChange={handleChange}
            placeholder="Enter the Position"
            value={form.position}
          />
          <InputField
            name="shift"
            label="Working Shift"
            onChange={handleChange}
            placeholder="Enter the working shift"
            value={form.shift}
          />
          <InputField
            name="salary"
            label="Salary"
            onChange={handleChange}
            placeholder="Enter the salary"
            value={form.salary}
          />
          <InputField
            name="availability"
            label="Availability"
            onChange={handleChange}
            placeholder="Enter the availability"
            value={form.availability}
          />
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
          <Button variant="outline">Cancel</Button>
          <Button onClick={handleSubmit} type="submit">
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};
