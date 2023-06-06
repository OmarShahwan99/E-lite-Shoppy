import Button from "../UI/Button";

const CartSummary = (props) => {
  return (
    <div className="col-span-1 bg-gray py-10 px-3">
      <h2 className="pb-5 border-para border-b-2 text-xl sm:text-3xl font-semibold">
        Summary
      </h2>
      <div className="pb-10 border-para border-b-2">
        <p className="uppercase my-4 font-bold text-para">
          {props.totalQuantity} items
        </p>
        <div>
          <label className="block mb-2 text-para text-lg uppercase font-bold">
            Give Code
          </label>
          <select className="w-full px-3 py-2 border-none bg-light">
            <option>1</option>
            <option>2</option>
          </select>
        </div>
      </div>
      <div className="flex justify-between mt-3">
        <p className="uppercase text-para text-lg font-bold">Total Price</p>
        <p className="font-bold text-lg">$ {props.totalPrice.toFixed(2)}</p>
      </div>
      <div className="mt-5 ">
        <Button className="w-full">Checkout</Button>
      </div>
    </div>
  );
};

export default CartSummary;
