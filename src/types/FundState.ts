import { Transaction } from "./Transaction";

export interface fundState{
    value: number;
    transactions: Transaction[];
}