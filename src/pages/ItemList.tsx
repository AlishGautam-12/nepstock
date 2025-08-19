import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Eye, Edit, Trash2, Search } from "lucide-react";
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const rows = [
  { id: 1, name: "Potato", expiry: "2083/2/12", batch: "12", stock: "56/100", price: "Rs.1200", sold: 123 },
  { id: 2, name: "Tomato", expiry: "2083/2/12", batch: "13", stock: "42/80", price: "Rs.800", sold: 98 },
  { id: 3, name: "Potato", expiry: "2083/2/12", batch: "12", stock: "56/100", price: "Rs.1200", sold: 123 },
  { id: 4, name: "Tomato", expiry: "2083/2/12", batch: "13", stock: "42/80", price: "Rs.800", sold: 98 },
  { id: 5, name: "Potato", expiry: "2083/2/12", batch: "12", stock: "56/100", price: "Rs.1200", sold: 123 },
  { id: 6, name: "Tomato", expiry: "2083/2/12", batch: "13", stock: "42/80", price: "Rs.800", sold: 98 },
  { id: 7, name: "Potato", expiry: "2083/2/12", batch: "12", stock: "56/100", price: "Rs.1200", sold: 123 },
  { id: 8, name: "Tomato", expiry: "2083/2/12", batch: "13", stock: "42/80", price: "Rs.800", sold: 98 },
];

const ItemList = () => {
  return (
  <div className="mt-0 ml-60 p-4 w-330 fixed left-0">
  <h2 className="font-semibold mb-4 text-lg">Highest Sold Items</h2>

  {/* Top bar: Search on left, Add button on right */}
  <div className="flex items-center justify-between mb-4">
    {/* Left: Search Input with Icon */}
    <div className="relative w-80">
      <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
        <Search className="w-4 h-4 text-gray-400" />
      </span>
      <Input
        type="text"
        placeholder="Search"
        className="w-full pl-10 pr-3 py-2"
      />
    </div>

    {/* Right: Add Button */}
    <div  className='mr-10'>
     <Button className="bg-blue-500 mr-5 text-white hover:bg-blue-600">
        Select
      </Button>
       <Link to="/Additem">
      <Button className="bg-blue-500 text-white hover:bg-blue-600">
        Add
      </Button>
      </Link>
    </div>
  </div>
      <Table>
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
  )
}

export default ItemList