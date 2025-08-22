// import React from "react";
// import StatCard from "@/components/dashboard/StatCard";
// import InventoryChart from "@/components/dashboard/InventoryChart"; // Bar chart
// import LineGraph from "@/components/dashboard/LineGraph";           // Line chart
// import HighestSoldTable from "@/components/dashboard/HighestSoldTable";
// import { Package, Users, ShoppingCart } from "lucide-react";

// export default function Dashboard() {
//   return (
//    <div className="flex flex-col flex-wrap space-y-6 absolute ml-65 right-0 left-0 mt-0 h-full overflow-y-auto wrap">
//       {/* Top row: 4 stats cards */}
//       <div className="flex flex-row flex-wrap gap-6 w-315">
//         <div className="flex-1">
//           <StatCard title="Products" value="3213" icon={Package} color="bg-blue-500" />
//         </div>
//         <div className="flex-1">
//           <StatCard title="Customers" value="2145" icon={Users} color="bg-green-500" />
//         </div>
//         <div className="flex-1">
//           <StatCard title="Orders" value="876" icon={ShoppingCart} color="bg-red-500" />
//         </div>
//         <div className="flex-1">
//           <StatCard title="Revenue" value="$12.3k" icon={Package} color="bg-yellow-500" />
//         </div>
//          <div className="flex-1">
//           <StatCard title="Revenue" value="$12.3k" icon={Package} color="bg-yellow-500" />
//         </div>
//          <div className="flex-1">
//           <StatCard title="Revenue" value="$12.3k" icon={Package} color="bg-yellow-500" />
//         </div>
//       </div>

//       {/* Horizontal section: Stats + Bar + Line */}
//      <div className="flex  flex-row gap-6 w-full items-stretch">
//   <div className="flex flex-col gap-4 w-1/5 ">
//           <StatCard title="Products" value="3213" icon={Package} color="bg-blue-500" />
//           <StatCard title="Customers" value="2145" icon={Users} color="bg-green-500" />
//           <StatCard title="Orders" value="876" icon={ShoppingCart} color="bg-red-500" />
//         </div>

//         <div className="w-100 h-full">
//           <InventoryChart />
//         </div>

//         <div className="w-150 flex-1 h-full">
//           <LineGraph />
//         </div>
//       </div>

//       {/* Table */}
//       <HighestSoldTable />
//     </div>

    
//   );
// }


import React from "react";
import StatCard from "@/components/dashboard/StatCard";
import InventoryChart from "@/components/dashboard/InventoryChart"; // Bar chart
import LineGraph from "@/components/dashboard/LineGraph";           // Line chart
import HighestSoldTable from "@/components/dashboard/HighestSoldTable";
import { Package, Users, ShoppingCart } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex flex-col space-y-6 p-4 md:p-6 w-full h-full overflow-y-auto">
      {/* Top row: Stats cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <StatCard title="Products" value="3213" icon={Package} color="bg-blue-500" />
        <StatCard title="Customers" value="2145" icon={Users} color="bg-green-500" />
        <StatCard title="Orders" value="876" icon={ShoppingCart} color="bg-red-500" />
        <StatCard title="Revenue" value="$12.3k" icon={Package} color="bg-yellow-500" />

      </div>

      {/* Charts section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        {/* Left side small stats */}
        <div className="flex flex-col gap-4">
          <StatCard title="Products" value="3213" icon={Package} color="bg-blue-500" />
          <StatCard title="Customers" value="2145" icon={Users} color="bg-green-500" />
          <StatCard title="Orders" value="876" icon={ShoppingCart} color="bg-red-500" />
        </div>

        {/* Middle - Bar Chart */}
        <div className="lg:col-span-1">
          <InventoryChart />
        </div>

        {/* Right - Line Chart */}
        <div className="lg:col-span-1">
          <LineGraph />
        </div>
      </div>

      {/* Table */}
      <HighestSoldTable />
    </div>
  );
}
