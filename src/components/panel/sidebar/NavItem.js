import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const NavItem = (props) => {
  return (
    <li>
      <NavLink
        to={props.path}
        className="flex text-light-100 items-center gap-4 px-4 py-3 transition duration-300 hover:text-primary hover:bg-para"
      >
        <FontAwesomeIcon icon={props.icon} />
        <span>{props.title}</span>
      </NavLink>
    </li>
  );
};

export default NavItem;
