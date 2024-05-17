"use client";

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

const initialValue = storedBalance;

const initialState: BalanceValueState = {
  value: initialValue,
};

export const balanceValueSlice = createSlice({
  name: "balanceValue",
  initialState,
  reducers: {
    increaseBalance: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("balance", state.value.toString());
      }
    },
    decreaseBalance: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("balance", state.value.toString());
      }
    },
  },
});

export const { increaseBalance, decreaseBalance } = balanceValueSlice.actions;
export default balanceValueSlice.reducer;
