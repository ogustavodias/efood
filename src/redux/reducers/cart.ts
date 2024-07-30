import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Types
import { Dish } from "../../types/restaurant";

export interface CartState {
  isOpen: boolean;
  list: Dish[];
}

const initialState: CartState = {
  isOpen: false,
  list: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    open(state) {
      state.isOpen = true;
    },
    close(state) {
      state.isOpen = false;
    },
    add(state, action: PayloadAction<Dish>) {
      state.list.push(action.payload);
    },
    remove(state, action: PayloadAction<number>) {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
  },
});

export const { open, close, add, remove } = cartSlice.actions;

export default cartSlice.reducer;
