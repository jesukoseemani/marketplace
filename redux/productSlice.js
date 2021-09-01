import { createSlice } from "@reduxjs/toolkit";
import db from "../firebase"

const initialState = {
  products: [],
  cartItems:[],
  bookmark: [],
};

export const productReducer = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToProduct: (state, action) => {
      state.products = action.payload
    },
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      let newCart = [...state.cartItems]
      if(itemIndex >= 0){
        newCart[itemIndex].quantity += 1
      }else{
        newCart = [...state.cartItems, action.payload]
      }
       
      localStorage.setItem("cart", JSON.stringify(newCart));
      state.cartItems = newCart
      
    },
    removeFromCart: (state, action) => {

      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      let newCart = [...state.cartItems]
      if(itemIndex >= 0){
        if (newCart[itemIndex].quantity > 1) {
          newCart[itemIndex].quantity -= 1;
        }
        else{
         newCart.splice(itemIndex, 1);
        }
        
      } else {
        console.warn("Item Not Found");
      }
       
      localStorage.setItem("cart", JSON.stringify(newCart));
      state.cartItems = newCart


      // const itemIndex = state.cartItems.findIndex(
      //   (cartItem) => cartItem.id === action.payload.id
      // );
     
      // state.cartItems.splice(itemIndex, 1)
     
      // localStorage.setItem("cart", JSON.stringify(state.cartItems));
     
    },
    addToBookmark: (state, action) => {
      state.bookmark = [...state.bookmark, action.payload]
     localStorage.setItem("bookmark", JSON.stringify(state.bookmark));
   },
   removeFromBookmark: (state, action) => {
     const itemIndex = state.bookmark.findIndex(
       (bookItem) => bookItem.id === action.payload.id
     );

     state.bookmark.splice(itemIndex, 1)
    
     localStorage.setItem("bookmark", JSON.stringify(state.bookmark));
    
   }
    
  }
})

export const { addToProduct, addToCart, removeFromCart, addToBookmark, removeFromBookmark } = productReducer.actions;
export default productReducer.reducer;