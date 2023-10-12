import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basketWatches: [],
};

const basketWatchesSlice = createSlice({
  name: "basketWatches",
  initialState,
  reducers: {
    onAddWatch(state, action) {
      let status = true;
      state.basketWatches.forEach((watch) => {
        if (watch.id === action.payload.id) status = false;
      });
      status && state.basketWatches.push(action.payload);
    },
    onRemoveWatch(state, action) {
      state.basketWatches = state.basketWatches.filter(
        (watch) => watch.id !== action.payload.id
      );
    },
  },
});

export const { onAddWatch, onRemoveWatch } = basketWatchesSlice.actions;

export default basketWatchesSlice.reducer;
