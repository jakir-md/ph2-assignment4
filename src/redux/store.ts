import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";

export const Store = configureStore({
    reducer:{
        [baseApi.reducerPath]:baseApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware)
})

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;