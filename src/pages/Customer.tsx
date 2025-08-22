// import React from "react";
// import { useEmployeeStore } from "@/components/store/employeeStore";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   Table,
//   TableHeader,
//   TableRow,
//   TableHead,
//   TableBody,
//   TableCell,
// } from "@/components/ui/table"; // ✅ all table components come from here
// import { Search, Eye, Edit, Trash2 } from "lucide-react"; // ✅ removed Table import
// import { Link } from "react-router-dom";


// export const Customers = () => {
//  const employees = useEmployeeStore((state) => state.employees);
//   const deleteEmployee = useEmployeeStore((state) => state.deleteEmployee);


//   return (
//     <div className="md:mt-0 ml-60 p-4 w-330 fixed left-0">
//   <h2 className="font-semibold mb-4 text-lg">Employee</h2>

//   {/* Top bar: Search on left, Add button on right */}
//   <div className="flex items-center justify-between mb-4">
//     {/* Left: Search Input with Icon */}
//     <div className="relative w-80">
//       <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
//         <Search className="w-4 h-4 text-gray-400" />
//       </span>
//       <Input
//         type="text"
//         placeholder="Search"
//         className="w-full pl-10 pr-3 py-2"
//       />
//     </div>

//     {/* Right: Add Button */}
//     <div  className='mr-10'>
//      <Button className="bg-blue-500 mr-5 text-white hover:bg-blue-600">
//         Select
//       </Button>
//        <Link to="/Addcustomer">
//       <Button className="bg-blue-500 text-white hover:bg-blue-600">
//         Add
//       </Button>
//       </Link>
//     </div>
//   </div>
//       <Table>
//         <TableHeader>
//           <TableRow>
//             <TableHead>S.N</TableHead>
//             <TableHead>Image</TableHead>
//             <TableHead>FullName</TableHead>
//             <TableHead>Email</TableHead>
//             <TableHead>Position</TableHead>
//             <TableHead>Salary</TableHead>
           
//              <TableHead>Actions</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {employees.map((emp,index) => (
//             <TableRow key={emp.id}>
//               <TableCell>{index + 1}</TableCell>
//               <TableCell>
//   {emp.image ? (
//     <img
//       src={emp.image}
//       alt={emp.fullName}
//       className="w-10 h-10 rounded-full object-cover border"
//     />
//   ) : (
//     <div className="w-10 h-10 rounded-full bg-gray-300" />
//   )}
// </TableCell>
//               <TableCell>{emp.fullName}</TableCell>
//               <TableCell>{emp.email}</TableCell>
//               <TableCell>{emp.position}</TableCell>
//               <TableCell>{emp.salary}</TableCell>
              
//                <TableCell className="flex gap-2">
//         <button className="p-1 hover:bg-gray-100 rounded">
//           <Eye className="w-4 h-4 text-blue-500" />
//         </button>
//         <button className="p-1 hover:bg-gray-100 rounded">
//           <Edit className="w-4 h-4 text-green-500" />
//         </button>
//         <button className="p-1 hover:bg-gray-100 rounded">
//           <Trash2   onClick={() => deleteEmployee(emp.id)} className="w-4 h-4 text-red-500" />
//         </button>
//       </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </div>
//   );
// };


import React from "react";
import { useEmployeeStore } from "@/components/store/employeeStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Search, Eye, Edit, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

export const Customers = () => {
  const employees = useEmployeeStore((state) => state.employees);
  const deleteEmployee = useEmployeeStore((state) => state.deleteEmployee);

  return (
    <div className="p-4 mt-16 w-full ml-0 lg:ml-0">
      <h2 className="font-semibold mb-4 text-lg">Employee</h2>

      {/* 🔍 Top bar: Search + Buttons */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-4">
        {/* Search Input */}
        <div className="relative w-full sm:w-80">
          <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="w-4 h-4 text-gray-400" />
          </span>
          <Input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-3 py-2"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button className="bg-blue-500 text-white hover:bg-blue-600">
            Select
          </Button>
          <Link to="/Addcustomer">
            <Button className="bg-blue-500 text-white hover:bg-blue-600">
              Add
            </Button>
          </Link>
        </div>
      </div>

      {/* 🖥 Table with scroll on mobile */}
      <div className="overflow-x-auto rounded-lg border">
        <Table className="min-w-[700px]">
          <TableHeader>
            <TableRow>
              <TableHead>S.N</TableHead>
              <TableHead>Image</TableHead>
              <TableHead>Full Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Position</TableHead>
              <TableHead>Salary</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {employees.map((emp, index) => (
              <TableRow key={emp.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  {emp.image ? (
                    <img
                      src={emp.image}
                      alt={emp.fullName}
                      className="w-10 h-10 rounded-full object-cover border"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-gray-300" />
                  )}
                </TableCell>
                <TableCell>{emp.fullName}</TableCell>
                <TableCell>{emp.email}</TableCell>
                <TableCell>{emp.position}</TableCell>
                <TableCell>{emp.salary}</TableCell>
                <TableCell className="flex gap-2">
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <Eye className="w-4 h-4 text-blue-500" />
                  </button>
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <Edit className="w-4 h-4 text-green-500" />
                  </button>
                  <button
                    onClick={() => deleteEmployee(emp.id)}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
