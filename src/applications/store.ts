"use client";
import { configureStore } from "@reduxjs/toolkit";
import inputValueReducer from "@/applications/inputValue/InputValueSlice";
import balanceValueReducer from "@/applications/BalanceValueSlice/BalanceValueSlice";
import userValueReducer  from '@/applications/UserSlice/UserSlice';



export const store = configureStore({
  reducer: {
    inputValue: inputValueReducer,
    balanceValue: balanceValueReducer,
    userValue: userValueReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;

export default store;
