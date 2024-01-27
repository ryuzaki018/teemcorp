import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    companyProfile: [],
    companyQuote: [],
};

const resultSlice = createSlice({
    name: "result",
    initialState: initialState,
    reducers: {
        setResult(state, action) {
            return { ...state, [action.payload.formType]: action.payload.data };
        },
        resetResult() {
            return { ...initialState };
        },
    },
});

export const { setResult, resetResult } = resultSlice.actions;
export default resultSlice.reducer;
