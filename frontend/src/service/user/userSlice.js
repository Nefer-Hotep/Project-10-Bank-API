import { createSlice } from '@reduxjs/toolkit';
import { authenticate } from './userApi';

// The authSlice reducer manages the state of the user's authentication status.
const authSlice = createSlice({
  name: 'auth',
  initialState: { isAuthenticated: false },
  reducers: {},
  // The authenticate.fulfilled action changes the value of isAuthenticated to true.
  extraReducers: (builder) => {
    builder
      .addCase(authenticate.fulfilled, (state) => {
        state.isAuthenticated = true;
      })
      .addCase(authenticate.rejected, (state) => {
        state.isAuthenticated = false;
      });
  },
});

export default authSlice.reducer;
