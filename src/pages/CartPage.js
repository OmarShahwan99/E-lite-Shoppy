import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/layout/Layout";
import { cartActions } from "../store/cart-slice";
import Cart from "../components/cart/Cart";

import cartImg from "../assets/cart.jpg";
import PageHero from "../components/UI/PageHero";

const CartPage = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const dispatch = useDispatch();

  const addItemHandler = (item) => {
    dispatch(cartActions.addItemToCart({ ...item, quantity: 1 }));
  };

  const removeItemHandler = (id) => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  return (
    <Layout>
      <PageHero img={cartImg} marked="Your" title="Cart" />
      <Cart
        onIncrease={addItemHandler}
        onDecrease={removeItemHandler}
        totalQuantity={totalQuantity}
        totalPrice={totalPrice}
        cartItems={cartItems}
      />
    </Layout>
  );
};

export default CartPage;
