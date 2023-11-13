import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getWatches } from "../../api/api";

export const getWatchesThunk = createAsyncThunk(
  "watches/getWatchesThunk",
  async () => {
    const { data } = await getWatches();
    return data;
  }
);

const initialState = {
  watchList: [],
  watchListLoading: true,
  watchListError: false,
  filterList: [],
};

const watchesSlice = createSlice({
  name: "watches",
  initialState,
  reducers: {
    filterWatches(state, { payload }) {
      console.log(payload);
      state.filterList = state.watchList.filter((item) => {
        if (
          (item.type === payload.type || payload.type === "all") &&
          (item.sex === payload.gender || payload.gender === "all") &&
          item.discounted_price >= payload.price.min &&
          item.discounted_price <= payload.price.max
        ) {
          return item;
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWatchesThunk.fulfilled, (state, { payload }) => {
        state.watchList = payload.data;
        state.filterList = payload.data;
        state.watchListLoading = false;
        state.watchListError = false;
      })
      .addCase(getWatchesThunk.pending, (state, { payload }) => {
        state.watchListLoading = true;
      })
      .addCase(getWatchesThunk.rejected, (state, { payload }) => {
        state.watchListError = true;
        state.watchListLoading = false;
      });
  },
});

export default watchesSlice.reducer;
export const { filterWatches } = watchesSlice.actions;
