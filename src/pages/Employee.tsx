

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

export const Employees = () => {
  const employees = useEmployeeStore((state) => state.employees);
  const deleteEmployee = useEmployeeStore((state) => state.deleteEmployee);

  return (
    <div className="w-full md:ml-5 p-4 mt-10">
      
      <h2 className="font-semibold mb-4 text-lg">Employee</h2>

      {/* Top bar: Search + Actions */}
      <div className="flex flex-col  md:flex-row items-start md:items-center justify-between gap-3 mb-4">
        {/* Search */}
        <div className="relative w-100 md:w-80">
          <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="w-4 h-4 text-gray-400" />
          </span>
          <Input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-3 py-2"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-2  md:w-auto">
          <Button className="bg-blue-500 text-white hover:bg-blue-600 w-20 md:w-auto">
            Select
          </Button>
          <Link to="/Addemployee" className="w-full md:w-auto">
            <Button className="bg-blue-500 text-white hover:bg-blue-600 w-20 md:w-auto">
              Add
            </Button>
          </Link>
        </div>
      </div>

      {/* Table wrapper for responsiveness */}
      <div className="overflow-x-auto">
        <Table>
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
                <TableCell className="whitespace-nowrap">
                  {emp.email}
                </TableCell>
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
                    className="p-1 hover:bg-gray-100 rounded"
                    onClick={() => deleteEmployee(emp.id)}
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
