"use client";
import { configureStore } from "@reduxjs/toolkit";
import inputValueReducer from "@/applications/inputValue/InputValueSlice";
import balanceValueReducer from "@/applications/BalanceValueSlice/BalanceValueSlice";

export const store = configureStore({
  reducer: {
    inputValue: inputValueReducer,
    balanceValue: balanceValueReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;

export default store;
