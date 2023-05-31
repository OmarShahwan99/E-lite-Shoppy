import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";

import "./animation.css";

import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";

const CartBtn = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const cart = useSelector((state) => state.cart);
  const cartBtnRef = useRef();
  useEffect(() => {
    if (cart.items.length === 0) {
      return;
    }
    cartBtnRef.current.classList.add("animation");
    setTimeout(() => {
      cartBtnRef.current.classList.remove("animation");
    }, 300);
  }, [cart]);

  return (
    <Link
      to="/cart"
      className="py-1 px-4 bg-primary text-center w-18 sm:w-48 flex items-center justify-center rounded-full"
      ref={cartBtnRef}
    >
      <FontAwesomeIcon icon={faCartShopping} className="text-dark text-xl" />
      <span className="ml-3 inline-block w-6 h-6 bg-secondary-100 rounded-full">
        {totalQuantity}
      </span>
    </Link>
  );
};

export default CartBtn;
