"use client";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface InputValueState {
  value: string;
}

const initialValue = typeof window !== "undefined" ? localStorage.getItem("username") || "" : "";

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
