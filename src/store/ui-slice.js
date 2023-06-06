import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isLoading: false,
    error: null,
  },
  reducers: {
    getRequest(state) {
      state.isLoading = true;
      state.error = null;
    },
    getSuccess(state) {
      state.isLoading = false;
      state.error = null;
    },
    getFailed(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
