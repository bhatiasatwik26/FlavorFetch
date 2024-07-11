import { createSlice, current } from "@reduxjs/toolkit";

// Changed to PascalCase as per your preference
const CartSlice = createSlice({
    name: "cart",
    initialState: {
        items: {}
    },
    reducers: {
        addItem: (state, action) => {
            if(state.items[action?.payload?.card?.info?.id])
                state.items[action?.payload?.card?.info?.id].qty++;
            else
                state.items[action?.payload?.card?.info?.id] = {item:action.payload , qty : 1}
            console.log(current(state.items))
        },
        removeItem: (state , action) => {
            if(state.items[action?.payload?.card?.info?.id].qty > 1)
                state.items[action?.payload?.card?.info?.id].qty--;
            else
                delete state.items[action?.payload?.card?.info?.id];
        },
        clearCart: state => { // Ensure this reducer takes `state` as an argument
            state.items = {};
        },
    },
});

// Exporting the actions created by `createSlice`
export const { addItem, removeItem, clearCart } = CartSlice.actions;

// Exporting the reducer created by `createSlice`
export default CartSlice.reducer;
