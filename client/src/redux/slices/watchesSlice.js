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

function sortBy(list, arrangement) {
  list = [...list];
  if (arrangement === "newest") {
    list.sort((a, b) => {
      const dateA = new Date(a.created_at);
      const dateB = new Date(b.created_at);
      return dateB - dateA;
    });
  } else if (arrangement === "descending") {
    list.sort((a, b) => b.discounted_price - a.discounted_price);
  } else if (arrangement === "ascending") {
    list.sort((a, b) => a.discounted_price - b.discounted_price);
  }

  return list;
}

const watchesSlice = createSlice({
  name: "watches",
  initialState,
  reducers: {
    filterWatches(state, { payload }) {
      state.filterList = sortBy(
        JSON.parse(JSON.stringify(state.watchList)),
        payload.arrangement
      ).filter((item) => {
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
