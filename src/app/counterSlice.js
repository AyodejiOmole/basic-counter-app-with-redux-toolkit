import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        }, 
        decrement: (state) => {
            if(state.value < 1) {
                state.value = 0
                return;
            }
            state.value -= 1;
        },
        changeByAmount: (state, action) => {
            const {amount, type} = action.payload;
            if(type === "+") {
                state.value += Number(amount);
                return
            } 
            if(type === "-") {
                if(state.value < 1) {
                    state.value = 0
                    return;
                }
                state.value -= Number(amount);
                return
            }
        }
    },
});

export const { increment, decrement, changeByAmount } = counterSlice.actions;

export default counterSlice.reducer;