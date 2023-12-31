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
import idReducer from "./reducers/idReducer"
import searchReducer from "./reducers/searchReducer";
const rootReducer = combineReducers({
  id:idReducer,
  user: userReducer,
  search:searchReducer,
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
