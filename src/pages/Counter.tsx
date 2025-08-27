

import React, { useState } from "react"; 
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
import Pagination from "@/usableComponents/Pagination";

interface Counter {
  id: number;
  counterId: string;
  counterName: string;
  cashierName: string;
  section: string;
  availability: string;
  status: string;
  lastUpdate: string;
}

const counters: Counter[] = [
  { id: 1, counterId: "CTR-001", counterName: "Main Counter", cashierName: "John Doe", section: "Electronics", availability: "Available", status: "Active", lastUpdate: "2025-08-20" },
  { id: 2, counterId: "CTR-002", counterName: "Second Counter", cashierName: "Jane Smith", section: "Groceries", availability: "Busy", status: "Inactive", lastUpdate: "2025-08-18" },
  { id: 3, counterId: "CTR-003", counterName: "Express Counter", cashierName: "Mike Johnson", section: "Clothing", availability: "Available", status: "Active", lastUpdate: "2025-08-22" },
  { id: 4, counterId: "CTR-004", counterName: "Counter Four", cashierName: "Anna Lee", section: "Books", availability: "Busy", status: "Active", lastUpdate: "2025-08-23" },
  { id: 5, counterId: "CTR-005", counterName: "Counter Five", cashierName: "Tom Hardy", section: "Stationery", availability: "Available", status: "Inactive", lastUpdate: "2025-08-21" },
  { id: 6, counterId: "CTR-001", counterName: "Main Counter", cashierName: "John Doe", section: "Electronics", availability: "Available", status: "Active", lastUpdate: "2025-08-20" },
  { id: 7, counterId: "CTR-002", counterName: "Second Counter", cashierName: "Jane Smith", section: "Groceries", availability: "Busy", status: "Inactive", lastUpdate: "2025-08-18" },
  { id: 8, counterId: "CTR-003", counterName: "Express Counter", cashierName: "Mike Johnson", section: "Clothing", availability: "Available", status: "Active", lastUpdate: "2025-08-22" },
  { id: 9, counterId: "CTR-004", counterName: "Counter Four", cashierName: "Anna Lee", section: "Books", availability: "Busy", status: "Active", lastUpdate: "2025-08-23" },
  { id: 10, counterId: "CTR-005", counterName: "Counter Five", cashierName: "Tom Hardy", section: "Stationery", availability: "Available", status: "Inactive", lastUpdate: "2025-08-21" },
];


export const Counter: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // change as needed

  // Pagination logic
  const totalPages = Math.ceil(counters.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentCounters = counters.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="w-full md:ml-5 p-4 ">
      <h2 className="font-semibold mb-4 text-lg">Counter</h2>

      {/* Top bar */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 mb-4">
        <div className="relative w-full md:w-80">
          <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="w-4 h-4 text-gray-400" />
          </span>
          <Input type="text" placeholder="Search counter..." className="w-150 md:w-full pl-10 pr-3 py-2" />
        </div>

        <div className="flex gap-2 md:w-auto">
          <Button className="bg-blue-500 text-white hover:bg-blue-600 w-20 md:w-auto">Select</Button>
          <Link to="/Addcounter" className="w-full md:w-auto">
            <Button className="bg-blue-500 text-white hover:bg-blue-600 w-20 md:w-auto">Add</Button>
          </Link>
        </div>
      </div>

      {/* Table */}
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
            {currentCounters.map((ctr, index) => (
              <TableRow key={ctr.id}>
                <TableCell>{startIndex + index + 1}</TableCell>
                <TableCell>{ctr.counterId}</TableCell>
                <TableCell>{ctr.counterName}</TableCell>
                <TableCell>{ctr.cashierName}</TableCell>
                <TableCell>{ctr.section}</TableCell>
                <TableCell>{ctr.availability}</TableCell>
                <TableCell>{ctr.status}</TableCell>
                <TableCell>{ctr.lastUpdate}</TableCell>
                <TableCell className="flex gap-2">
                  <button className="p-1 hover:bg-gray-100 rounded"><Eye className="w-4 h-4 text-blue-500" /></button>
                  <button className="p-1 hover:bg-gray-100 rounded"><Edit className="w-4 h-4 text-green-500" /></button>
                  <button className="p-1 hover:bg-gray-100 rounded" onClick={() => alert(`Deleting counter ${ctr.id}`)}><Trash2 className="w-4 h-4 text-red-500" /></button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex justify-center">
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      </div>
    </div>
  );
};
