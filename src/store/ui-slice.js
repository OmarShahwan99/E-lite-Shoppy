import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isLoading: false,
    error: null,
    notifications: {},
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
    setNotifictations(state, action) {
      state.notifications = {
        status: action.payload.status,
        title: action.payload.title,
        msg: action.payload.msg,
      };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
