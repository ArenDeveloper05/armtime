import { configureStore } from "@reduxjs/toolkit";
import watchesReducer from "../redux/slices/watchesSlice";
import basketWatchesReducer from "../redux/slices/basketWatchesSlice";

const store = configureStore({
  reducer: {
    watches: watchesReducer,
    basketWatches: basketWatchesReducer,
  },
});

export default store;
