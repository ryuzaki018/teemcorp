import { configureStore } from "@reduxjs/toolkit";
import resultSlice from "./slices/resultSlice";
import cachedSymbolsSlice from "./slices/cachedSymbolsSlice";
const store = configureStore({
    reducer: {
        result: resultSlice,
        symbols: cachedSymbolsSlice,
    },
});

export default store;
