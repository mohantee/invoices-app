import logo from "@/assets/logo.svg";
import { DarkModeIcon } from "./icons";
import avatar from "../assets/avatar.png";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useInvoices } from "@/store/invoices";

function applyThemePreference(theme: string) {
  const root = window.document.documentElement;
  console.log(root);
  const isDark = theme === "dark";
  root.classList.remove(isDark ? "light" : "dark");
  root.classList.add(theme);
}

export function Navigation() {
  const toggleTheme = useInvoices((state) => state.toggleTheme);
  const theme = useInvoices((state) => state.theme);
  console.log(theme);

  useEffect(() => {
    applyThemePreference(theme);
  }, [theme]);

  return (
    <nav className="sticky top-0 z-20 flex h-[4.5rem] items-center gap-12 overflow-hidden bg-neutral-4 lg:h-screen lg:flex-col lg:gap-6 lg:rounded-r-[20px]">
      <img
        src={logo}
        alt="logo"
        className="absolute left-0 top-0 max-h-[4.5rem]"
      />
      <DarkModeIcon
        className="ml-auto cursor-pointer text-red-600 lg:ml-0 lg:mt-auto"
        onClick={() => toggleTheme()}
      />
      <div className="border-l-2 border-solid border-[#494E6E] p-6 lg:border-l-0 lg:border-t-2 lg:p-4">
        <img src={avatar} className="w-10 rounded-full" />
      </div>
    </nav>
  );
}

export function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-neutral-11 lg:flex-row dark:bg-neutral-12">
      <Navigation />
      <main className="w-full max-w-[48rem] p-6 md:mx-auto lg:p-8">
        <Outlet />
      </main>
    </div>
  );
}
