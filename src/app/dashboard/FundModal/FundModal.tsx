import { increaseBalance } from "@/applications/BalanceValueSlice/BalanceValueSlice";
import React, { ChangeEvent } from "react";
import { useState, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import SuccessfulModal from "@/components/SuccessfulModal";
import { RootState } from "@/applications/store";

const Fund = () => {
  const [fundValue, setFundValue] = useState<number>(0);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const handleOnchange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue: number = parseFloat(e.target.value.replace(/[^0-9.]/g, ""));
    setFundValue(newValue);
  };
  const dispatch = useDispatch();
  const balance = useSelector((state: RootState) => state.balanceValue.value);

  const handleFundFunction = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (fundValue < 50) {
      setError("You cannot fund below ₦50");
    } else {
      dispatch(increaseBalance(fundValue));
      setIsSubmitted(true);
    }
  };

  return (
    <>
      {isSubmitted ? (
        <SuccessfulModal amount={fundValue} type="funded" />
      ) : (
        <form
          className="flex flex-col items-center justify-center gap-y-2 w-full mb-8"
          onSubmit={handleFundFunction}
        >
          <h3 className="uppercase text-xs text-black font-medium">
            fund wallet
          </h3>
          <div className="flex items-center gap-x-1">
            <label htmlFor="">₦</label>
            <input
              type="text"
              value={fundValue}
              onChange={handleOnchange}
              placeholder="Enter amount"
              className="py-1.5 px-2 w-full border border-black text-sm"
              name="amount"
            />
          </div>
          <span className="text-xs text-red-600">{error}</span>
          <button className="bg-black text-white py-2.5 px-10 rounded-md text-xs uppercase">
            Fund
          </button>
        </form>
      )}
    </>
  );
};

export default Fund;
