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
import watchesReducer from "./slices/watchesSlice";
import basketWatchesReducer from "./slices/basketWatchesSlice";
import beltsReducer from "./slices/beltsSlice";
import sliderReducer from "./slices/sliderSlice";
import paginationReducer from "./slices/paginationSlice";

const rootReducer = combineReducers({
  watches: watchesReducer,
  basketWatches: basketWatchesReducer,
  belts: beltsReducer,
  slider: sliderReducer,
  pagination: paginationReducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["watches", "belts", "slider"],
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
