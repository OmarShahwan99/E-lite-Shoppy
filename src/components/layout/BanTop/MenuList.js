import MenuItem from "./MenuItem";



const MenuList = (props) => {
  return (
    <ul className="hidden md:flex gap-8 items-center">
      {props.items.map((item) => (
        <MenuItem key={item.title} title={item.title} path={item.path} />
      ))}
    </ul>
  );
};

export default MenuList;
