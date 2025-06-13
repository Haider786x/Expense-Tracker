import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import TransactionCard from "../components/TransactionCard";
import RecentTransactions from "../components/RecentTransaction";

function Dashboard() {
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [balance, setBalance] = useState(0);
  useEffect(() => {
    const existingTransaction =
      JSON.parse(localStorage.getItem("transaction")) || [];
    setTransaction(existingTransaction);
    let income = 0;
    let expense = 0;

    existingTransaction.forEach((tx) => {
      const amount = Number(tx.amount);
      if (tx.type == "Income") {
        income += amount;
      } else {
        expense += amount;
      }
    });
    setTotalExpense(expense);
    setTotalIncome(income);
    setBalance(income - expense);
  }, []);
  return (
    <>
      <div className="">
        <div className="flex justify-between m-5">
          <h2 className="font-[700] md:text-3xl">Dashboard</h2>
          <button
            className="bg-red-400 border-2 border-red-600 hover:bg-red-500 h-auto w-auto rounded-md md:w-[190px] md:h-[40px] text-white font-[600]"
            onClick={() => navigate("/add-transaction")}
          >
            + Add Transaction
          </button>
        </div>
        <TransactionCard
          balance={balance}
          income={totalIncome}
          expense={totalExpense}
        ></TransactionCard>
        <div className="flex justify-between m-5">
          <div className="bg-blue-300bg-gray-200 h-auto border-2 border-gray-200 rounded-md w-[96%]  m-auto">
            <h3 className="lg:mx-10 lg:mt-5 lg:text-2xl text-black font-[700]">
              Recent Transaction
            </h3>

            {transaction.length == 0 ? (
              <h1 className="lg:mx-10 lg:mt-5 lg:text-2xl text-black font-[700]">
                No available transaction
              </h1>
            ) : (
              <RecentTransactions transaction={transaction} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
