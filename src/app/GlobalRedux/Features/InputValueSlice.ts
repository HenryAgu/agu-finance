"use client"
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InputValueState {
  value: string;
}

const initialState: InputValueState = {
  value: "",
};

export const inputValueSlice = createSlice({
  name: "inputValue",
  initialState,
  reducers: {
    setInputValue: (state, action) =>{
      state.value = action.payload; 
    }
  },
});

export const { setInputValue } = inputValueSlice.actions;
export default inputValueSlice.reducer;
