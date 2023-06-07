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
    <div className="flex max-w-7xl m-auto">
      <aside
        className={`fixed z-10 bg-light-100 md:relative bg-light shadow-2xl min-h-screen transition-all duration-300 ${openClasses}`}
      >
        <FontAwesomeIcon
          onClick={() => setSidebarIsOpen(false)}
          className="block md:hidden absolute top-4 right-5 cursor-pointer"
          icon={faClose}
        />
        <Sidebar />
      </aside>
      <main className="flex-1 bg-light-200 px-4 py-8 w-full relative">
        <div className="absolute top-5 left-5">
          <FontAwesomeIcon
            onClick={() => setSidebarIsOpen((prev) => !prev)}
            className="cursor-pointer"
            icon={!sidebarIsOpen ? faBars : faClose}
          />
        </div>
        <Outlet />
      </main>
    </div>
  );
};

export default Panel;
