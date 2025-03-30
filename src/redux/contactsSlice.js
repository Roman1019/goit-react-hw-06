import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
  },
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items.splice(action.payload, 1);
    },
  },
});

export default slice.reducer;

export const { addContact, deleteContact } = slice.actions;
