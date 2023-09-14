import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { alert } from "./app/loggerSlice";


const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
    matcher: isAnyOf(alert),
    effect: async (action, listenerApi) => {
        const {dispatch} = listenerApi;

        // catching all rejected
        dispatch(
            alert({
                status: 'error',
                message: action.error.message,
            }),
        );
    },

});

export default listenerMiddleware;