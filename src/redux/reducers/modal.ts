import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalElementIn {
  id: "cart" | "dish";
  value: string;
}

export interface ModalState {
  isOpen: boolean;
  elementIn: ModalElementIn | null;
}

const initialState: ModalState = {
  isOpen: false,
  elementIn: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    open(state) {
      state.isOpen = true;
    },
    close(state) {
      state.isOpen = false;
    },
    setElementIn(state, action: PayloadAction<ModalElementIn>) {
      state.elementIn = action.payload;
    },
  },
});

export const { open, close, setElementIn } = modalSlice.actions;

export default modalSlice.reducer;
