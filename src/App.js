import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/CartPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchData, sendCartData } from "./store/cart-slice";
import MensWear from "./pages/MensWear";
import WomensWear from "./pages/WomensWear";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import AdminPanel from "./pages/AdminPanel";
import Products from "./components/panel/products/Products";

let isInit = true;

function App() {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    if (isInit) {
      isInit = false;
      return;
    }
    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:productId" element={<ProductDetails />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/mens" element={<MensWear />} />
      <Route path="/womens" element={<WomensWear />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/admin-panel/*" element={<AdminPanel />}>
        <Route path="products" element={<Products />} />
      </Route>
    </Routes>
  );
}

export default App;
