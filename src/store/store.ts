import {configureStore} from "@reduxjs/toolkit";
import {langSlice} from "@/store/langSlice";

export const store = configureStore({
    reducer: {
        lang: langSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch