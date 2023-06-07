import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const NavItem = (props) => {
  return (
    <li>
      <Link
        to={props.path}
        className="flex items-center gap-4 px-4 py-3 transition duration-300 hover:text-primary hover:bg-gray"
      >
        <FontAwesomeIcon icon={props.icon} />
        <span>{props.title}</span>
      </Link>
    </li>
  );
};

export default NavItem;
