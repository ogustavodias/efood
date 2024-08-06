import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
    clear(state) {
      state.list = [];
    },
  },
});

export const { add, remove, clear } = cartSlice.actions;

export default cartSlice.reducer;
