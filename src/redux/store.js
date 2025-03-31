import { configureStore } from "@reduxjs/toolkit";
import contactSliceReducer from "./contactsSlice.js";
import filtersSliceReducer from "./filtersSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const contacrsPersistConfig = {
  key: "contacts",
  storage,
  whitelist: ["items"],
};

const persistContactsReducer = persistReducer(
  contacrsPersistConfig,
  contactSliceReducer
);

export const store = configureStore({
  reducer: {
    contacts: persistContactsReducer,
    filters: filtersSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
