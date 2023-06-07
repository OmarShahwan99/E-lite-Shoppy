import { NavLink } from "react-router-dom";

const MenuItem = (props) => {
  return (
    <li>
      <NavLink
        to={props.path}
        href="#ws"
        className="relative block py-6 px-3 text-light-100 font-normal tracking-widest after:bottom-0 after:bg-primary after:w-0 after:h-1 after:absolute after:left-0 after:transition-width after:duration-200 after:ease-linear hover:after:w-full"
      >
        {props.title}
      </NavLink>
    </li>
  );
};
export default MenuItem;
