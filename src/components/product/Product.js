import img from "../../assets/slide-3.jpg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import PageHero from "../UI/PageHero";
import ProductInfo from "./ProductInfo";
import { TailSpin } from "react-loader-spinner";

const Product = (props) => {
  const [enteredQuantity, setEnteredQuantity] = useState(null);
  const dispatch = useDispatch();

  const { id, description, title, image, price } = props;

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        description,
        title,
        price,
        image,
        quantity: +enteredQuantity,
      })
    );
  };

  const changeQuantityHandler = (event) => {
    setEnteredQuantity(event.target.value);
  };

  return (
    <>
      <PageHero img={img} title="Details" marked="Product" />
      {!props.isLoading && (
        <ProductInfo
          onChange={changeQuantityHandler}
          onClick={addItemHandler}
          title={title}
          description={description}
          image={image}
          price={price}
        />
      )}
      {props.isLoading && (
        <TailSpin
          height="120"
          width="120"
          color="#4fa94d"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{
            justifyContent: "center",
            alignItems: "center",
            margin: "40px 0",
          }}
          wrapperClass=""
          visible={true}
        />
      )}
    </>
  );
};

export default Product;
