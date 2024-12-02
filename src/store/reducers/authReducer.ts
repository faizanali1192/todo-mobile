import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface AuthState {
  sessionId: string | null;
  expiresAt: Date | null;
  isAuthenticated: Boolean;
}

const initialState: AuthState = {
  sessionId: null,
  expiresAt: null,
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: 'AuthReducer',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<AuthState>) => {
      state.sessionId = action.payload.sessionId;
      state.expiresAt = action.payload.expiresAt;
      state.isAuthenticated = true;
    },

    resetAuthReducer: state => {
      state.sessionId = null;
      state.expiresAt = null;
      state.isAuthenticated = false;
    },
  },
});

export const {setAuthData, resetAuthReducer} = authSlice.actions;

export default authSlice.reducer;
