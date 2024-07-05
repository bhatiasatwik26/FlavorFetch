import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartSlice"; // Ensure the import matches the export

const AppStore = configureStore({
    reducer: {
        cart: CartReducer // Match this with the import
    }
});

export default AppStore;
