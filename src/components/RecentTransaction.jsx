import React from "react";
export default function RecentTransactions({ transaction }) {
  return (
    <>
      {transaction
        .slice(-10)
        .reverse()
        .map((tx, index) => (
          <li
            key={index}
            className="border-b-2  flex justify-between m-5 border-gray-300"
          >
            <span className="">{tx.category}</span>
            <span
              className={
                tx.type == "Income" ? " text-green-400 " : "   text-red-400  "
              }
            >
              ₹{tx.amount}
            </span>
          </li>
        ))}
    </>
  );
}
