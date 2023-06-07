import Button from "../UI/Button";

const Offer = () => {
  return (
    <div className="bg-offer bg-fixed h-96 flex justify-center items-center flex-col">
      <h2 className="text-xl sm:text-5xl text-light-100 font-semibold">
        We Offer flat <span className="text-dark">40%</span> Discount
      </h2>
      <a href="#arrivals">
        <Button className="mt-6">Shop Now</Button>
      </a>
    </div>
  );
};

export default Offer;
