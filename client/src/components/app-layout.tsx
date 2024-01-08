import logo from "@/assets/logo.svg";
import { DarkModeIcon } from "./icons";
import avatar from "../assets/avatar.png";
import { Outlet } from "react-router-dom";

export function Navigation() {
  return (
    <nav className="z-10 h-[4.5rem] bg-neutral-4 sticky top-0 lg:h-screen lg:flex-col flex items-center gap-12 lg:gap-6 lg:rounded-r-[20px] overflow-hidden">
      <img
        src={logo}
        alt="logo"
        className="max-h-[4.5rem] absolute top-0 left-0"
      />
      <DarkModeIcon className="text-red-600 ml-auto lg:ml-0 lg:mt-auto cursor-pointer" />
      <div className="p-6 border-l-2 border-solid border-[#494E6E] lg:p-4 lg:border-l-0 lg:border-t-2">
        <img src={avatar} className="w-10 rounded-full" />
      </div>
    </nav>
  );
}

export function AppLayout() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-neutral-11">
      <Navigation />
      {/*Main Container*/}
      <div className="max-w-[48rem] p-6 lg:p-8 w-full md:mx-auto">
        <Outlet />
      </div>
    </div>
  );
}
