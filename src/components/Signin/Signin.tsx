import React, { ChangeEventHandler, FC, useState } from "react";
import { onSignin } from "../../state/appDataSlice/events";
import { appDataSlice } from "../../state/appDataSlice/slice";
import { useAppDispatch } from "../../state/store";

export const Signin: FC = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const onEmailChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPassword(event.target.value);
  };

  return (
    <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-30-l shadow-5 center">
      <main className="pa4 black-80">
        <div className="measure center">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f2 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Email
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="email-address"
                id="email-address"
                onChange={onEmailChange}
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">
                Password
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
                onChange={onPasswordChange}
              />
            </div>
          </fieldset>
          <div className="">
            <input
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Sign in"
              disabled={!email || !password}
              onClick={() =>
                email && password && dispatch(onSignin(email, password))
              }
            />
          </div>
          <div className="lh-copy mt3">
            <p
              className="f6 link dim black pointer db"
              onClick={() => dispatch(appDataSlice.actions.goToRegister())}
            >
              Register
            </p>
          </div>
        </div>
      </main>
    </article>
  );
};

export default Signin;
