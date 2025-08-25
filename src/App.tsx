

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "@/pages/Dashboard";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import ItemList from "@/pages/ItemList"; 
import AddItem from "./pages/AddItem";
import { AddEmployee } from "./pages/AddEmployee";
import { Employees } from "./pages/Employee";
import { AddCustomerForm } from "./pages/Addcustomer";
import  {Customer}  from "./pages/Customer";
import { Addcounter } from "./pages/Addcounter";
import { Counter } from "./pages/Counter";
import Setting from "./pages/Setting";
import History from "./pages/History";
import Bill from "./pages/Bill";



function App() {
  return (
    <Router>
      <div className="flex ">
        <Sidebar /> {/* responsive sidebar */}

        <div className="flex-1 md:ml-60 flex flex-col ">
          {/* Navbar */}
          <div className="fixed top-0 left-0 right-0 z-10 ">
            <Navbar />
          </div>

          {/* Main Content */}
          <main className="p-5 mt-15 ">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/items" element={<ItemList />} />
              <Route path="/Additem" element={<AddItem />} />
              <Route path="/employee" element={<Employees />} />
              <Route path="/Addemployee" element={<AddEmployee />} />
              <Route path="/Addcustomer" element={<AddCustomerForm />} />
              <Route path="/customer" element={<Customer />} />
              <Route path="/counter" element={<Counter/>} />
              <Route path="/Addcounter" element={<Addcounter />} />
              <Route path="/setting" element={<Setting />} />
              <Route path="/history" element={<History />} />
              <Route path="/bill" element={<Bill />} />
              </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
