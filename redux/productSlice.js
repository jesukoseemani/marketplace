import { createSlice } from '@reduxjs/toolkit';
import db from '../firebase';

const initialState = {
	products: [],
	cartItems: [],
	bookmark: [],
	trigger: null,
};

export const productReducer = createSlice({
	name: 'products',
	initialState,
	reducers: {
		addToProduct: (state, action) => {
			state.products = action.payload;
		},
		addToCart: (state, action) => {
			const itemIndex = state.cartItems.findIndex(
				(cartItem) => cartItem.id === action.payload.id
			);
			let newCart = [...state.cartItems];
			if (itemIndex >= 0) {
				newCart[itemIndex].quantity += 1;
			} else {
				newCart = [...state.cartItems, action.payload];
			}
			localStorage.setItem('cart', JSON.stringify(newCart));
			state.cartItems = newCart;
		},
		removeFromCart: (state, action) => {
			const itemIndex = state.cartItems.findIndex(
				(cartItem) => cartItem.id === action.payload.id
			);

			let newCart = [...state.cartItems];
			newCart[itemIndex].content = false;
			if (itemIndex >= 0) {
				if (newCart[itemIndex].quantity > 1) {
					newCart[itemIndex].quantity -= 1;
				} else {
					newCart.splice(itemIndex, 1);
				}
			} else {
				console.warn('Item Not Found');
			}

			localStorage.setItem('cart', JSON.stringify(newCart));
			state.cartItems = newCart;

			// const itemIndex = state.cartItems.findIndex(
			//   (cartItem) => cartItem.id === action.payload.id
			// );

			// state.cartItems.splice(itemIndex, 1)

			// localStorage.setItem("cart", JSON.stringify(state.cartItems));
		},
		addToBookmark: (state, action) => {
			state.bookmark = [...state.bookmark, action.payload];
			localStorage.setItem('bookmark', JSON.stringify(state.bookmark));
		},
		removeFromBookmark: (state, action) => {
			const itemIndex = state.bookmark.findIndex(
				(bookItem) => bookItem.id === action.payload.id
			);

			state.bookmark.splice(itemIndex, 1);

			localStorage.setItem('bookmark', JSON.stringify(state.bookmark));
		},
		navInOut: (state, action) => {
			state.trigger = action.payload;
		},
		// addTocontent: (state, action) => {
		// 	let newCart = [...state.cartItems];

		// 	newCart = [...state.cartItems, action.payload];

		// 	localStorage.setItem('cart', JSON.stringify(newCart));
		// 	state.cartItems = newCart;
		// },
		// removeTocontent: (state, action) => {
		// 	let newCart = [...state.cartItems];

		// 	newCart = [...state.cartItems, action.payload];

		// 	localStorage.setItem('cart', JSON.stringify(newCart));
		// 	state.cartItems = newCart;
		// },
	},
});

export const {
	addToProduct,
	addToCart,
	removeFromCart,
	addToBookmark,
	removeFromBookmark,
	navInOut,
} = productReducer.actions;
export default productReducer.reducer;
