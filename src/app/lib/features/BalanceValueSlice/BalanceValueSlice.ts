"use client"

import { createSlice,PayloadAction } from "@reduxjs/toolkit";

export interface BalanceValueState{
    value: number;
}

const initialState: BalanceValueState ={
    value: 0,
}

export const balanceValueSlice = createSlice({
    name: "balanceValue",
    initialState,
    reducers:{
        increaseBalance: (state, action:PayloadAction<number>)=>{
            state.value += action.payload;
        },
        decreaseBalance: (state, action:PayloadAction<number>)=>{
            state.value -= action.payload;
        },
    }
})

export const {increaseBalance, decreaseBalance} = balanceValueSlice.actions;
export default balanceValueSlice.reducer;