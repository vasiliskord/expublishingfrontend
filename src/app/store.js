import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import catReducer from "../features/cats/catSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    cat: catReducer,
  },
});
