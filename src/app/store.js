import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import catReducer from "../features/cats/catSlice";
import likeReducer from "../features/like/likeSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    cat: catReducer,
    like: likeReducer
  },
});
