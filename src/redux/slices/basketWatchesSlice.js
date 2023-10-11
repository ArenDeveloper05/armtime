import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basketWatches: [],
};

const basketWatchesSlice = createSlice({
  name: "basketWatches",
  initialState,
  reducers: {
    onAddWatch(state, action) {
      state.basketWatches.push(action.payload);
    },
  },
});

export const { onAddWatch } = basketWatchesSlice.actions;

export default basketWatchesSlice.reducer;
