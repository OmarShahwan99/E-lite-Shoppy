import Button from "../UI/Button";

const ProductInfo = (props) => {
  return (
    <div className="container grid grid-cols-3 my-20 gap-5">
      <div className="col-span-3 md:col-span-1 border-gray border-2 p-5 flex justify-center">
        <img src={props.image} alt="product detail" className="w-40" />
      </div>
      <div className="col-span-3 md:col-span-2">
        <h2 className="text-primary text-2xl">{props.title}</h2>
        <p className="font-normal text-xl">${props.price}</p>
        <p className="my-4 text-para">{props.description}</p>
        <div className="mb-3">
          <label htmlFor="amount">Amount: </label>
          <input
            type="number"
            id="amount"
            min="0"
            max="5"
            className="border-gray border-2 w-10"
            onChange={props.onChange}
          />
        </div>
        <Button onClick={props.onClick}>Add to Cart</Button>
      </div>
    </div>
  );
};

export default ProductInfo;
