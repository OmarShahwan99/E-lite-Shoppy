import { createSlice } from "@reduxjs/toolkit";

import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import firebase from "../firebase";

const db = getFirestore(firebase);

const UID = localStorage.getItem("localId") || "";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          ...newItem,
        });
        state.totalQuantity = state.totalQuantity + newItem.quantity;
        state.totalPrice = state.totalPrice + newItem.price * newItem.quantity;
      } else {
        const itemIdx = state.items.findIndex(
          (item) => item.id === existingItem.id
        );
        state.items[itemIdx].quantity =
          state.items[itemIdx].quantity + newItem.quantity;
        state.totalQuantity = state.totalQuantity + newItem.quantity;
        state.totalPrice = state.totalPrice + newItem.price * newItem.quantity;
      }
    },
    replactCart(state, action) {
      state.items = action.payload.items || [];
      state.totalPrice = action.payload.totalPrice;
      state.totalQuantity = action.payload.totalQuantity;
    },
    removeItemFromCart(state, action) {
      const itemId = action.payload;
      const existingItem = state.items.find((item) => item.id === itemId);
      state.totalQuantity--;
      state.totalPrice = state.totalPrice - existingItem.price;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item !== existingItem);
      } else {
        const itemIdx = state.items.findIndex((item) => item.id === itemId);
        state.items[itemIdx].quantity--;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export const fetchData = () => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const docRef = doc(db, "carts", UID);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const responseData = docSnap.data();
        return responseData;
      } else {
        throw new Error("No items in your cart!");
      }
    };
    try {
      const cartData = await sendRequest();
      dispatch(cartActions.replactCart(cartData));
    } catch (error) {
      console.log(error);
    }
  };
};

export const sendCartData = (cartData) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      await setDoc(doc(db, "carts", UID), cartData);
    };
    try {
      await sendRequest();
    } catch (error) {
      console.log(error);
    }
  };
};

export default cartSlice;
