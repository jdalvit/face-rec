import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../models/User";
import { RootState } from "../store";

export enum Routes {
  Home = "home",
  Register = "register",
  Signin = "signin",
}

interface AppDataSlice {
  isLoadingUser: boolean;
  user?: User;
  route: Routes;
}

const initialState: AppDataSlice = {
  isLoadingUser: false,
  route: Routes.Signin,
};

export const appDataSlice = createSlice({
  name: "appData",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    setUserEntries: (state, action: PayloadAction<number>) => {
      const user = state.user;
      if (user) user.entries = action.payload;
    },
    initLoadingUser: (state) => {
      state.isLoadingUser = true;
    },
    finishLoadingUser: (state) => {
      state.isLoadingUser = false;
    },
    cleanUser: (state) => {
      state.user = undefined;
    },
    goToHome: (state) => {
      state.route = Routes.Home;
    },
    goToSignin: (state) => {
      state.route = Routes.Signin;
    },
    goToRegister: (state) => {
      state.route = Routes.Register;
    },
    clean: (state) => initialState,
  },
});

export const userSelector = (state: RootState) => state.appData.user;
export const isSignedInSelector = (state: RootState): boolean =>
  state.appData.user !== undefined;
export const isLoadingUserSelector = (state: RootState) =>
  state.appData.isLoadingUser;
export const routeSelector = (state: RootState) => state.appData.route;
