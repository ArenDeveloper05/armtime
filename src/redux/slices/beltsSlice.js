import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  belts: [
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
  ],
};

const beltsSlice = createSlice({
  name: "belts",
  initialState,
  reducers: {},
});

export default beltsSlice.reducer;
// export const {} = beltsSlice.actions;
