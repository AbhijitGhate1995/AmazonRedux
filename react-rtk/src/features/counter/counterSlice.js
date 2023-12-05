import { createSlice } from "@reduxjs/toolkit";
import { productData } from "../../productData";


const initialState = { 
    cart:[],
    items:productData,
    totalQuantity:0,
    totalPrice:0,
 };

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
   addToCart : (state,action) =>{
    state.cart.push(action.payload)
   }
  },
});
export const {addToCart } = counterSlice.actions;
export default counterSlice.reducer;