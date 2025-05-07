import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "category",
  initialState: null,
  reducers: {
    setProductCategory: (state, action) => {
      console.log(action);

      state = action.payload;
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProductCategory } = categorySlice.actions;

export default categorySlice.reducer;
