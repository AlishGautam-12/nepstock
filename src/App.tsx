

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Dashboard from "@/pages/Dashboard";
// // import Customers from "@/pages/Customers";
// // import History from "@/pages/History";
// // import Bill from "@/pages/Bill";
// // import Counters from "@/pages/Counters";
// // import Employee from "@/pages/Employee";
// // import Setting from "@/pages/Setting";
// import Navbar from "./components/layout/Navbar";
// import Sidebar from "./components/layout/Sidebar";
// import ItemList from "@/pages/ItemList"; // import your page

// function App() {
//   return (
//     <Router>
//       <div className="flex ">
//       <Sidebar />
//      <div className="flex flex-col flex-1 ml-60">
//         <Navbar />  {/* your top navbar */}
//         <main className="p-5 ">
//           <Routes>
//             <Route path="/" element={<Dashboard />} />
//             <Route path="/items" element={<ItemList />} />
//             {/* <Route path="/customers" element={<Customers />} />
//             <Route path="/history" element={<History />} />
//             <Route path="/bill" element={<Bill />} />
//             <Route path="/counters" element={<Counters />} />
//             <Route path="/employee" element={<Employee />} />
//             <Route path="/setting" element={<Setting />} /> */}
//           </Routes>
//         </main>
//       </div>
//       </div>
//     </Router>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "@/pages/Dashboard";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import ItemList from "@/pages/ItemList"; 
import  {AddItem}  from "./pages/AddItem";

function App() {
  return (
    <Router>
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex flex-col flex-1">
          {/* Navbar should be full width across screen */}
          <div className="fixed top-0 left-0 right-0 z-50">
            <Navbar />
          </div>

          {/* Push content below navbar */}
          <main className="p-5 mt-16 ml-60 w-full">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/items" element={<ItemList />} />
               <Route path="/Additem" element={<AddItem />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
