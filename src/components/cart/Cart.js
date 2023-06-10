import CartItems from "./CartItems";
import CartSummary from "./CartSummary";
import { useSelector } from "react-redux";
import Modal from "../UI/Modal";
import { useState } from "react";

import { TailSpin } from "react-loader-spinner";

const Cart = (props) => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const { isLoading } = useSelector((state) => state.ui);

  const [modalIsVisible, setModalIsVisible] = useState(!isAuth);

  const closeModalHandler = () => {
    setModalIsVisible(false);
  };
  let cartContent;
  if (props.cartItems.length > 0) {
    cartContent = (
      <CartItems
        cartItems={props.cartItems}
        totalQuantity={props.totalQuantity}
      />
    );
  }
  if (isLoading && props.cartItems.length === 0) {
    cartContent = (
      <TailSpin
        height="120"
        width="120"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{ justifyContent: "center", alignItems: "center" }}
        wrapperClass="col-span-2"
        visible={true}
      />
    );
  }
  if (!isLoading && props.cartItems.length === 0) {
    cartContent = <p className="col-span-2 p-10">Your cart is empty!</p>;
  }

  return (
    <>
      {modalIsVisible && (
        <Modal onClose={closeModalHandler}>
          Make sure you are logged in to save your data in server.
        </Modal>
      )}
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 shadow-lg rounded-2xl my-20 md:gap-10 overflow-hidden">
          {cartContent}
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
