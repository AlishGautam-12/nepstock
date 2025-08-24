/* eslint-disable @typescript-eslint/no-explicit-any */


import React from "react";

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

interface Customer {
  image: any;
  id: number;
  customerId: string;
  fullname: string;
  email: string;
  position: string;
  salary: string;

}

const customers: Customer[] = [
  {
    id: 1,
    customerId: "Cust-001",
    fullname: "Alish Gautam",
    email: "alishgautam12",
    position: "FullStack",
    salary: "50000",
    image: undefined
  },
   {
     id: 2,
     customerId: "Cust-002",
     fullname: "Alish Gautam",
     email: "alishgautam12",
     position: "FullStack",
     salary: "50000",
     image: undefined
   },
];

export const Customer: React.FC = () => {
 

  return (
    <div className="p-4  w-full ml-0 lg:ml-0">
      <h2 className="font-semibold mb-4 text-lg">Customer</h2>

      {/*  Top bar: Search + Buttons */}
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
            {customers.map((cust, index) => (
              <TableRow key={cust.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  {cust.image ? (
                    <img
                      src={cust.image}
                      alt={cust.fullname}
                      className="w-10 h-10 rounded-full object-cover border"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-gray-300" />
                  )}
                </TableCell>
                <TableCell>{cust.fullname}</TableCell>
                <TableCell>{cust.email}</TableCell>
                <TableCell>{cust.position}</TableCell>
                <TableCell>{cust.salary}</TableCell>
                <TableCell className="flex gap-2">
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <Eye className="w-4 h-4 text-blue-500" />
                  </button>
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <Edit className="w-4 h-4 text-green-500" />
                  </button>
                  <button
                   
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
