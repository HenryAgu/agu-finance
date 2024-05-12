import React from "react";
import Transaction from "@/components/Transaction";
import Header from "@/components/Header";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-full">
      <div className="p-4 lg:p-6 flex items-center justify-between">
        <div>
          <p className="font-bold text-xl">Agu-Finance</p>
        </div>
        <div>
          <Link href="/">
            <button className="bg-black text-white py-2.5 px-8 rounded-md text-sm">
              Logout
            </button>
          </Link>
        </div>
      </div>
      <div className="p-4 lg:p-12">
        <Header />
        <Transaction />
      </div>
    </div>
  );
};

export default page;
