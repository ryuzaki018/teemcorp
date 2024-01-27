import { createSlice } from "@reduxjs/toolkit";

const cachedSymbolsSlice = createSlice({
    name: "cachedSymbols",
    initialState: {
        companyProfile: [],
        companyQuote: [],
    },
    reducers: {
        setCachedSymbol(state, action) {
            state[action.payload.formType] = [
                ...state[action.payload.formType],
                ...action.payload.data,
            ];
        },
    },
});

export const { setCachedSymbol } = cachedSymbolsSlice.actions;
export default cachedSymbolsSlice.reducer;
