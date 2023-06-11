import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { uiActions } from "./ui-slice";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    changed: false,
  },
  reducers: {
    addProduct(state, action) {
      state.products.push(action.payload);
      state.changed = true;
    },
    deleteProduct(state, action) {
      const id = action.payload;
      state.products = state.products.filter((product) => product.id !== id);
      state.changed = true;
    },
    replaceProduct(state, action) {
      state.products = action.payload;
    },
  },
});

export const productsActions = productsSlice.actions;

export const fetchProducts = () => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await axios.get(
        "https://e-commerce-cb6b8-default-rtdb.firebaseio.com/.json",
        { headers: { "Content-Type": "application/json" } }
      );
      const responseData = await response.data;
      dispatch(productsActions.replaceProduct(responseData));
    };
    try {
      await sendRequest();
    } catch (error) {
      console.log(error);
    }
  };
};

export const sendProductsData = (products) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      await axios.put(
        "https://e-commerce-cb6b8-default-rtdb.firebaseio.com/.json",
        products,
        { headers: { "Content-Type": "appliaction/json" } }
      );
      dispatch(
        uiActions.setNotifictations({
          status: "success",
          title: "Done!",
          msg: "Data has been sent succesfully!",
        })
      );
    };
    try {
      dispatch(
        uiActions.setNotifictations({
          status: "pending",
          title: "Pending...",
          msg: "Connecting to server...",
        })
      );
      await sendRequest();
    } catch (error) {
      dispatch(
        uiActions.setNotifictations({
          status: "error",
          title: "Failed",
          msg: error.message,
        })
      );
      console.log(error);
    }
  };
};

export default productsSlice;
