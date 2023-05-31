import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Bar = () => {
  return (
    <FontAwesomeIcon
      className="py-5 block md:hidden text-light text-3xl cursor-pointer"
      icon={faBars}
    />
  );
};

export default Bar;
