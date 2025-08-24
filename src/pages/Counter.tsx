

import React from "react";
import { useEmployeeStore } from "@/components/store/employeeStore"; // ⚡ rename to counterStore later
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

export const Counter = () => {
  const counters = useEmployeeStore((state) => state.employees); // ⚡ rename to counters
  const deleteCounter = useEmployeeStore((state) => state.deleteEmployee); // ⚡ rename to deleteCounter

  return (
    <div className="w-full md:ml-5 p-4 mt-10">
        
      <h2 className="font-semibold mb-4 text-lg">Counter</h2>

      {/* Top bar: Search + Actions */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 mb-4">
        {/* Search */}
        <div className="relative w-full md:w-80">
          <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="w- h-4 text-gray-400" />
          </span>
          <Input
            type="text"
            placeholder="Search counter..."
            className="w-150 md:w-full pl-10 pr-3 py-2"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-2 md:w-auto">
          <Button className="bg-blue-500 text-white hover:bg-blue-600 w-20 md:w-auto">
            Select
          </Button>
          <Link to="/Addcounter" className="w-full md:w-auto">
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
              <TableHead>Counter ID</TableHead>
              <TableHead>Counter Name</TableHead>
              <TableHead>Cashier Name</TableHead>
              <TableHead>Section</TableHead>
              <TableHead>Availability</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Last Update</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {counters.map((ctr, index) => (
              <TableRow key={ctr.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{ctr.counterId}</TableCell>
                <TableCell>{ctr.counterName}</TableCell>
                <TableCell>{ctr.cashierName}</TableCell>
                <TableCell>{ctr.section}</TableCell>
                <TableCell>{ctr.availability}</TableCell>
                <TableCell>{ctr.status}</TableCell>
                <TableCell>{ctr.lastUpdate}</TableCell>
                <TableCell className="flex gap-2 ">

                  <button className="p-1 hover:bg-gray-100 rounded">
                    <Eye className="w-4 h-4 text-blue-500" />
                  </button>
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <Edit className="w-4 h-4 text-green-500" />
                  </button>
                  <button
                    className="p-1 hover:bg-gray-100 rounded"
                    onClick={() => deleteCounter(ctr.id)}
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
