
import { combineReducers } from '@reduxjs/toolkit';
import appSlice from './themeSlice';
import loggerSlice from './loggerSlice';


const createReducer = combineReducers({
    appSlice,
    loggerSlice,
});

export default createReducer;