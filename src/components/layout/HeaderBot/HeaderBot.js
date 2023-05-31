import Logo from "./Logo";
import Search from "./Search";
import SocialItems from "./SocialItems";

const HeaderBot = () => {
  return (
    <div className="bg-white py-6">
      <div className="container grid lg:grid-cols-3 items-center">
        <Search />
        <div className="col-span-3 lg:col-span-2 flex justify-center sm:justify-between flex-wrap gap-5 md:gap-0 mt-5 lg:ml-12 lg:mt-0">
          <Logo />
          <SocialItems />
        </div>
      </div>
    </div>
  );
};

export default HeaderBot;
