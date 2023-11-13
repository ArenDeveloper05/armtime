import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBelts } from "../../api/api";

const data = [
  {
    id: 1,
    img: "https://7friendsandwatches.com/wp-content/uploads/2022/07/DSCF8444.jpg",
    title: "belt name",
    color: "color",
    price: 1000,
  },
  {
    id: 2,
    img: "https://shop.fratello.com/cdn/shop/collections/Seiko-Prospex-Alpinist-SPB201J1-PR.009.jpg?v=1663937716",
    title: "belt name",
    color: "color",
    price: 1000,
  },
  {
    id: 3,
    img: "https://stridewise.com/wp-content/uploads/2020/04/calfskin-leather-watch-straps.jpeg",
    title: "belt name",
    color: "color",
    price: 1000,
  },
  {
    id: 4,
    img: "https://speidel.com/cdn/shop/files/SPEIDEL-SEP129676_1440x.jpg?v=1663355763",
    title: "belt name",
    color: "color",
    price: 1000,
  },
];

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
