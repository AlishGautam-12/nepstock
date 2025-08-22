

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Dashboard from "@/pages/Dashboard";
// import Navbar from "./components/layout/Navbar";
// import Sidebar from "./components/layout/Sidebar";
// import ItemList from "@/pages/ItemList"; 
// import  AddItem  from "./pages/AddItem";
// import  {AddEmployee} from "./pages/AddEmployee";
// import { Employees } from "./pages/Employee";
// import { AddCustomerForm } from "./pages/Addcustomer";
// import { Customers } from "./pages/Customer";

// function App() {
//   return (
//     <Router>
//       <div className="flex">
//   <Sidebar /> {/* fixed left */}
//   <div className="flex-1 ml-60 flex flex-col">
    
// <div className="fixed top-0 left-0 right-0 z-50">
//   <Navbar />
// </div>

//     <main className="p-5 mt-15">
//       <Routes>
//         <Route path="/" element={<Dashboard />} />
//         <Route path="/items" element={<ItemList />} />
//         <Route path="/Additem" element={<AddItem />} />
//         <Route path="/employee" element={<Employees />} />
//         <Route path="/Addemployee" element={<AddEmployee />} />
//         <Route path="/Addcustomer" element={<AddCustomerForm />} />
//         <Route path="/customer" element={<Customers/>} />
//       </Routes>
//     </main>
//   </div>
// </div>

//     </Router>
//   );
// }

// export default App;



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "@/pages/Dashboard";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import ItemList from "@/pages/ItemList"; 
import AddItem from "./pages/AddItem";
import { AddEmployee } from "./pages/AddEmployee";
import { Employees } from "./pages/Employee";
import { AddCustomerForm } from "./pages/Addcustomer";
import { Customers } from "./pages/Customer";
import { Addcounter } from "./pages/Addcounter";
import { Counter } from "./pages/Counter";


function App() {
  return (
    <Router>
      <div className="flex ">
        <Sidebar /> {/* responsive sidebar */}

        <div className="flex-1 md:ml-60 flex flex-col">
          {/* Navbar */}
          <div className="fixed top-0 left-0 right-0 z-30 ">
            <Navbar />
          </div>

          {/* Main Content */}
          <main className="p-5 mt-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/items" element={<ItemList />} />
              <Route path="/Additem" element={<AddItem />} />
              <Route path="/employee" element={<Employees />} />
              <Route path="/Addemployee" element={<AddEmployee />} />
              <Route path="/Addcustomer" element={<AddCustomerForm />} />
              <Route path="/customer" element={<Customers />} />
              <Route path="/counter" element={<Counter/>} />
              <Route path="/Addcounter" element={<Addcounter />} />
              </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
