import React from "react";
import Image from "next/image";

interface FundProps {
  type: string;
  amount: number;
}

const Successful = ({ amount, type }: FundProps) => {
  const transactionAmount = amount.toLocaleString();
  return (
    <div className="flex flex-col gap-y-5 items-center">
      <div>
        <Image
          src="/assets/success.gif"
          alt="success"
          width={100}
          height={100}
        />
      </div>
      <div className="flex flex-col gap-y-0.5 uppercase text-center mt-[-10px] ">
        <p className="text-xs font-normal text-slate-400">
          transaction of <span className="font-bold">₦{transactionAmount}</span>
        </p>
        <p className="text-xs font-normal text-slate-400">has been {type} <span className="text-green-500">successfully</span></p>
      </div>
    </div>
  );
};

export default Successful;
