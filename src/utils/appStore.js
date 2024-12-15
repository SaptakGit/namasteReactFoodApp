import {configureStore} from "@reduxjs/toolkit";
import cratReducer from "./cartSlice";


const appStore = configureStore({
    reducer:{
        cart:cratReducer,
    },
});

export default appStore;
