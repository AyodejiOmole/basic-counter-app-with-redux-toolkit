import { createSlice } from "@reduxjs/toolkit";

const initialstate = {
    count : 0
}

const counterSlice = createSlice(
    initialstate,
    {
        increment: (state) => {
            state = state + 1;
        }, 
        decrement: (state) => {
            state = state - 1;
        }
    },
    name = counter
);

export let { increment, decrement } = counterSlice.actions;

export const counterReducer = counterSlice.reducer;