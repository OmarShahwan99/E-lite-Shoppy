import CartItems from "./CartItems";
import CartSummary from "./CartSummary";
import { useSelector } from "react-redux";
import Modal from "../UI/Modal";
import { useState } from "react";

const Cart = (props) => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const [modalIsVisible, setModalIsVisible] = useState(!isAuth);

  const closeModalHandler = () => {
    setModalIsVisible(false);
  };

  return (
    <>
      {modalIsVisible && (
        <Modal onClose={closeModalHandler}>
          Make sure you are logged in to save your data in server.
        </Modal>
      )}
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 shadow-lg rounded-2xl my-20 md:gap-10 overflow-hidden">
          <CartItems
            cartItems={props.cartItems}
            totalQuantity={props.totalQuantity}
            onIncrease={props.onIncrease}
            onDecrease={props.onDecrease}
          />
          <CartSummary
            totalPrice={props.totalPrice}
            totalQuantity={props.totalQuantity}
          />
        </div>
      </div>
    </>
  );
};

export default Cart;
