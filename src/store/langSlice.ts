import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";

export interface LangSlice {
    lang: object,
}

const initialState: LangSlice = {
    lang: {},
}
export const langSlice = createSlice({
    name: 'lang',
    initialState,
    reducers: {
        toggleLang: (state, action: PayloadAction<object>) => {
            state.lang = action.payload
        }
    }
})

export const {toggleLang} = langSlice.actions;
export default langSlice.reducer;