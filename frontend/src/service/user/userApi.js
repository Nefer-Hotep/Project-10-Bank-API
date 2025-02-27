import { createAsyncThunk } from '@reduxjs/toolkit';

// This async thunk dispatches actions to authenticate a user.
export const authenticate = createAsyncThunk(
  'user/authenticate',
  async ({ email, password }) => {
    const response = await fetch('http://localhost:3001/api/v1/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem('token', data.body.token);
      console.log(data.message);
      return data;
    } else {
      window.alert(data.message);
      throw new Error(data.message);
    }
  }
);

// Async thunk to fetch user profile
export const fetchUserProfile = createAsyncThunk(
  'user/fetchProfile',
  async () => {
    const token = localStorage.getItem('token');
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    if (response.ok) {
      console.log(data.message);
      return data;
    } else {
      window.alert(data.message);
      throw new Error(data.message);
    }
  }
);

// Async thunk to update user profile
export const updateUserProfile = createAsyncThunk(
  'user/updateProfile',
  async ({ firstName, lastName }) => {
    const token = localStorage.getItem('token');
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ firstName, lastName }),
    });
    const data = await response.json();
    if (response.ok) {
      console.log(data.message);
      return data;
    } else {
      window.alert(data.message);
      throw new Error(data.message);
    }
  }
);
