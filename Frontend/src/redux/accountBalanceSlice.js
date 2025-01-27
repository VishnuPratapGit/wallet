import { createSlice } from "@reduxjs/toolkit";

const accountBalanceSlice = createSlice({
  name: "balance",
  initialState: 0,
  reducers: {
    updateBalance: (state, action) => {
      return action.payload;
    },
  },
});

export const { updateBalance } = accountBalanceSlice.actions;

export default accountBalanceSlice.reducer;
