export default function TransactionCard({ income, expense, balance }) {
  return (
    <>
      <div>
        <div className="bg-gray-200 h-[100px] border-2 border-gray-200 rounded-md w-[90%] lg:h-[160px] m-auto">
          <h1 className="lg:mx-10 lg:mt-5 text-2xl">Current Balance</h1>
          <h1 className="lg:mx-10 lg:mt-5 text-2xl text-black font-[700]">
            ₹{balance}
          </h1>
        </div>
        <div className="flex justify-between  w-[90%] lg:h-[160px] m-auto lg:mt-10 mt-5">
          <div className="border-b-[1px] text-center border-white shadow-md w-[48%] h-[160px] ">
            <p className="text-2xl text-black font-[700]">Total Income</p>
            <h1 className="mt-5 text-green-500 text-2xl font-extrabold">
              ₹{income}
            </h1>
          </div>
          <div className="border-b-[1px] text-center border-white shadow-md w-[48%] h-[160px]">
            <p className="text-2xl text-black font-[700]">Total Expense</p>
            <h1 className="mt-5 text-red-500 text-2xl font-extrabold">
              ₹{expense}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
