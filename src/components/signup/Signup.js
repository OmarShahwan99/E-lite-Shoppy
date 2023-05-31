import { useState } from "react";

import { signUp } from "../../store/auth-slice";
import { useDispatch, useSelector } from "react-redux";

import { TailSpin } from "react-loader-spinner";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(null);

  const { isLoading, error } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const changeNameHandler = (event) => {
    setName(event.target.handler);
  };
  const changeEmailHandler = (event) => {
    setEmail(event.target.value);
  };
  const changePasswordHandler = (event) => {
    setPassword(event.target.value);
  };

  const signupHandler = (e) => {
    e.preventDefault();
    const signupData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    dispatch(signUp(signupData));
  };

  return (
    <div className="col-span-2">
      <h3 className="uppercase text-xl font-light tracking-widest">
        <span className="font-bold">Sign </span>Up now
      </h3>
      <form onSubmit={signupHandler} className="mt-10">
        <div className="my-4">
          <label className="block font-light" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="border-gray border-b-2 focus:outline-none focus:border-dark w-full focus:bg-gray py-2 transition duration-300"
            onChange={changeNameHandler}
          />
        </div>
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
        <div>
          {error && (
            <p className="bg-error-200 text-error-100 mb-3 p-2">{error}</p>
          )}
          <button className="px-10 py-2 bg-dark text-light uppercase font-medium text-sm transition duration-300 hover:bg-primary">
            {!isLoading && "Sign up"}
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
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
