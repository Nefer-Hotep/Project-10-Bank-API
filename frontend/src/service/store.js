import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../service/user/userSlice';

// The value of isAuthenticated is determined by 
// whether there is a 'token' item in the local storage.
const preloadedState = {
  auth: {
    isAuthenticated: !!localStorage.getItem('token'),
  },
};

export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
  preloadedState,
});
