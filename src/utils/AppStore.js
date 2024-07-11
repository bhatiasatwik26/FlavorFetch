import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartSlice";
import LocationReducer from "./LocationSlice" // Ensure the import matches the export

const AppStore = configureStore({
    reducer: {
        cart: CartReducer, // Match this with the import
        location : LocationReducer
    }
});

export default AppStore;
