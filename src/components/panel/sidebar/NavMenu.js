import {
  faBasketShopping,
  faPerson,
  faUser,
  faProcedures,
} from "@fortawesome/free-solid-svg-icons";
import NavItem from "./NavItem";

const NAV_ITEMS = [
  { icon: faProcedures, title: "Products", path: "products" },
  { icon: faBasketShopping, title: "Orders", path: "orders" },
  { icon: faPerson, title: "Profile", path: "profile" },
  { icon: faUser, title: "Users", path: "users" },
];

const NavMenu = () => {
  return (
    <ul>
      {NAV_ITEMS.map((item) => (
        <NavItem
          key={item.title}
          icon={item.icon}
          title={item.title}
          path={item.path}
        />
      ))}
    </ul>
  );
};

export default NavMenu;
