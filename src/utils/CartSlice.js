import { createSlice } from "@reduxjs/toolkit";

// Changed to PascalCase as per your preference
const CartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            console.log(action);
            state.items.push(action.payload);
        },
        removeItem: state => {
            state.items.pop();
        },
        clearCart: state => { // Ensure this reducer takes `state` as an argument
            state.items.length = 0;

            // or  state.items = [];
        },
    },
});

// Exporting the actions created by `createSlice`
export const { addItem, removeItem, clearCart } = CartSlice.actions;

// Exporting the reducer created by `createSlice`
export default CartSlice.reducer;
