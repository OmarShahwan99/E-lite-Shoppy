import { useSelector } from "react-redux";
import Layout from "../components/layout/Layout";
import Cart from "../components/cart/Cart";

import cartImg from "../assets/cart.jpg";
import PageHero from "../components/UI/PageHero";

const CartPage = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <Layout>
      <PageHero img={cartImg} marked="Your" title="Cart" />
      <Cart
        totalQuantity={totalQuantity}
        totalPrice={totalPrice}
        cartItems={cartItems}
      />
    </Layout>
  );
};

export default CartPage;
