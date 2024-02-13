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
