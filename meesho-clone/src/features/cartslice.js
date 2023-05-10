import { createSlice } from "@reduxjs/toolkit";
// import { toFormData } from "axios";
import { combineReducers } from "redux";
const productsSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addProducts: (state, action) => {
      state.data = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    value: 0,
    total: 0,
  },
  reducers: {
    addItem: (state, action) => {
      state.value += 1;
      const tempData = { ...action.payload, quantity: 1 };
      state.items.push(tempData);
    },
    removeItem: (state, action) => {
      const data = action.payload;
      state.items = state.items.filter((item, id) => id !== data);
      state.value -= 1;
    },

    clearItem: (state, action) => {
      state.items = [];
    },
    decrease: (state, action) => {
      const itemIndex = state.items.findIndex(
        (cartitems) => cartitems.id === action.payload.id
      );
      if (state.items[itemIndex].quantity > 1) {
        state.items[itemIndex].quantity -= 1;
      } else if (state.items[itemIndex].quantity === 0) {
        state.items[itemIndex] = {};
      }
    },
    increase: (state, action) => {
      const itemIndex = state.items.findIndex(
        (cartitems) => cartitems.id === action.payload.id
      );
      state.items[itemIndex].quantity += 1;
    },
  },
});
// const counterSlice = createSlice({
//   name: "counter",
//   initialState: 0,
//   reducers: {
//     increment: (state) => state + 1,
//     decrement: (state) => state - 1,
//   },
// });
export const { addProducts, setLoading, setError } = productsSlice.actions;
export const { addItem, removeItem, clearItem, decrease, increase } =
  cartSlice.actions;
// export const { increment, decrement } = counterSlice.actions;
// export default productsSlice.reducer;
const reducer = combineReducers({
  productsSlice: productsSlice.reducer,
  cartSlice: cartSlice.reducer,
  // counterSlice: counterSlice.reducer,
});
export default reducer;
