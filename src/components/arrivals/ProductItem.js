import { Link } from "react-router-dom";
import Button from "../UI/Button";

import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const ProductItem = (props) => {
  const { id, title, price, description, image } = props;
  const dispatch = useDispatch();
  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        image,
        title,
        price,
        description,
        quantity: 1,
      })
    );
  };
  return (
    <div className="shadow-lg text-center flex flex-col justify-between">
      <div className="flex justify-center cursor-pointer relative group">
        <img alt="" src={props.image} className="w-32 h-48 object-contain" />
        <Link
          to={`/${id}`}
          className="absolute uppercase text-light-100 bg-dark w-full text-lg py-2 -bottom-1 opacity-0 -translate-y-40 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-primary transition duration-500 ease-linear"
        >
          Quick View
        </Link>
      </div>
      <div className="my-8 px-6">
        <h4 className="text-secondary-200 font-medium">{props.title}</h4>
        <p className="my-4 font-bold text-xl">${props.price}</p>
        <Button onClick={addItemHandler} className="w-full">
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductItem;
