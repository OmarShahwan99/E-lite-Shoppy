import NavigationItem from "./NavigationItems";

const Navigations = (props) => {
  return (
    <ul className="grid max-[320px]:grid-cols-1 grid-cols-2 sm:grid-cols-4 justify-center">
      <NavigationItem />
    </ul>
  );
};

export default Navigations;
