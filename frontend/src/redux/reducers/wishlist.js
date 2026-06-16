import { createReducer } from "@reduxjs/toolkit";

const getStoredWishlist = () => {
  try {
    const stored = localStorage.getItem("wishlistItems");
    const parsed = stored ? JSON.parse(stored) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    localStorage.removeItem("wishlistItems");
    return [];
  }
};

const initialState = {
  wishlist: getStoredWishlist(),
};

export const wishlistReducer = createReducer(initialState, {
  addToWishlist: (state, action) => {
    const item = action.payload;
    const isItemExist = state.wishlist.find((i) => i._id === item._id);
    if (isItemExist) {
      return {
        ...state,
        wishlist: state.wishlist.map((i) =>
          i._id === isItemExist._id ? item : i
        ),
      };
    } else {
      return {
        ...state,
        wishlist: [...state.wishlist, item],
      };
    }
  },

  removeFromWishlist: (state, action) => {
    return {
      ...state,
      wishlist: state.wishlist.filter((i) => i._id !== action.payload),
    };
  },
});
