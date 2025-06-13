import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import Transaction from "./pages/Transaction";
import Navbar from "./components/Navbar";
import "./App.css";
import AddTransactions from "./pages/add-transaction";
import Quote from "./pages/Quote";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Navbar></Navbar>
          <Routes>
            <Route
              path="/add-transaction"
              element={<AddTransactions />}
            ></Route>
            <Route path="/" element={<Dashboard />} />
            <Route path="/transaction" element={<Transaction />} />

            <Route path="/Quote" element={<Quote />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
