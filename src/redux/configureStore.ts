import { configureStore } from "@reduxjs/toolkit";

// Reducers
import cartReducer from "./reducers/cart";
import modalReducer from "./reducers/modal";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
});

export type RootReducer = ReturnType<typeof store.getState>;

export default store;
