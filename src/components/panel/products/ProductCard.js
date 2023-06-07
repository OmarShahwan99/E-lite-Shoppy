import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductCard = (props) => {
  return (
    <div className="p-4 border-gray border-2 rounded flex flex-col gap-5 ">
      <div className="flex justify-center">
        <img className="w-40 h-40" alt="" src={props.image} />
      </div>
      <div>
        <h3 className="text-para mb-2">{props.title}</h3>
        <p className="font-medium">${props.price}</p>
      </div>
      <div className="text-right">
        <button className="border-gray border-2 rounded px-2 py-1">
          <FontAwesomeIcon className="text-para" icon={faPen} />
          <span className="ml-2">Edit</span>
        </button>
        <button
          onClick={() => props.onDelete(props.id)}
          className="border-gray border-2 rounded px-2 py-1 ml-3 text-error-100"
        >
          <FontAwesomeIcon icon={faTrash} />
          <span className="ml-2">Delete</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
