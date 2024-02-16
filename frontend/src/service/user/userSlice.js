import { createSlice } from '@reduxjs/toolkit';
import { authenticate, fetchUserProfile, updateUserProfile } from './userApi';

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

// The userSlice reducer manages the state of the user's profile and loading status.
const userSlice = createSlice({
  name: 'user',
  initialState: { user: null, loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(fetchUserProfile.rejected, (state) => {
        state.loading = false;
      })
      .addCase(updateUserProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      }).addCase(updateUserProfile.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const authReducer = authSlice.reducer;
export const userReducer = userSlice.reducer;
