import { useState } from "react";
import Bar from "./Bar";
import CartBtn from "./CartBtn";
import MenuList from "./MenuList";

const BanTop = () => {
  const [isFixed, setIsFixed] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 193) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  });
  const fixedClasses = isFixed ? "fixed z-30 top-0 left-0 w-full" : "";
  return (
    <div className={`bg-dark ${fixedClasses}`}>
      <div className="container flex justify-between items-center gap-5">
        <Bar />
        <MenuList />
        <CartBtn />
      </div>
    </div>
  );
};

export default BanTop;
