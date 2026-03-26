import { createSlice } from '@reduxjs/toolkit';
import { JWTPayload } from 'jose';

interface AuthState {
  user: JWTPayload | null;
  token: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
  },
});

export const { setCredentials } = authSlice.actions;

export const authReducer = authSlice.reducer;
