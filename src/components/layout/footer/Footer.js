import CopyRight from "./CopyRight";
import Description from "./Description";
import OurInformations from "./OurInformations";
import StoreInformations from "./StoreInformations";

const Footer = () => {
  return (
    <div className="py-10 bg-dark ">
      <div className="container">
        <div className="grid grod-cols-1 sm:grid-cols-3 gap-8 mb-5">
          <Description />
          <OurInformations />
          <StoreInformations />
        </div>
        <CopyRight />
      </div>
    </div>
  );
};

export default Footer;
