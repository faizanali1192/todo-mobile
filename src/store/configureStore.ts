import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import AuthReducer from './reducers/authReducer';

const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
};

const persistedAuthReducer = persistReducer(authPersistConfig, AuthReducer);

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
