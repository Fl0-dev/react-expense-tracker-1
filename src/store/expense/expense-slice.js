import { createSlice } from "@reduxjs/toolkit";

export const expenseSlice = createSlice({
    name: "expenseSlice",
    initialState: {// initial state
        expensesList: [],
    },
    reducers: { // reducers avec action à ajouter
        addExpense: (state, action) => {
            state.expensesList.push(action.payload);
            console.log("addExpense", state.expensesList);
        }
    }
});

export const { addExpense } = expenseSlice.actions;
