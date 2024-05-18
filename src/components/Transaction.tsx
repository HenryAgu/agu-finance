import { RootState } from "@/app/lib/store";
import React from "react";
import { useSelector } from "react-redux";

const Transaction = () => {
  const transactions = useSelector(
    (state: RootState) => state.balanceValue.transactions
  );
  const currentDate = new Date();

  const getStatusColor = (status: string) => {
    switch (status) {
      case "successful":
        return "text-green-600";
      case "pending":
        return "text-yellow-600";
      case "failed":
        return "text-red-600";
      default:
        return "";
    }
  };

  return (
    <div>
      <div>
        <h1 className="font-semibold text-xl mb-2 lg:text-3xl lg:mb-4">
          Transactions
        </h1>
      </div>
      {transactions.length === 0 ? (
        <p className="text-center text-base text-slate-400">
          No transaction found
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Type</th>
                <th className="px-4 py-2">Amount (₦)</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr className="text-center" key={index}>
                  <td className="border px-4 py-2">
                    {currentDate.toLocaleDateString()}
                  </td>
                  <td className="border px-4 py-2">{transaction.type}</td>
                  <td className="border px-4 py-2">
                    ₦ {transaction.value.toLocaleString()}
                  </td>
                  <td
                    className={`border px-4 py-2 font-bold text-sm ${getStatusColor(
                      transaction.status
                    )}`}
                  >
                    {transaction.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Transaction;
