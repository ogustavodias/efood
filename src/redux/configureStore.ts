import { configureStore } from "@reduxjs/toolkit";

// Reducers
import cartReducer from "./reducers/cart";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export type RootReducer = ReturnType<typeof store.getState>;

export default store;
