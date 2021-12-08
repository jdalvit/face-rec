import { appRequest } from "../../api/appRequest";
import { User } from "../../models/User";
import { AppDispatch } from "../store";
import { appDataSlice } from "./slice";

const actions = appDataSlice.actions;

export const onSignin =
  (email: string, password: string) => async (dispatch: AppDispatch) => {
    dispatch(actions.initLoadingUser());
    const user = await appRequest<User>(
      "https://stormy-reaches-17086.herokuapp.com/signin",
      {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );
    dispatch(actions.setUser(user));
    dispatch(actions.finishLoadingUser());
    dispatch(actions.goToHome());
    // TODO: manage errors
  };

export const onSignout = () => async (dispatch: AppDispatch) => {
  dispatch(actions.clean());
  // TODO: manage errors
};

export const onRegister =
  (name: string, email: string, password: string) =>
  async (dispatch: AppDispatch) => {
    dispatch(actions.initLoadingUser());
    const user = await appRequest<User>(
      "https://stormy-reaches-17086.herokuapp.com/register",
      {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          email,
          password,
          name,
        }),
      }
    );

    dispatch(actions.setUser(user));
    dispatch(actions.finishLoadingUser());
    dispatch(actions.goToHome());
    // TODO: manage errors
  };
