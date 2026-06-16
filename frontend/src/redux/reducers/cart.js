import { createReducer } from "@reduxjs/toolkit";

const getStoredCart = () => {
  try {
    const stored = localStorage.getItem("cartItems");
    const parsed = stored ? JSON.parse(stored) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    localStorage.removeItem("cartItems");
    return [];
  }
};

const initialState = {
  cart: getStoredCart(),
};

export const cartReducer = createReducer(initialState, {
  addToCart: (state, action) => {
    const item = action.payload;
    const isItemExist = state.cart.find((i) => i._id === item._id);
    if (isItemExist) {
      return {
        ...state,
        cart: state.cart.map((i) => (i._id === isItemExist._id ? item : i)),
      };
    } else {
      return {
        ...state,
        cart: [...state.cart, item],
      };
    }
  },

  removeFromCart: (state, action) => {
    return {
      ...state,
      cart: state.cart.filter((i) => i._id !== action.payload),
    };
  },
});
