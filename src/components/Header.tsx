import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="w-full">
      <h1 className="text-4xl lg:text-6xl font-bold mb-4 lg:mb-8">
        Welcome, Henry
      </h1>
      <div className="flex flex-col lg:flex-row items-center md:items-start gap-y-5 lg:gap-x-8 mb-4 md:mb-8 lg:mb-8">
        <div className="flex flex-col gap-y-4 p-4 lg:px-8 lg:py-4 shadow-xl border-2 h-fit w-full md:w-[450px] lg:w-[450px] rounded-lg">
          <p className="uppercase  text-xs font-normal text-slate-400">
            current balance (ngn)
          </p>
          <h1 className="text-4xl font-bold">₦40,000.00</h1>
        </div>
        <div className="flex justify-start gap-x-4">
          <Link href="">
            <button className="basis-1/4 bg-black text-white font-medium flex items-center px-8 p-10 border-2 border-black rounded-lg text-xs uppercase ">
              send
            </button>
          </Link>
          <Link href="">
            <button className="basis-1/4 bg-black text-white font-medium flex items-center px-8 p-10 border-2 border-black rounded-lg text-xs uppercase ">
              fund
            </button>
          </Link>
          <Link href="">
            <button className="basis-1/4 flex items-center p-8 px-10 rounded-lg text-xl font-medium uppercase border-4 border-slate-600 text-black">
              +
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
