import { useState } from "react";
import Bar from "./Bar";
import CartBtn from "./CartBtn";
import MenuList from "./MenuList";
import BarList from "./BarList";

const MENU_ITEMS = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Men's", path: "/mens" },
  { title: "Women's", path: "/womens" },
  { title: "Contact", path: "/contact" },
];

const BanTop = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [barListIsOpen, setBarListIsOpen] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 193) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  });

  const toggleBarListHandler = () => {
    setBarListIsOpen((prevState) => !prevState);
  };

  const fixedClasses = isFixed ? "fixed z-30 top-0 left-0 w-full" : "";
  return (
    <div className={`bg-dark ${fixedClasses}`}>
      <div className="container">
        <div className="flex justify-between items-center gap-5">
          <Bar onOpen={toggleBarListHandler} />
          <MenuList items={MENU_ITEMS} />
          <CartBtn />
        </div>
        {barListIsOpen && <BarList items={MENU_ITEMS} />}
      </div>
    </div>
  );
};

export default BanTop;
