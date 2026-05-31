import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type UserRole = "client" | "vet" | null;

interface RegisteredUser {
  firstName: string;
  lastName: string;
  middleName: string;
  email: string;
  password: string;
  role: "client" | "vet";
}

interface AuthState {
  isAuthenticated: boolean;
  role: UserRole;
  email: string | null;
  registeredUser: RegisteredUser | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  role: null,
  email: null,
  registeredUser: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerUser: (state, action: PayloadAction<RegisteredUser>) => {
      state.registeredUser = action.payload;
    },
    login: (state, action: PayloadAction<{ email: string; role: UserRole }>) => {
      state.isAuthenticated = true;
      state.email = action.payload.email;
      state.role = action.payload.role;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.email = null;
      state.role = null;
    },
  },
});

export const { registerUser, login, logout } = authSlice.actions;
export default authSlice.reducer;