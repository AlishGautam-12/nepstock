


import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Eye, Edit, Trash2, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const rows = [
  { id: 1, name: "Mobile", expiry: "2083/2/12", batch: "12", stock: "56/100", price: "Rs.12000", sold: 123 },
  { id: 2, name: "Mobile", expiry: "2083/2/12", batch: "12", stock: "56/100", price: "Rs.12000", sold: 123 },
  { id: 3, name: "Mobile", expiry: "2083/2/12", batch: "12", stock: "56/100", price: "Rs.12000", sold: 123 },
  { id: 4, name: "Mobile", expiry: "2083/2/12", batch: "12", stock: "56/100", price: "Rs.12000", sold: 123 },
  { id: 5, name: "Mobile", expiry: "2083/2/12", batch: "12", stock: "56/100", price: "Rs.12000", sold: 123 },
  { id: 6, name: "Mobile", expiry: "2083/2/12", batch: "12", stock: "56/100", price: "Rs.12000", sold: 123 },
  { id: 7, name: "Mobile", expiry: "2083/2/12", batch: "12", stock: "56/100", price: "Rs.12000", sold: 123 },
  { id: 8, name: "Mobile", expiry: "2083/2/12", batch: "12", stock: "56/100", price: "Rs.12000", sold: 123 },
  { id: 9, name: "Mobile", expiry: "2083/2/12", batch: "12", stock: "56/100", price: "Rs.12000", sold: 123 },

];

const ItemList = () => {
  return (
    <div className="p-4 md:p-6 w-full md:ml-1">
      <h2 className="font-semibold mb-4 text-lg mt-5">Highest Sold Items</h2>

      {/* Top bar: Search + Buttons */}
      <div className="flex  md:flex-row items-start md:items-center justify-between gap-50 mb-4">
        {/* Search Input */}
        <div className="relative w-50 md:w-80">
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
        <div className="flex gap-5 w-full md:w-auto">
          <Button className="bg-blue-500 text-white hover:bg-blue-600 w-30 md:w-auto">
            Select
          </Button>
          <Link to="/Additem" className="w-full md:w-auto">
            <Button className="bg-blue-500 text-white hover:bg-blue-600 w-30 md:w-auto">
              Add
            </Button>
          </Link>
        </div>
      </div>

      {/* Responsive Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <Table className="min-w-full">
          <TableHeader>
            <TableRow>
              <TableHead>S.N</TableHead>
              <TableHead>Item Name</TableHead>
              <TableHead>Expiry Date</TableHead>
              <TableHead>Batch No</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Price/Unit</TableHead>
              <TableHead>Total Sold</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={row.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.expiry}</TableCell>
                <TableCell>{row.batch}</TableCell>
                <TableCell>{row.stock}</TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>{row.sold}</TableCell>
                <TableCell className="flex gap-2">
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <Eye className="w-4 h-4 text-blue-500" />
                  </button>
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <Edit className="w-4 h-4 text-green-500" />
                  </button>
                  <button className="p-1 hover:bg-gray-100 rounded">
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

export default ItemList;
