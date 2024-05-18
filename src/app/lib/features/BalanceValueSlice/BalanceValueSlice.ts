"use client";

import { fundState } from "@/types/FundState";
import { Transaction } from "@/types/Transaction";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface BalanceValueState {
  value: number;
}
let storedBalance = 0;
if (typeof window !== "undefined") {
  const balance = localStorage.getItem("balance");
  const parsedBalance = parseFloat(balance || "0");
  storedBalance = isNaN(parsedBalance) ? 0 : parsedBalance;
}

let storedTransactions: Transaction[] = [];
const storedTransactionsString = localStorage.getItem("transactions");
if(storedTransactionsString){
  storedTransactions = JSON.parse(storedTransactionsString);
}

const initialValue = storedBalance;


const initialState: fundState = {
  value: initialValue,
  transactions: storedTransactions,
};

export const balanceValueSlice = createSlice({
  name: "balanceValue",
  initialState,
  reducers: {
    increaseBalance: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
      const newTransaction: Transaction = {
        type: "fund",
        value: action.payload,
        status: "successful"
      }
      state.transactions.push(newTransaction);
      if (typeof window !== "undefined") {
        localStorage.setItem("balance", state.value.toString());
        localStorage.setItem("transactions", JSON.stringify(state.transactions));
      }
    },
    decreaseBalance: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
      const newTransaction: Transaction = {
        type: "transfer",
        value: action.payload,
        status: "successful"
      }
      state.transactions.push(newTransaction);
      if (typeof window !== "undefined") {
        localStorage.setItem("balance", state.value.toString());
        localStorage.setItem("transactions", JSON.stringify(state.transactions));
      }
    },
  },
});

export const { increaseBalance, decreaseBalance } = balanceValueSlice.actions;
export default balanceValueSlice.reducer;
