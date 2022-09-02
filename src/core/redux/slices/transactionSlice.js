import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    transactionHistory: [],
    tranasction: null
};

export const transactionSlice = createSlice({
    name: 'transaction',
    initialState,
    reducers: {
        setTransactionsHistory: (state, action) => {
            state.transactionHistory = action.payload;
        },
        setTransaction: (state, action) => {
            state.tranasction = action.payload
        },
        addTransaction: (state, action) => {
            state.transactionHistory = [...state.transactionHistory, action.payload];
        }
    }
}); 


export const { setTransactionsHistory, setTransaction, addTransaction} = transactionSlice.actions;
export default transactionSlice.reducer;