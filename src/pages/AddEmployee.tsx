/* eslint-disable @typescript-eslint/no-unused-vars */
import InputField from '@/components/InputField'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import React, { useState, type ChangeEvent } from 'react'
import { useNavigate, type Link } from 'react-router-dom'
import { useEmployeeStore } from '@/components/store/employeeStore'

export  const AddEmployee = () => {
  
const addEmployee=useEmployeeStore((state) => state.addEmployee);
const navigate=useNavigate();

const [form,setForm] =useState({
  fullName:"",
  email:"",
  dob:"",
  gender:"",
  contact:"",
  address:"",
  position:"",
  shift:"",
  salary:"",
  availability:"",
  image:"",
});

const [image, setImage] = useState<string | null>(null);

const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  const {name,value} =e.target;
  setForm((prev) =>({...prev,[name]:value}));
};

const handleImageUpload =(e: ChangeEvent<HTMLInputElement>) => {
  const file =e.target.files?.[0];
  if(file) {
    const reader =new FileReader();
    reader.onloadend = () => setImage(reader.result as string);
    reader.readAsDataURL(file);
  }
};

const handleSubmit = () => {
  addEmployee({
    ...form,
    image,
    id: Date.now(), // ✅ gives a unique number based on current timestamp
  });


  console.log(form);
  // navigate("/employee")
};








  return (

        
            <div className="  mlw-full p-5 overflow-y-auto mt-5">
               <h2 className='mb-5 text-2xl text-bold border-b w-full'>Edit Employee</h2>
                <div className='flex item-center  mt-0
                
  gap-50'>
   
            <div className='w-125 relative flex flex-col items-cente'>
              
                <h1 className='text-lg text-bold text-gray-900 '>Basic personal information</h1>
                <p className='text-sm text-gray-400  mb-6'>Enter Basic information of the Employee</p>
                
             <div className="relative w-35 h-32 mb-8 mt-10 mb-25 ml-30">
    <img
      src="/default-avatar.png" // replace with your default image
      alt="  Profile"
      className="w-32 h-32 rounded-full object-cover border-2 border-gray-300"
    />
    <label className="absolute bottom-0 right-0 w-12 h-10 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600">
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7-7 7 7M5 8v13h14V8" />
      </svg>
      <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload}/>
    </label>
  </div>



                <InputField name="email" label="Email Address" onChange={handleChange} placeholder="Enter Email Address" value={form.email} />

            </div>
            <div className=' flex flex-col w-125 gap-6'>
                <InputField name="fullName" label="Full Name" onChange={handleChange} placeholder="Enter fullname" value={form.fullName} />
<InputField name="dob" label="DOB" onChange={handleChange} placeholder="Enter dob" value={form.dob} />
<InputField name="gender" label="Gender" onChange={handleChange} placeholder="Enter Gender" value={form.gender} />
<InputField name="contact" label="Contact No" onChange={handleChange} placeholder="Enter Contact" value={form.contact} />
<InputField name="address" label="Address" onChange={handleChange} placeholder="Enter Address" value={form.address} />

            </div>

           
            </div>
            <div className='mt-10'>
            <div className='w-full border-t '>
                <h1 className='text-bold text-gray-800 text-lg'>Job Information</h1>
                <p className='text-sm text-gray-400 mb-6'>Enter job information of the Employee</p>
               

            </div>

             <div className='grid grid-cols-2 gap-x-50 gap-y-6 mt-5 w-300  '>

                <InputField name="position" label="Position" onChange={handleChange} placeholder="Enter the Position" value={form.position} />
<InputField name="shift" label="Working Shift" onChange={handleChange} placeholder="Enter the working shift" value={form.shift} />
<InputField name="salary" label="Salary" onChange={handleChange} placeholder="Enter the salary" value={form.salary} />
<InputField name="availability" label="Availability" onChange={handleChange} placeholder="Enter the availability" value={form.availability} />

            </div>
            <div className=' flex w-60 mt-10 ml-80 '>
              <Button variant="outline" className='mr-100'>Cancel</Button>
              <Button onClick={handleSubmit} type='submit' className=''> Save</Button>
            </div>
            </div>
        </div>

      









   
  )
}
