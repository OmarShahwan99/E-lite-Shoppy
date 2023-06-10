import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../store/auth-slice";

import { TailSpin } from "react-loader-spinner";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(null);

  const { isLoading, error } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const changeEmailHandler = (event) => {
    setEmail(event.target.value);
  };
  const changePasswordHandler = (event) => {
    setPassword(event.target.value);
  };
  const loginHandler = (event) => {
    event.preventDefault();
    const loginData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    dispatch(signIn(loginData));
  };
  return (
    <div className="col-span-2">
      <h3 className="uppercase text-xl font-light tracking-widest">
        <span className="font-bold">Sign </span>In now
      </h3>
      <form onSubmit={loginHandler} className="mt-10">
        <div className="my-4">
          <label className="block font-light" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="border-gray border-b-2 focus:outline-none focus:border-dark w-full focus:bg-gray py-2 transition duration-300"
            onChange={changeEmailHandler}
          />
        </div>
        <div className="my-4">
          <label className="block font-light" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="border-gray border-b-2 focus:outline-none focus:border-dark w-full focus:bg-gray py-2 transition duration-300"
            onChange={changePasswordHandler}
          />
        </div>
        {error && (
          <p className="bg-error-200 text-error-100 mb-3 p-2">{error}</p>
        )}
        <div>
          <button
            disabled={isLoading}
            className="px-10 py-2 bg-dark text-light-100 uppercase font-medium text-sm transition duration-300 hover:bg-primary disabled:bg-gray disabled:cursor-not-allowed"
          >
            {isLoading && (
              <TailSpin
                height="20"
                width="20"
                color="#4fa94d"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{ justifyContent: "center" }}
                wrapperClass=""
                visible={true}
              />
            )}
            {!isLoading && "Sign In"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
