import { configureStore } from "@reduxjs/toolkit";
import contactSliceReducer from "./contactsSlice";

export const store = configureStore({
  reducer: {
    contacts: contactSliceReducer,
  },
});
