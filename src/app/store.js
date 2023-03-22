import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counterSlice";

const store = configureStore(
    {
        reducers: [
            counterReducer,
        ]
    }
);

export default store;