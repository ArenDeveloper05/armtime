import { configureStore, combineReducers } from "@reduxjs/toolkit";
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
import storage from "redux-persist/lib/storage";
import watchesReducer from "../redux/slices/watchesSlice";
import basketWatchesReducer from "../redux/slices/basketWatchesSlice";
import beltsReducer from "../redux/slices/beltsSlice";
import deliveryReducer from "./slices/deliverySlice";

const rootReducer = combineReducers({
  watches: watchesReducer,
  basketWatches: basketWatchesReducer,
  belts: beltsReducer,
  delivery: deliveryReducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["watches", "belts", "delivery"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
