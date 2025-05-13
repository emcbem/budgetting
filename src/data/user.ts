import { Budget } from "./budget";

export interface User {
    name: string;
    email: string;
    budgets: Budget[];
}