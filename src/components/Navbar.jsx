import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useRef } from "react";

import "./navbar.css";
export default function Navbar() {
  const navigate = useNavigate();
  const listRef = useRef(null);
  const toggleClick = () => {
    if (listRef.current) {
      const currentDisplay = listRef.current.style.display;
      listRef.current.style.display =
        currentDisplay === "none" ? "block" : "none";
    }
  };
  function handleReset() {
    localStorage.clear();
    navigate("/");
  }

  return (
    <div className="flex flex-col md:flex-row justify-between border-b-[1px] h-auto border-white shadow-md md:h-[72px] items-center w-[100%]">
      <h1 className="text-bold  text-xl md:text-2xl lg:text-3xl ml-3 font-[700]">
        Expense-Tracker
      </h1>
      <button className="md:hidden border-2 bg-white " onClick={toggleClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#000000"
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </button>
      <ul
        className="list hidden md:flex  md:gap-3 lg:gap-8 space-y-4 text-sm lg:text-[20px] md:text-[14px] mt-4  mr-3 "
        ref={listRef}
      >
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            📊 Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/transaction"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {" "}
            📄 Transaction
          </NavLink>
        </li>

        <li>
          <NavLink
            to={"/Quote"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            💡 Get Quote
          </NavLink>
        </li>
        <li>
          <button className="Reset" onClick={handleReset}>
            🔄 Reset
          </button>
        </li>
      </ul>
    </div>
  );
}
