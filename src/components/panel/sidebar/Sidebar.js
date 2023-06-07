import NavMenu from "./NavMenu";

const Sidebar = () => {
  return (
    <div>
      <div className="py-2 border-b-2 border-gray px-4">
        <h2 className="text-primary font-bold text-2xl">Admin</h2>
      </div>
      <div className="mt-20">
        <NavMenu />
      </div>
    </div>
  );
};

export default Sidebar;
