import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSlider } from "../../api/api";

export const getSliderThunk = createAsyncThunk(
  "slider/getSliderData",
  async () => {
    const { data } = await getSlider();
    return data;
  }
);

const initialState = {
  sliderList: [],
  sliderListLoading: true,
  sliderListError: false,
};

const sliderSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSliderThunk.fulfilled, (state, { payload }) => {
        console.log(payload.data);
        state.sliderList = payload.data;
        state.sliderListLoading = false;
        state.sliderListError = false;
      })
      .addCase(getSliderThunk.pending, (state, { payload }) => {
        state.sliderListLoading = true;
      })
      .addCase(getSliderThunk.rejected, (state, { payload }) => {
        state.sliderListError = true;
        state.sliderListLoading = false;
      });
  },
});

export default sliderSlice.reducer;
export const {} = sliderSlice.actions;
