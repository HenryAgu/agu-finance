"use client"
import { configureStore } from "@reduxjs/toolkit";
import inputValueReducer from "@/app/GlobalRedux/Features/InputValueSlice";

export const store = configureStore({
    reducer:{
        inputValue: inputValueReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>

export default store;