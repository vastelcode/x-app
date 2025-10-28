import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import rootReducer from "./root-reducer";


// конфигурация для redux-persist
const persistConfig = {
  key: 'root', // ключ для localStorage
  storage, // тип хранилища
  whitelist: ['theme'] // какие части сохранять
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Создание хранилища Redux
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST']
      }
    })
  }
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;