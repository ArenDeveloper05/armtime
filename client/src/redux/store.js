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
import deliveryReducer from "./slices/deliverySlice";
import sliderReducer from "./slices/sliderSlice";

const rootReducer = combineReducers({
  watches: watchesReducer,
  basketWatches: basketWatchesReducer,
  belts: beltsReducer,
  delivery: deliveryReducer,
  slider: sliderReducer,
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
