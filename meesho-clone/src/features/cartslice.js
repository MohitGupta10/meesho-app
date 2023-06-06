import { createSlice } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
const productsSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
    serach: [],
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
    setserachItem: (state, action) => {
       state.serach=action.payload
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
      state.value = 0;
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
export const { addProducts, setLoading, setError, setserachItem } =
  productsSlice.actions;
export const { addItem, removeItem, clearItem, decrease, increase } =
  cartSlice.actions;
const reducer = combineReducers({
  productsSlice: productsSlice.reducer,
  cartSlice: cartSlice.reducer,
});
export default reducer;
