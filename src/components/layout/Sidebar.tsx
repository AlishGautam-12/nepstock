

import { Home, Package, Users, History, Settings, BookAIcon, Settings2Icon, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { useState } from "react";

const menuItems = [
  { name: "Dashboard", icon: Home, path: "/" },
  { name: "Items", icon: Package, path: "/items" },
  { name: "Customers", icon: Users, path: "/customer" },
  { name: "History", icon: History, path: "/history" },
  { name: "Bill", icon: BookAIcon, path: "/bill" },
  { name: "Counters", icon: Settings, path: "/counter" },
  { name: "Employee", icon: Settings2Icon, path: "/employee" },
  { name: "Setting", icon: Settings, path: "/setting" },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-black text-white rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 h-screen w-60 bg-white mt-22 shadow-md transform transition-transform duration-300 ",
          isOpen ? "translate-x-0" : "-translate-x-full",
          "md:translate-x-0" // Always visible on md+
        )}
      >
        <div className="p-4 bg-black text-white font-bold text-lg rounded-r-xl">Dashboard</div>
        <nav className="mt-2 flex flex-col gap-1">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="flex items-center gap-3 w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(false)} // Close sidebar on click (mobile)
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
