import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';

// import {
//   getFirebase,
//   actionTypes as rrfActionTypes,
// } from 'react-redux-firebase';
// import { constants as rfConstants } from 'redux-firestore';

import {
  // persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import storage from "redux-persist/lib/storage";
import contactReducer from './contacts/reduser';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      // serializableCheck: false,
    },
  }),
  logger,
];

const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
  middleware,
  // devTools: process.env.NODE_ENV === "development",
});
//const persistor = persistStore(store);
export default store;
