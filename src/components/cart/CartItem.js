import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { BsTrash } from "react-icons/bs";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const deleteItemHandler = () => {
    dispatch(cartActions.deleteItemFromCart(props.item.id));
  };

  return (
    <li className="py-4 flex flex-wrap gap-4 justify-center min-[354px]:justify-between items-center border-gray border-b-2 relative">
      <img alt="" src={props.item.image} className="w-32" />
      <h3 className="w-48 text-center text-secondary-200">{props.item.title}</h3>
      <div>
        <button
          className="w-8 h-8 border-secondary-100 border-2 rounded-full transition duration-300 hover:bg-secondary-100"
          onClick={() => props.onDecrease(props.item.id)}
        >
          -
        </button>
        <span className="mx-3">{props.item.quantity}</span>
        <button
          className="w-8 h-8 border-secondary-100 border-2 rounded-full transition duration-300 hover:bg-secondary-100"
          onClick={() => props.onIncrease(props.item)}
        >
          +
        </button>
      </div>
      <div className="font-semibold text-xl">
        <span className="text-para text-lg mr-2">×</span>${" "}
        <span>{props.item.price.toFixed(2)}</span>
        <p>
          <span className="font-light text-para text-lg">total:</span> ${" "}
          {(props.item.price * props.item.quantity).toFixed(1)}
        </p>
      </div>
      <button className="absolute top-5 right-0" onClick={deleteItemHandler}>
        <BsTrash className="text-lg text-secondary-100" />
      </button>
    </li>
  );
};

export default CartItem;
