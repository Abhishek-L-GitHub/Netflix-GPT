import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; // Import the default export correctly

const appStore = configureStore({
  reducer: {
    user: userReducer, // Use the imported userReducer
  }
});

export default appStore;
