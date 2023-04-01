import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { expenseSlice } from "./expense/expense-slice";
import {
    persistReducer, persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { loggerMiddleware } from "./middlewares/logger-middleware";

// mise en place de redux-persist pour persister les données
// mettre toutes les slices dans un seul reducer
const rootReducers = combineReducers({
    EXPENSE: expenseSlice.reducer,
});
// configuration de redux-persist
const persistConfig = {
    key: "root",//clef de stockage
    version: 1,
    storage,
    whitelist: ["EXPENSE"],//liste des reducers à persister
    // blacklist: ["EXPENSE"],//liste des reducers à ne pas persister
};

// persiste les reducers
const persistedReducers = persistReducer(persistConfig, rootReducers);

// création du store
const store = configureStore({
    reducer: persistedReducers,
    // permet de désactiver le check de serialisation et les erreurs redux dans la console
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).prepend(loggerMiddleware.middleware),//ajout du middleware logger
});

//mise en place du store persisté dans un persistor
const persistor = persistStore(store);

export { store, persistor };