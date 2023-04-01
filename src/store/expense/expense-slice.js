import { createSlice } from "@reduxjs/toolkit";

export const expenseSlice = createSlice({
    name: "expenseSlice",
    initialState: {// initial state
        income: 1000,
        expensesList: [],
        countActionPerformed: 0
    },
    reducers: { // reducers avec action à ajouter
        setIncome: (currentSlice, action) => {
            currentSlice.income = Number.parseFloat(action.payload);//en float
        },

        addExpense: (currentSlice, action) => {
            //utilisation du spred operator pour modifier le type de price
            currentSlice.expensesList.push({...action.payload, price : Number.parseFloat(action.payload.price)});
        },
        // action pour compter le nombre d'action effectué grâce au middleware
        incrementCountActionPerformed: (currentSlice) => {
            currentSlice.countActionPerformed++;
        }
    }
});

const { addExpense, setIncome, incrementCountActionPerformed } = expenseSlice.actions;
export { addExpense, setIncome, incrementCountActionPerformed };
