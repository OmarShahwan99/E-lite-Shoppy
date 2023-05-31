import { useSelector } from "react-redux";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const User = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="text-light cursor-pointer flex gap-2 items-center">
      <h1>{user}</h1>
      <FontAwesomeIcon icon={faChevronDown} />
    </div>
  );
};

export default User;
