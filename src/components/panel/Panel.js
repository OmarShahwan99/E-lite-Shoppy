import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

const Panel = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(true);

  const openClasses = sidebarIsOpen
    ? "translate-x-0 w-56"
    : "-translate-x-60 w-0";
  return (
    <div className="flex">
      <aside
        className={`fixed z-10 bg-dark md:relative bg-light shadow-2xl min-h-screen transition-all duration-300 ${openClasses}`}
      >
        <FontAwesomeIcon
          onClick={() => setSidebarIsOpen(false)}
          className="block md:hidden text-light-100 absolute top-4 right-5 cursor-pointer"
          icon={faClose}
        />
        <Sidebar />
      </aside>
      <main className="flex-1 bg-light-200 relative">
        <div className="container">
          <div className="absolute top-5 left-5">
            <FontAwesomeIcon
              onClick={() => setSidebarIsOpen((prev) => !prev)}
              className="cursor-pointer"
              icon={!sidebarIsOpen ? faBars : faClose}
            />
          </div>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Panel;
