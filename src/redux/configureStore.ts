import { configureStore } from "@reduxjs/toolkit";

// Reducers
import cartReducer from "./reducers/cart";
import modalReducer from "./reducers/modal";
import { api } from "../services/api";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootReducer = ReturnType<typeof store.getState>;

export default store;
