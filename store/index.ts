import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import { mmkvStorage } from "@/storage/mmkv";
import gameReducer from "./gameSlice";

const rootReducer = combineReducers({
  game: gameReducer,
});

const persistConfig = {
  key: "root",
  storage: mmkvStorage,
  whitelist: ["game"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (gdm) =>
    gdm({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
