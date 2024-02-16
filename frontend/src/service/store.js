import { configureStore } from '@reduxjs/toolkit';
import { authReducer, userReducer } from '../service/user/userSlice';

// The value of isAuthenticated is determined by
// whether there is a 'token' item in the local storage.
const preloadedState = {
  auth: {
    isAuthenticated: !!localStorage.getItem('token'),
  },
  user: {
    user: null,
    loading: false,
  },
};

// The store is created with the auth and user reducers.
export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
  preloadedState,
});
