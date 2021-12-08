import React, { ChangeEventHandler, FC, useState } from "react";
import { onRegister } from "../../state/appDataSlice/events";
import { useAppDispatch } from "../../state/store";

const Register: FC = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [name, setName] = useState<string>();

  const onEmailChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPassword(event.target.value);
  };

  const onNameChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setName(event.target.value);
  };

  return (
    <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-30-l shadow-5 center">
      <main className="pa4 black-80">
        <div className="measure center">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f2 fw6 ph0 mh0">Register</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="name">
                Name
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="text"
                name="name"
                id="name"
                onChange={onNameChange}
              />
            </div>
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
              value="Register"
              disabled={!name || !email || !password}
              onClick={() =>
                name &&
                email &&
                password &&
                dispatch(onRegister(name, email, password))
              }
            />
          </div>
        </div>
      </main>
    </article>
  );
};

export default Register;
