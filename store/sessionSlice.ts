import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  name: string;
}

interface SessionState {
  user: User | null;
}

const initialState: SessionState = {
  user: null,
};

export const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = sessionSlice.actions;

export const selectUser = (state: { session: SessionState }) =>
  state.session.user;

export default sessionSlice.reducer;
