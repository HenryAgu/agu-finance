"use client";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface InputValueState {
  value: string;
}

let storedValue = "";
if(typeof window !== "undefined"){
  storedValue = localStorage.getItem("username") || "";
}

const initialValue = storedValue;

const initialState: InputValueState = {
  value: initialValue,
};

export const inputValueSlice = createSlice({
  name: "inputValue",
  initialState,
  reducers: {
    setInputValue: (state, action:PayloadAction<string>) => {
      state.value = action.payload;
      if(typeof window !== "undefined"){
        localStorage.setItem("username", action.payload);
      }
    },
  },
});

export const { setInputValue } = inputValueSlice.actions;
export default inputValueSlice.reducer;
