import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "../features/categorySlice";
import productSlice from "../features/productSlice";
// import  categorySlice  from "../features/categorySlice";

export default configureStore({
  reducer: {
    category: categorySlice,
    products: productSlice,
  },
});
