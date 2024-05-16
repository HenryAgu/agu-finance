import { decreaseBalance } from "@/app/lib/features/BalanceValueSlice/BalanceValueSlice";
import React, { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Send = () => {
  const [sendValue, setSendValue] = useState<number>(0);
  const handleOnchange = (e: ChangeEvent<HTMLInputElement>) =>{
    const newValue: number = parseFloat(e.target.value.replace(/[^0-9]/g, ''));
    setSendValue(newValue);
  }

  const dispatch = useDispatch();

  const handleSendFunction = (e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    dispatch(decreaseBalance(sendValue));
  }

  return (
    <form className="flex flex-col items-center justify-center gap-y-2 w-full mb-8" onSubmit={handleSendFunction}>
      <h3 className="uppercase text-xs text-black font-medium">send funds</h3>
      <div className="flex items-center gap-x-1">
        <label htmlFor="">₦</label>
        <input type="text"  placeholder="Enter amount" value={sendValue} onChange={handleOnchange} className="py-1.5 px-2 w-full border border-black text-sm" name="amount"/>
      </div>
      <button className="bg-black text-white py-2.5 px-10 rounded-md text-xs uppercase">Send</button>
    </form>
  );
};

export default Send;
