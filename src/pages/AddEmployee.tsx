/* eslint-disable @typescript-eslint/no-unused-vars */
import InputField from '@/components/InputField'
import type { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import React, { type ChangeEvent } from 'react'
import type { Link } from 'react-router-dom'

export  const AddEmployee = () => {
    function handleChange(_e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
        throw new Error('Function not implemented.')
    }

  return (

        
            <div className="ml-30 w-full p-5 overflow-y-auto mt-5">
                <div className='flex item-center  mt-10
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
      <input type="file" accept="image/*" className="hidden" />
    </label>
  </div>



                <InputField name="Email Address" label="Email Address" onChange={handleChange} placeholder="Enter Email Address" value={''} />

            </div>
            <div className=' flex flex-col w-125 gap-6'>
                <InputField name="Full Name" label="Full Name" onChange={handleChange} placeholder="Enter Email Address" value={''} />
                <InputField name="Email Address" label="DOB" onChange={handleChange} placeholder="Enter Email Address" value={''} />
                <InputField name="Email Address" label="Gender" onChange={handleChange} placeholder="Enter Email Address" value={''} />
                <InputField name="Email Address" label="Contact No" onChange={handleChange} placeholder="Enter Email Address" value={''} />
                <InputField name="Email Address" label="Address" onChange={handleChange} placeholder="Enter Email Address" value={''} />


            </div>

           
            </div>
            <div className='mt-10'>
            <div className='w-full border-t '>
                <h1 className='text-bold text-gray-800 text-lg'>Job Information</h1>
                <p className='text-sm text-gray-400 mb-6'>Enter job information of the Employee</p>
               

            </div>

             <div className='grid grid-cols-2 gap-x-50 gap-y-6 mt-5 w-300  '>

                <InputField name="Email Address" label="Position" onChange={handleChange} placeholder="Enter Email Address" value={''} />
                <InputField name="Email Address" label="Working Shift" onChange={handleChange} placeholder="Enter Email Address" value={''} />
                <InputField name="Email Address" label="Salary" onChange={handleChange} placeholder="Enter Email Address" value={''} />
                <InputField name="Email Address" label="Availability" onChange={handleChange} placeholder="Enter Email Address" value={''} />


            </div>
            </div>
        </div>

      









   
  )
}
