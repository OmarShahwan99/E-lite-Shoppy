import Home from "./pages/Home";
import { Routes, Route, Navigate } from "react-router-dom";
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
import { fetchProducts, sendProductsData } from "./store/products-slice";

let isInit = true;

function App() {
  const cart = useSelector((state) => state.cart);
  const products = useSelector((state) => state.products.products);
  const changed = useSelector((state) => state.products.changed);
  const isAdminAuth = useSelector((state) => state.auth.isAdminAuth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    if (isInit) {
      isInit = false;
      return;
    }
    if (changed) {
      dispatch(sendProductsData(products));
    }
  }, [products, dispatch, changed]);

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
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/" element={<Home />} />
      <Route path="/:productId" element={<ProductDetails />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/mens" element={<MensWear />} />
      <Route path="/womens" element={<WomensWear />} />
      <Route path="/contact" element={<ContactPage />} />
      {isAdminAuth && (
        <Route path="/admin-panel/*" element={<AdminPanel />}>
          <Route path="products" element={<Products />} />
        </Route>
      )}
      <Route
        path="/admin-panel"
        element={<Navigate to="/admin-panel/products" />}
      />
    </Routes>
  );
}

export default App;
