import Button from "../UI/Button";

const Offer = () => {
  return (
    <div className="bg-offer bg-fixed h-96 flex justify-center items-center flex-col">
      <h2 className="text-xl sm:text-5xl text-light font-semibold">
        We Offer flat <span className="text-dark">40%</span> Discount
      </h2>
      <Button className="mt-14">Shop Now</Button>
    </div>
  );
};

export default Offer;
