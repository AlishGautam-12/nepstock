import { Home, Package, Users, History, Settings, BookAIcon, Settings2Icon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const menuItems = [
  { name: "Dashboard", icon: Home, path: "/" },
  { name: "Items", icon: Package, path: "/items" },
  { name: "Customers", icon: Users, path: "/customers" },
  { name: "History", icon: History, path: "/history" },
  { name: "Bill", icon: BookAIcon, path: "/bill" },
  { name: "Counters", icon: Settings, path: "/counters" },
  { name: "Employee", icon: Settings2Icon, path: "/employee" },
  { name: "Setting", icon: Settings, path: "/setting" },
];

export default function Sidebar() {
  return (
   <aside className="w-60 bg-white shadow-md h-screen fixed left-0
    top-20">
  <div className="p-4 bg-black text-white  font-bold text-lg ">Dashboard</div>
  <nav className="mt-2 flex flex-col gap-1">
    {menuItems.map((item) => (
      <Link
        key={item.name}
        to={item.path}
        className={cn(
          "flex items-center gap-3 w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
        )}
      >
        <item.icon className="h-5 w-5" />
        {item.name}
      </Link>
    ))}
  </nav>
</aside>

  );
}
