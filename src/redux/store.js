import { configureStore } from "@reduxjs/toolkit";
import watchesReducer from "../redux/slices/watchesSlice";

const store = configureStore({
  reducer: {
    watches: watchesReducer,
  },
});

export default store;
