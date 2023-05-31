import CartItem from "./CartItem";

const CartItems = (props) => {
  return (
    <div className="col-span-2 py-8 px-10">
      <div className="flex justify-between items-center pb-5 border-b-2 border-gray">
        <h3 className="text-xl sm:text-3xl font-semibold">Shopping Cart</h3>
        <span>{props.totalQuantity} Quantities</span>
      </div>
      <ul>
        {props.cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onIncrease={props.onIncrease}
            onDecrease={props.onDecrease}
          />
        ))}
      </ul>
    </div>
  );
};

export default CartItems;
