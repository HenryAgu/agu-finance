import { decreaseBalance } from "@/applications/BalanceValueSlice/BalanceValueSlice";
import React, { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SuccessfulModal from "@/components/SuccessfulModal";
import { RootState } from "@/applications/store";

const Send = () => {
  const [sendValue, setSendValue] = useState<number>(0);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const handleOnchange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue: number = parseFloat(e.target.value.replace(/[^0-9]/g, ""));
    setSendValue(newValue);
  };

  const balance = useSelector((state: RootState) => state.balanceValue.value);
  const dispatch = useDispatch();

  const handleSendFunction = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sendValue < 100) {
      setError("You cannot transfer below ₦100");
    } else if (sendValue > balance) {
      setError("Insufficient funds");
    } else {
      setIsSubmitted(true);
      dispatch(decreaseBalance(sendValue));
    }
  };

  return (
    <>
      {isSubmitted ? (
        <SuccessfulModal type="sent" amount={sendValue} />
      ) : (
        <form
          className="flex flex-col items-center justify-center gap-y-2 w-full mb-8"
          onSubmit={handleSendFunction}
        >
          <h3 className="uppercase text-xs text-black font-medium">
            send funds
          </h3>
          <div className="flex items-center gap-x-1">
            <label htmlFor="">₦</label>
            <input
              type="text"
              placeholder="Enter amount"
              value={sendValue}
              onChange={handleOnchange}
              className="py-1.5 px-2 w-full border border-black text-sm"
              name="amount"
            />
          </div>
          <span className="text-xs text-red-600">{error}</span>
          <button className="bg-black text-white py-2.5 px-10 rounded-md text-xs uppercase">
            Send
          </button>
        </form>
      )}
    </>
  );
};

export default Send;
