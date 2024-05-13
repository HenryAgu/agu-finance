import React, { ChangeEvent } from "react";
import { useState } from "react";

const Fund = () => {
  const [fundValue, setFundValue] = useState('');
  const handleOnchange = (e: ChangeEvent<HTMLInputElement>) =>{
    const newValue = e.target.value.replace(/[^0-9]/g, '');
    setFundValue(newValue);
  }
  return (
    <form className="flex flex-col items-center justify-center gap-y-2 w-full mb-8">
      <h3 className="uppercase text-xs text-black font-medium">fund wallet</h3>
      <div className="flex items-center gap-x-1">
        <label htmlFor="">₦</label>
        <input type="text" value={fundValue} onChange={handleOnchange} placeholder="Enter amount" className="py-1.5 px-2 w-full border border-black text-sm" name="amount"/>
      </div>
      <button className="bg-black text-white py-2.5 px-10 rounded-md text-xs uppercase">Fund</button>
    </form>
  )
}

export default Fund
