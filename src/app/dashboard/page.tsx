"use client";
import React, { useState } from "react";
import Transaction from "@/components/Transaction";
import Header from "@/components/Header";
import { useRouter } from "next/router";

const page = () => {
  // const router = useRouter()
  const handleLogout = () => {
    // router.push("/login");
  }
  return (
    <div className="w-full">
      <div className="p-4 lg:p-6 flex items-center justify-between">
        <div>
          <p className="font-bold text-xl">Agu-Finance</p>
        </div>
        <div>
          <button className="bg-black text-white py-2.5 px-8 rounded-md text-sm" onClick={handleLogout}>
            Logout
          </button>
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
