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

const beltsSlice = createSlice({
  name: "belts",
  initialState,
  reducers: {
    filterBelts(state, { payload }) {
      console.log(payload);
      state.filterList = state.filterList.filter((item) => item); //sharunakeli
      console.log(state.filterList);
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
