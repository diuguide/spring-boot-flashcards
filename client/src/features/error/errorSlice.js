import { createSlice } from "@reduxjs/toolkit";

export const errorSlice = createSlice({
  name: "error",
  initialState: {
    msg: "",
    std_msg: "",
    show: false,
  },
  reducers: {
    loginFailed: (state) => {
      state.msg = "Login failed, please check credentials and try again.";
      state.show = true;
    },
    usernameTaken: (state) => {
      state.msg = "Username already exists, please choose another.";
      state.show = true;
    },
    clearErrors: (state) => {
      state.msg = "";
      state.show = false;
    },
    passwordFailed: (state) => {
      state.msg = "Passwords do not match";
      state.show = true;
    },
    setMessage: (state, action) => {
      state.std_msg = action.payload.msg;
      state.show = true;
    },
    clearMessage: (state) => {
      state.std_msg = "";
      state.show = false;
    }
  },
});

export const { loginFailed, usernameTaken, clearErrors, passwordFailed, setMessage, clearMessage } = errorSlice.actions;

export const errorState = (state) => state.error;

export default errorSlice.reducer;
