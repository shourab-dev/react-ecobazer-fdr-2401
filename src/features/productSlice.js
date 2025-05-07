import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "products",
  initialState: null,
  reducers: {
    storeProducts: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { storeProducts } = productSlice.actions;

export default productSlice.reducer;
