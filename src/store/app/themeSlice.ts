import { createSlice } from "@reduxjs/toolkit";
import { AppThemeType } from "./appReducer";


export interface AppReducerType {
    theme: AppThemeType;
}


const initialState = {
    theme: 'light',
};

const appSlice = createSlice({
    name: 'appSlice',
    initialState,
    reducers: {}
});
export const {} = appSlice.actions;

export default appSlice.reducer;