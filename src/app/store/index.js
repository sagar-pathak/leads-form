import { configureStore, Tuple } from '@reduxjs/toolkit'
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import {thunk, applyMiddle} from 'redux-thunk';
import reducers from './reducers';
import { createLogger } from 'redux-logger'
import { combineReducers, applyMiddleware } from "redux";

const logger = createLogger({
    collapsed: true
})

// create a makeStore function
const makeConfiguredStore = (reducer, initialState) => {
    return configureStore({
        reducer: reducer,
        // middleware: [ReduxThunk, logger],
        middleware: () => new Tuple(applyMiddleware(thunk), logger),
        devTools: process.env.NODE_ENV !== 'production',
        preloadedState: { ...initialState }
    });
}


const makeStore = (initialState, options) => {

    let store = null;
    const isServer = typeof window === 'undefined';

    if (isServer) {
        store = makeConfiguredStore(reducers, initialState);
    } else {
        // we need it only on client side
        const { persistStore, persistReducer } = require('redux-persist');
        const storage = require('redux-persist/lib/storage').default;

        const persistConfig = {
            key: 'leads-app',
            // whitelist: ['fromClient'], // make sure it does not clash with server keys
            storage
        };

        const persistedReducer = persistReducer(persistConfig, combineReducers(reducers));
        store = makeConfiguredStore(persistedReducer, initialState);

        store.__persistor = persistStore(store); // Nasty hack

        return store;
    }

    if (process.env.NODE_ENV === "development" && module.hot) {
        // @ts-ignore
        module.hot.accept("./reducers", () => {
            const newRootReducer = require("./reducers").default;
            store.replaceReducer(newRootReducer);
        });
    }

    return store;
}


// export an assembled wrapper
export const wrapper = createWrapper(makeStore, { debug: true });