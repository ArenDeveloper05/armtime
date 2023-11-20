import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBelts } from "../../api/api";

export const getBeltsThunk = createAsyncThunk(
  "belts/getBeltsThunk",
  async () => {
    const { data } = await getBelts();
    return data;
  }
);

const initialState = {
  beltList: [],
  beltListLoading: true,
  beltListError: false,
  filterList: [],
};

function sortBy(list, arrangement) {
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
  console.log(list);
  console.log(arrangement);
  return list;
}

const beltsSlice = createSlice({
  name: "belts",
  initialState,
  reducers: {
    // filterBelts(state, { payload }) {
    //   console.log(payload);
    //   state.filterList = state.filterList.filter((item) => item); //sharunakeli
    //   console.log(state.filterList);
    // },

    filterBelts(state, { payload }) {
      console.log(payload);
      state.filterList = sortBy(
        JSON.parse(JSON.stringify(state.beltList)),
        payload.arrangement
      ).filter((item) => {
        if (
          (item.type === payload.type || payload.type === "all") &&
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
      .addCase(getBeltsThunk.fulfilled, (state, { payload }) => {
        console.log(payload.data);
        state.beltList = payload.data;
        state.filterList = payload.data;
        state.beltListLoading = false;
        state.beltListError = false;
      })
      .addCase(getBeltsThunk.pending, (state, { payload }) => {
        state.beltListLoading = true;
      })
      .addCase(getBeltsThunk.rejected, (state, { payload }) => {
        state.beltListError = true;
        state.beltListLoading = false;
      });
  },
});

export default beltsSlice.reducer;
export const { filterBelts } = beltsSlice.actions;
