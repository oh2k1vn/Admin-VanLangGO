import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface LoginPayload {
  email: string;
  password: string;
}

export interface AuthState {
  logging?: boolean;
  isLoggedIn: boolean;
  currentUser?: any;
}

const initialState: AuthState = {
  isLoggedIn: false,
  logging: false,
  currentUser: undefined,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state: any, action: PayloadAction<LoginPayload>) {
      state.logging = true;
    },
    loginSuccess(state: any, action: PayloadAction<string>) {
      state.isLoggedIn = true;
      state.logging = false;
      // state.currentUser = action.payload;
    },
    loginFailed(state: any, action: PayloadAction<string>) {
      state.logging = false;
    },
    logout(state: any) {
      state.isLoggedIn = false;
      state.currentUser = undefined;
    },
  },
});

// Action
export const authActions = authSlice.actions;

// Selectors
export const selectIsLoggedIn = (state: any) => state.auth.isLoggedIn;
export const selectIsLogging = (state: any) => state.auth.logging;

// Reducer
const authReducer = authSlice.reducer;
export default authReducer;
