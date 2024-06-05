"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState)=> state.userValue.user);

  useEffect(()=>{
      if(user === null){
        router.push("/");
      }
  },[user])

  async function handleLogout(){
    try{
      await account.deleteSession("current");
      dispatch(setUser(!user))
      router.push("/login");
      toast("Logged out successfully!",{
        className:"text-red-700"
      });
    } catch(e){
      console.error(e);
    }
  }
  return (
    <div className="w-full">
      <Toaster/>
      <div className="p-4 lg:p-6 flex items-center justify-between">
        <div>
          <p className="font-bold text-xl">Agu-Finance</p>
        </div>
        <div>
          <button
            className="bg-black text-white py-2.5 px-8 rounded-md text-sm"
            onClick={handleLogout}
          >
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

import { useEffect } from "react";
import { Modal } from "../../components/ui/Modal";
import FundModal from "./FundModal/FundModal";
import SendModal from "./SendModal/SendModal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/applications/store";
import { account } from "../appwrite";
import { Toaster, toast } from "sonner";
import { setUser } from "@/applications/UserSlice/UserSlice";

const Header = () => {
  const [greeting, setGreeting] = useState<string>("Welcome");
  const [isSendModalOpen, setIsSendModalOpen] = useState<boolean>(false);
  const [isFundModalOpen, setIsFundModalOpen] = useState<boolean>(false);

  const value = useSelector((state: RootState) => state.inputValue.value);
  const username = value.charAt(0).toUpperCase() + value.slice(1);
  const balance = useSelector((state: RootState) => state.balanceValue.value);

  useEffect(() => {
    let currentTime: number = new Date().getHours();
    if (currentTime >= 5 && currentTime < 12) {
      setGreeting("Good morning");
    } else if (currentTime >= 12 && currentTime < 17) {
      setGreeting("Good afternoon");
    } else {
      setGreeting("Good evening");
    }
  }, []);

  return (
    <div className="w-full">
      <h1 className="capitalize text-4xl lg:text-6xl font-bold mb-4 lg:mb-8">
        {greeting}, {username}
      </h1>
      <div className="flex flex-col lg:flex-row items-center md:items-start gap-y-5 lg:gap-x-8 mb-4 md:mb-8 lg:mb-8">
        <div className="flex flex-col gap-y-4 p-4 lg:px-8 lg:py-4 shadow-xl border-2 h-fit w-full md:w-[450px] lg:w-[450px] rounded-lg">
          <p className="uppercase  text-xs font-normal text-slate-400">
            current balance (ngn)
          </p>
          <h1 className="text-4xl font-bold">₦{balance.toLocaleString()}</h1>
        </div>
        <div className="flex justify-start gap-x-4">
          <button
            className="basis-1/4 bg-black text-white font-medium flex items-center px-8 p-10 border-2 border-black rounded-lg text-xs uppercase"
            onClick={() => setIsFundModalOpen(true)}
          >
            fund
          </button>
          <Modal
            isOpen={isFundModalOpen}
            onClose={() => setIsFundModalOpen(false)}
          >
            <div className="w-full">
              <FundModal />
            </div>
          </Modal>
          <button
            className="basis-1/4 bg-black text-white font-medium flex items-center px-8 p-10 border-2 border-black rounded-lg text-xs uppercase"
            onClick={() => setIsSendModalOpen(true)}
          >
            send
          </button>
          <Modal
            isOpen={isSendModalOpen}
            onClose={() => setIsSendModalOpen(false)}
          >
            <div className="w-full">
              <SendModal />
            </div>
          </Modal>

          <button className="basis-1/4 flex items-center p-8 px-10 rounded-lg text-xl font-medium uppercase border-4 border-slate-600 text-black">
            +
          </button>
        </div>
      </div>
    </div>
  );
};



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
