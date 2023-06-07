import { useState } from "react";
import Modal from "../../UI/Modal";
import Signup from "../../signup/Signup";
import signImg from "../../../assets/log_pic.jpg";
import Signin from "../../signin/Signin";

import { faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";

import { authActions } from "../../../store/auth-slice";
import User from "./User";

const NavigationItem = (props) => {
  const [isSignup, setIsSignup] = useState(false);
  const [isSignin, setIsSignin] = useState(false);

  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const dispatch = useDispatch();

  const openSigninModal = () => {
    setIsSignin(true);
  };

  const openSignupModal = () => {
    setIsSignup(true);
  };

  const closeModalHandler = () => {
    setIsSignin(false);
    setIsSignup(false);
  };

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <>
      {(isSignup || isSignin) && (
        <Modal onClose={closeModalHandler}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {isSignup && <Signup />}
            {isSignin && <Signin />}
            <div className="col-span-1">
              <img alt="" src={signImg} className="hidden sm:block sm:w-full" />
            </div>
          </div>
        </Modal>
      )}
      {!isAuth && (
        <li className="border-r-2 border-gray text-center py-1 ">
          <a
            onClick={openSigninModal}
            href="#s"
            className="flex items-center justify-center"
          >
            <FontAwesomeIcon
              icon={faLock}
              className="w-4 h-4 mr-4 text-primary"
            />
            <span className="text-light-100 text-sm">Sign In</span>
          </a>
        </li>
      )}
      {!isAuth && (
        <li className="border-r-2 sm:border-none border-gray text-center py-1">
          <a
            onClick={openSignupModal}
            href="#s"
            className="flex items-center justify-center"
          >
            <FontAwesomeIcon
              icon={faLockOpen}
              className="w-4 h-4 mr-4 text-primary"
            />
            <span className="text-light-100 text-sm">Sign Up</span>
          </a>
        </li>
      )}
      {isAuth && (
        <li className="border-r-2 border-gray text-center py-1">
          <button onClick={logoutHandler} href="#s" className="inline-block">
            <FontAwesomeIcon
              icon={faLock}
              className="w-4 h-4 mr-4 text-primary"
            />
            <span className="text-light-100 text-sm">Logout</span>
          </button>
        </li>
      )}
      {isAuth && (
        <li className="border-r-2 sm:border-none border-gray text-center py-1">
          <a href="#s" className="inline-block">
            <User />
          </a>
        </li>
      )}
    </>
  );
};

export default NavigationItem;
