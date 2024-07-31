import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Types
import { Dish } from "../../types/restaurant";

export interface CartState {
  list: Dish[];
}

const initialState: CartState = {
  list: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action: PayloadAction<Dish>) {
      state.list.push(action.payload);
    },
    remove(state, action: PayloadAction<number>) {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
