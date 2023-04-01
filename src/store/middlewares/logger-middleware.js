import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { addExpense, incrementCountActionPerformed, setIncome } from "store/expense/expense-slice";

export const loggerMiddleware = createListenerMiddleware()

// mise en écoute des actions
loggerMiddleware.startListening({
    //si action alors on écoute l'action expenseSlice/addExpense ou expenseSlice/setIncome
    // predicate: (action) => {
    //     return action.type === "expenseSlice/addExpense" || action.type === "expenseSlice/setIncome";
    // },
    // autre façon de faire
    matcher: isAnyOf(addExpense, setIncome),
    // effet à faire suite à l'action écouté
    effect: async (action, listenerApi) => {
        console.log(action);
        listenerApi.dispatch(incrementCountActionPerformed());
        console.log(listenerApi.getState());

    }
});
