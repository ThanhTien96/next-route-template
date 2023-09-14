import  { configureStore } from '@reduxjs/toolkit';
import createReducer from './root';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import listenerMiddleware from './listener';

// initial state
const initState = {};

const store = configureStore({
    reducer: createReducer(),
    middleware: (getDefaultMiddleware) => {
        if(process.env.NEXT_PUBLIC_APP_ENV === 'development') {
            const {logger} = require('redux-logger');

            return getDefaultMiddleware().concat(logger).prepend(listenerMiddleware.middleware);
        }

        return getDefaultMiddleware().prepend(listenerMiddleware.middleware);
    },
    devTools: process.env.NEXT_PUBLIC_APP_ENV === 'development',
    preloadedState: initState,
});

export default store;

// initialize type for redux
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Initialize redux custom hook
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;