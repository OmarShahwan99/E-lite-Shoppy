import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token"),
    user: localStorage.getItem("user"),
    isAuthenticated: !!localStorage.getItem("token"),
    isLoading: false,
    error: null,
  },
  reducers: {
    addUserInfo(state, action) {
      state.token = action.payload.idToken;
      localStorage.setItem("localId", action.payload.localId);
      localStorage.setItem("token", action.payload.idToken);
      localStorage.setItem("user", action.payload.email);
      state.user = action.payload.email;
      state.isAuthenticated = true;
    },
    logout(state) {
      localStorage.clear();
      state.isAuthenticated = false;
      window.location.reload();
    },
    loadingHandler(state, action) {
      state.isLoading = action.payload;
    },
    errorHandler(state, action) {
      state.error = action.payload;
    },
  },
});

export const authActions = authSlice.actions;

export const signUp = (signupData) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD9JLylGoz8s_wA7MJZI-NDGscL1Ywas6s",
        signupData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(response);
      const responseData = await response.data;
      dispatch(authActions.loadingHandler(false));
      return responseData;
    };
    try {
      dispatch(authActions.loadingHandler(true));
      dispatch(authActions.errorHandler(null));
      const userData = await sendRequest();
      dispatch(authActions.addUserInfo(userData));
      window.location.reload();
    } catch (error) {
      const errorResponse = await error.response;
      const errorData = await errorResponse.data;
      const errorMessage = await errorData.error;
      dispatch(authActions.loadingHandler(false));
      dispatch(authActions.errorHandler(errorMessage.message));
    }
  };
};

export const signIn = (signinData) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD9JLylGoz8s_wA7MJZI-NDGscL1Ywas6s",
        signinData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      const responseData = await response.data;
      dispatch(authActions.loadingHandler(false));
      return responseData;
    };
    try {
      dispatch(authActions.loadingHandler(true));
      dispatch(authActions.errorHandler(null));
      const userData = await sendRequest();
      dispatch(authActions.addUserInfo(userData));
      window.location.reload();
    } catch (error) {
      const errorResponse = await error.response;
      const errorData = await errorResponse.data;
      const errorMessage = await errorData.error;
      dispatch(authActions.loadingHandler(false));
      dispatch(authActions.errorHandler(errorMessage.message));
    }
  };
};

export default authSlice;