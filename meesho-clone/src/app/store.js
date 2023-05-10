import { configureStore } from "@reduxjs/toolkit";
import cartRedcuer from "../features/cartslice";
export const store = configureStore({
  reducer: {
    cart: cartRedcuer,
  },
});
