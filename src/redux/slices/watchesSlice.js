import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  watches: [],
};

const watchesSlice = createSlice({
  name: "watches",
  initialState,
  reducers: {
    addToCard: () => {
      console.log("adding to card");
    },
  },
});

export default watchesSlice.reducer;
export const { addToCard } = watchesSlice.actions;
