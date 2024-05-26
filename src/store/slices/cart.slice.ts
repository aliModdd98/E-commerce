import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  selectedProductIds: number[];
}

const initialState: CartState = {
  selectedProductIds: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<number>) => {
      state.selectedProductIds.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.selectedProductIds = state.selectedProductIds.filter(
        (id) => id !== action.payload
      );
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
