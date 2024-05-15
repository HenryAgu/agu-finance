"use client"
import { createSlice } from "@reduxjs/toolkit";

export interface InputValueState {
  value: string;
}

const storedValue = localStorage.getItem("username");
const initialValue = storedValue !== null ? JSON.parse(storedValue) : "";

const initialState: InputValueState = {
  value: initialValue,
};

export const inputValueSlice = createSlice({
  name: "inputValue",
  initialState,
  reducers: {
    setInputValue: (state, action) =>{
      state.value = action.payload;
    },
  },
});

export const { setInputValue } = inputValueSlice.actions;
export default inputValueSlice.reducer;
