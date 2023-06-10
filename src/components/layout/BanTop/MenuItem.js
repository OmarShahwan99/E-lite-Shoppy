import { NavLink } from "react-router-dom";

const MenuItem = (props) => {
  return (
    <li>
      <NavLink
        to={props.path}
        href="#ws"
        className="relative block py-6 px-3 text-light-100 font-normal tracking-widest hover:bg-para hover:text-primary transition-all duration-300"
      >
        {props.title}
      </NavLink>
    </li>
  );
};
export default MenuItem;
