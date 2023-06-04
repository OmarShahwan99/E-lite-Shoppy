import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = (props) => {
  return (
    <li className="bg-dark flex flex-col gap-3 items-center py-10 px-4">
      <FontAwesomeIcon className="text-light text-3xl" icon={props.icon} />
      <h2 className="uppercase font-bold text-primary text-2xl">
        {props.title}
      </h2>
      <p className="text-para text-sm text-center">{props.description}</p>
    </li>
  );
};

export default Card;
