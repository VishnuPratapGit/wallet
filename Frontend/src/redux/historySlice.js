import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  data: [],
};

export const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    setTransactionHistory: (state, action) => {
      state.status = true;
      state.data = [...state.data, ...action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTransactionHistory } = historySlice.actions;

export default historySlice.reducer;
