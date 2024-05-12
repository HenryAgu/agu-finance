import React from "react";

export interface Transaction {
  date: string;
  transactionType: string;
  transactionAmount: string;
  transactionStatus: "completed" | "failed" | "pending";
}

const Transaction = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const date = `${day}-${month}-${year}`;

  const transactions: Transaction[] = [
    {
      date: date,
      transactionType: "Fund",
      transactionAmount: "1,200",
      transactionStatus: "completed",
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="table-auto min-w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Type</th>
            <th className="px-4 py-2">Amount (₦)</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index: number) => (
            <tr className="text-center">
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{transaction.date}</td>
              <td className="border px-4 py-2">
                {transaction.transactionType}
              </td>
              <td className="border px-4 py-2">
                {transaction.transactionAmount}
              </td>
              <td className="border px-4 py-2">
                {transaction.transactionStatus}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transaction;
