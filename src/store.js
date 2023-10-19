import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { persistStore, persistReducer } from "redux-persist";

// Import your reducers here

import userReducer from "./reducers/userReducer";

const rootReducer = combineReducers({

  user: userReducer,
  // Add more reducers as needed
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
    thunk: true,
  }),
});

let persistor = persistStore(store);

export { store, persistor };
