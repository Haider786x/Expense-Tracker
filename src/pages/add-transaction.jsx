/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
export default function AddTransactions() {
  const [type, setType] = useState("Expense");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [date, setdate] = useState("");
  const [transaction, settransaction] = useState([]);
  const [editIndex, seteditIndex] = useState(null);
  const location = useLocation();
  function submitTransaction(e) {
    console.log(type, amount, description, date, category);
    if (!amount || !category || !date) {
      return alert("Please fill all the fields");
    }

    const currentTransaction = {
      type: type,
      amount: amount,
      category,
      description,
      date,
    };
    let newTransactions;
    if (editIndex == null) {
      newTransactions = [...transaction, currentTransaction];
    } else {
      newTransactions = [...transaction];
      newTransactions[editIndex] = currentTransaction;
    }

    console.log(transaction);

    localStorage.setItem("transaction", JSON.stringify(newTransactions));
    if (editIndex !== null) {
      alert("Transaction updated successfully");
    } else alert("Transaction added successfully");
    setAmount("");
    setType("Expense");
    setDescription("");
    setCategory("");
    setdate("");
  }
  useEffect(() => {
    const existingTransaction =
      JSON.parse(localStorage.getItem("transaction")) || [];
    settransaction(existingTransaction);
    if (location.state && location.state.transaction) {
      const transaction = location.state.transaction;
      setType(transaction.type);
      setAmount(transaction.amount);
      setdate(transaction.date);
      setCategory(transaction.category);
      setDescription(transaction.description);
      seteditIndex(transaction.index);
    }
  }, [location]);

  return (
    <>
      <div className="grid place-items-center">
        <div className="lg:w-[490px] w-auto h-auto lg:h-[520px]  mt-[40px]">
          <h2 className="text-start lg:mt-5 lg:font-[700] text-black text-xl">
            Add Transaction
          </h2>
          <div className="transaction_type border-[1px] gap-2 border-gray-400 shadow-2xl h-[80%] bg-white rounded-md">
            <div className="flex justify-start mt-5 ml-10 gap-5 font-bold">
              <input
                type="radio"
                htmlFor="Expense"
                value="Expense"
                checked={type == "Expense"}
                className="size-4"
                onChange={() => setType("Expense")}
              />
              <label className="-mt-1">Expense</label>
              <input
                type="radio"
                className="size-4"
                value="Income"
                checked={type == "Income"}
                onChange={() => setType("Income")}
              />
              <label className="-mt-1">Income</label>
            </div>
            <input
              type="number"
              placeholder="Amount (₹)"
              value={amount}
              className="mx-5 my-6 p-2 w-[90%] h-[40px] border-gray-400 border-2 rounded-md"
              onChange={(e) => setAmount(e.target.value)}
            />
            <select
              onChange={(e) => setCategory(e.target.value)}
              name="category"
              className="mx-5  p-2 w-[90%] h-[42px] border-gray-400 border-2 rounded-md -mt-3"
            >
              <option value="">Select a Category</option>
              <option value="Salary">Salary</option>
              <option value="Groceries"> Groceries</option>
              <option value="Dinning">Dining</option>
              <option value="Transport">Transport</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Others">Others</option>
            </select>
            <textarea
              placeholder="Description"
              className="mx-5 my-3 p-2 w-[90%] h-[65px] border-gray-400 border-2 rounded-md"
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              type="date"
              className="mx-5  p-2 w-[90%] h-[42px] font-bold border-gray-400 border-2 rounded-md -mt-3"
              onChange={(e) => setdate(e.target.value)}
            />
            <button
              onClick={submitTransaction}
              className="bg-red-500 font-[400] border-2 border-red-600 hover:bg-red-600 text-center rounded-md mx-5 my-8 p-2 w-[90%] h-[42px]  text-white md:font-[600]"
            >
              {editIndex == null ? "Add Transaction" : "Update Transaction"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
