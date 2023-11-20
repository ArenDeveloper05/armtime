import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lastVisitedWatch: 1,
  lastVisitedBelt: 1,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    changeWatchVisit(state, { payload }) {
      state.lastVisitedWatch = payload;
    },
    changeBeltVisit(state, { payload }) {
      state.lastVisitedBelt = payload;
    },
  },
});

export const { changeWatchVisit, changeBeltVisit } = paginationSlice.actions;

export default paginationSlice.reducer;
