import { combineReducers } from '@reduxjs/toolkit';

import appReducer from './app';

export type AsyncReducersProps = {
    [key: string]: any;
}

const rootReducer = {
    appReducer
};

const createReducer = (asyncReducer?: AsyncReducersProps) => combineReducers({
    ...asyncReducer,
    ...rootReducer,
});

export default createReducer;