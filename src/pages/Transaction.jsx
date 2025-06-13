import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Transaction() {
  const navigate = useNavigate();
  const [transaction, settransaction] = useState([]);
  const existingTransaction =
    JSON.parse(localStorage.getItem("transaction")) || [];
  useEffect(() => {
    const existingTransaction =
      JSON.parse(localStorage.getItem("transaction")) || [];
    settransaction(existingTransaction);
  }, []);
  function handleEdit(index) {
    const editTransaction = transaction[index];
    navigate("/add-transaction", {
      state: { transaction: { ...editTransaction, index } },
    });
  }
  function handleDelete(index) {
    const updatedTransaction = transaction.filter((data, i) => i !== index);
    settransaction(updatedTransaction);
    localStorage.setItem("transaction", JSON.stringify(updatedTransaction));
  }
  return (
    <>
      <div className="grid place-items-center ">
        <h2 className="text-2xl font-[600] m-5 ">All Transactions</h2>
        <table className="w-[80%] table-auto h-auto text-left   border-collapse  border-gray-400  border-tools-table-outline border  ">
          <thead className="border-r  border-b border-gray-600 px-4 py-2">
            <tr className="bg-gray-200">
              <th className="border-r  border-b border-gray-600 px-4 py-2">
                Category
              </th>
              <th className="border-r  border-b border-gray-600 px-4 py-2">
                Description
              </th>
              <th className="border-r  border-b border-gray-600 px-4 py-2">
                Amount
              </th>
              <th className="border-r  border-b border-gray-600 px-4 py-2">
                Date
              </th>
              <th className="border-r  border-b border-gray-600 px-4 py-2">
                Types
              </th>
              <th className="border-r  border-b border-gray-600 px-4 py-2">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {transaction.map((tx, index) => (
              <tr key={index} className="h-auto">
                <td className="border-r border-b border-gray-600 px-4 py-2">
                  {tx.category}
                </td>
                <td className="border-r  border-b border-gray-600 px-4 py-2">
                  {tx.description || "no description"}
                </td>
                <td
                  className={
                    tx.type == "Income"
                      ? "border-r  border-b text-green-400 border-gray-600 px-4 py-2 "
                      : "border-r  border-b border-gray-600 text-red-400 px-4 py-2 "
                  }
                >
                  ₹ {tx.amount}
                </td>
                <td className="border-r  border-b border-gray-600 px-4 py-2">
                  {tx.date}
                </td>
                <td className="border-r  border-b border-gray-600 px-4 py-2">
                  {tx.type}
                </td>
                <td className="border-r flex  justify-between border-b border-gray-600 px-4 py-2">
                  <button
                    onClick={() => handleEdit(index)}
                    className="h-auto flex  w-[40%] p-2 border-2 hover:bg-amber-500 border-amber-300 rounded-md bg-amber-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#000000"
                    >
                      <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
                    </svg>
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="h-auto  text-white flex  w-[40%] fex p-2 border-2  hover:bg-red-600 border-red-600 rounded-md bg-red-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#CCCCCC"
                    >
                      <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                    </svg>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
