import MenuItem from "./MenuItem";

const MENU_ITEMS = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Men's", path: "/mens" },
  { title: "Women's", path: "/womens" },
  { title: "Contact", path: "/contact" },
];

const MenuList = () => {
  return (
    <ul className="hidden md:flex gap-8 items-center">
      {MENU_ITEMS.map((item) => (
        <MenuItem key={item.title} title={item.title} path={item.path} />
      ))}
    </ul>
  );
};

export default MenuList;
