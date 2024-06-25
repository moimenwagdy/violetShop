import { createSlice } from "@reduxjs/toolkit";

export interface payloadType {
  name: string;
  email: string;
  token: string;
  id: string;
}

interface initalTypes {
  responseData: {
    email: string;
    id: string;
    name: string;
    token: string;
  };
  target: string;
  loggedIn: boolean;
  signedUp: boolean;
}

const initialState: initalTypes = {
  responseData: { email: "", id: "", name: "", token: "" },
  target: "login",
  loggedIn: false,
  signedUp: false,
};

const authorization = createSlice({
  name: "authorization",
  initialState: initialState,
  reducers: {
    setResponseData: (state, action: { payload: payloadType }) => {
      state.responseData = action.payload;
      localStorage.setItem("token", action.payload.token);
      console.log(state.responseData);
    },
    setToLogin: (state) => {
      state.target = "login";
      state.signedUp = false;
    },
    setToSignup: (state) => {
      state.target = "signup";
    },
    setLoggedIn: (state, action) => {
      state.loggedIn = action.payload;
    },
    setSignedUp: (state, action) => {
      state.signedUp = action.payload;
    },
  },
});

export default authorization;
export const authorizationAction = authorization.actions;
