import React, { FC } from "react";
import { onSignout } from "../../state/appDataSlice/events";
import {
  appDataSlice,
  isSignedInSelector,
} from "../../state/appDataSlice/slice";
import { useAppDispatch, useAppSelector } from "../../state/store";

const Navigation: FC = () => {
  const dispatch = useAppDispatch();
  const isSignedIn = useAppSelector(isSignedInSelector);
  if (isSignedIn) {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          onClick={() => dispatch(onSignout())}
          className="f3 link black underline pa3 pointer dim"
        >
          Sign out
        </p>
      </nav>
    );
  } else {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          onClick={() => dispatch(appDataSlice.actions.goToSignin())}
          className="f3 link black underline pa3 pointer dim"
        >
          Sign in
        </p>
        <p
          onClick={() => dispatch(appDataSlice.actions.goToRegister())}
          className="f3 link black underline pa3 pointer dim"
        >
          Register
        </p>
      </nav>
    );
  }
};

export default Navigation;
