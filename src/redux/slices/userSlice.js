import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "slider",
  initialState: {
    user: {},
    token: "",
  },
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload.user;
    },
    removeUser: (state, action) => {
      state.user = {};
    },
    loadToken: (state, action) => {
      state.token = action.payload.token;
    },
  },
});

export default userSlice.reducer;
export const { addUser, loadToken, removeUser } = userSlice.actions;

export const selectToken = (state) => state.user.token;
export const selectUser = (state) => state.user.user;
