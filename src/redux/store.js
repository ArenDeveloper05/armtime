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
import aboutUsReducer from "./slices/aboutUsSlice";

const rootReducer = combineReducers({
  watches: watchesReducer,
  basketWatches: basketWatchesReducer,
  belts: beltsReducer,
  aboutUs: aboutUsReducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["watches", "belts", "aboutUsDelivery"],
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
