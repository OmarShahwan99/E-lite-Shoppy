import BanTop from "./BanTop/BanTop";
import Header from "./Header/Header";
import HeaderBot from "./HeaderBot/HeaderBot";
import Footer from "./footer/Footer";

const Layout = (props) => {
  return (
    <>
      <Header />
      <HeaderBot />
      <BanTop />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
