import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import userReducer from "./reducers/user.reducer";
import AsyncStorage from "@react-native-community/async-storage";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";

// Combine multiple reducers into a single root reducer
export const rootReducer = combineReducers({
    user: userReducer, // User-related state management
});

// Define the type for the Redux store's state
export type RootState = ReturnType<typeof rootReducer>;

// Configuration for persisting the Redux state
const persistConfig = {
    key: "root", // Key used in storage
    version: 1, // Versioning for future migrations
    storage: AsyncStorage, // Use AsyncStorage for persistence
};

// Wrap the root reducer with persistence capabilities
const persistedReducer = persistReducer<RootState>(
    persistConfig,
    rootReducer as any
);

// Configure the Redux store
const store = configureStore({
    reducer: persistedReducer, // Use the persisted reducer
    devTools: true, // Enable Redux DevTools for debugging
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // Ignore non-serializable Redux Persist actions to prevent warnings
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export type AppDispatch = typeof store.dispatch;
// Create a persistor instance to sync storage with Redux state
export const persistor = persistStore(store);
export default store;