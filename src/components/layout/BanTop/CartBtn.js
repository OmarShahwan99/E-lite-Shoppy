import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";

import "./animation.css";

import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";

import { TailSpin } from "react-loader-spinner";

const CartBtn = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const cart = useSelector((state) => state.cart);
  const { isLoading } = useSelector((state) => state.ui);
  const cartBtnRef = useRef();
  useEffect(() => {
    if (cart.items.length > 0) {
      cartBtnRef.current.classList.add("animation");
      setTimeout(() => {
        cartBtnRef.current.classList.remove("animation");
      }, 300);
    }
  }, [cart, isLoading]);

  return (
    <Link
      to="/cart"
      className="py-1 px-4 bg-primary text-center w-18 sm:w-48 flex items-center justify-center rounded-full"
      ref={cartBtnRef}
    >
      <FontAwesomeIcon icon={faCartShopping} className="text-dark text-xl" />
      {!isLoading && (
        <span className="ml-3 inline-block w-6 h-6 bg-secondary-100 rounded-full">
          {totalQuantity}
        </span>
      )}
      {isLoading && (
        <TailSpin
          height="20"
          width="20"
          color="#4fa94d"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperClass="ml-3"
          visible={true}
        />
      )}
    </Link>
  );
};

export default CartBtn;
