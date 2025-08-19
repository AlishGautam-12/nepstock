import React from "react";
import StatCard from "@/components/dashboard/StatCard";
import InventoryChart from "@/components/dashboard/InventoryChart"; // Bar chart
import LineGraph from "@/components/dashboard/LineGraph";           // Line chart
import HighestSoldTable from "@/components/dashboard/HighestSoldTable";
import { Package, Users, ShoppingCart } from "lucide-react";

export default function Dashboard() {
  return (
   <div className="flex flex-col space-y-6 absolute ml-65 right-0 left-0 mt-0 h-full overflow-y-auto">
      {/* Top row: 4 stats cards */}
      <div className="flex flex-row gap-6 w-315">
        <div className="flex-1">
          <StatCard title="Products" value="3213" icon={Package} color="bg-blue-500" />
        </div>
        <div className="flex-1">
          <StatCard title="Customers" value="2145" icon={Users} color="bg-green-500" />
        </div>
        <div className="flex-1">
          <StatCard title="Orders" value="876" icon={ShoppingCart} color="bg-red-500" />
        </div>
        <div className="flex-1">
          <StatCard title="Revenue" value="$12.3k" icon={Package} color="bg-yellow-500" />
        </div>
         <div className="flex-1">
          <StatCard title="Revenue" value="$12.3k" icon={Package} color="bg-yellow-500" />
        </div>
         <div className="flex-1">
          <StatCard title="Revenue" value="$12.3k" icon={Package} color="bg-yellow-500" />
        </div>
      </div>

      {/* Horizontal section: Stats + Bar + Line */}
     <div className="flex flex-row gap-6 w-full items-stretch">
  <div className="flex flex-col gap-4 w-1/5 ">
          <StatCard title="Products" value="3213" icon={Package} color="bg-blue-500" />
          <StatCard title="Customers" value="2145" icon={Users} color="bg-green-500" />
          <StatCard title="Orders" value="876" icon={ShoppingCart} color="bg-red-500" />
        </div>

        <div className="w-100 h-full">
          <InventoryChart />
        </div>

        <div className="w-150 flex-1 h-full">
          <LineGraph />
        </div>
      </div>

      {/* Table */}
      <HighestSoldTable />
    </div>

    
  );
}