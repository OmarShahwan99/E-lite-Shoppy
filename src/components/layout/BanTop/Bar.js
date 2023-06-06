import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Bar = (props) => {
  return (
    <FontAwesomeIcon
      className="py-5 block md:hidden text-light text-3xl cursor-pointer"
      icon={faBars}
      onClick={props.onOpen}
    />
  );
};

export default Bar;
