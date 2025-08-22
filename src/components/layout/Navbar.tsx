import React, { useState } from "react";
import { Bell, ChevronDown } from "lucide-react";

const Navbar = () => {
  const allBranches = ["Main Branch", "Branch 1", "Branch 2"];
  const [branchInput, setBranchInput] = useState("Main Branch");
  const [isOpen, setIsOpen] = useState(false);

  const filteredBranches = allBranches.filter((b) =>
    b.toLowerCase().includes(branchInput.toLowerCase())
  );

  return (
    <nav className="  bg-white text-black  flex items-center justify-between  px-6 py-3 shadow-md ">
      {/* Left: Company Name + Branch Input */}
      <div className="flex items-center space-x-4 ">
        <div className=" text-2xl font-bold ">StockNep</div>

        <div className="relative">
          <input
            type="text"
            value={branchInput}
            onChange={(e) => setBranchInput(e.target.value)}
            onFocus={() => setIsOpen(true)}
            placeholder="Select Branch"
            className="px-3 py-1 rounded-md text-black focus:outline-none w-48"
          />
          <ChevronDown
            className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />

          {isOpen && (
            <ul className="absolute bg-white text-black w-48 mt-1 rounded-md shadow-lg max-h-48 overflow-auto z-10">
              {filteredBranches.map((b) => (
                <li
                  key={b}
                  className="px-3 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => {
                    setBranchInput(b);
                    setIsOpen(false);
                  }}
                >
                  {b}
                </li>
              ))}
              {filteredBranches.length === 0 && (
                <li className="px-3 py-2 text-gray-500">No branches found</li>
              )}
            </ul>
          )}
        </div>
      </div>

    
      <div className="flex items-center space-x-4">
        <Bell className="w-6 h-6 cursor-pointer" />
        <img
          src="https://i.pravatar.cc/40"
          alt="Profile"
          className="w-10 h-10 rounded-full border-2 border-white"
        />
      </div>
    </nav>
  );
};

export default Navbar;
