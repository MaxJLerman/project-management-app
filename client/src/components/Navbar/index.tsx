import { MenuIcon, Moon, Search, Settings, Sun } from "lucide-react";
import Link from "next/link";

import { Input } from "@/components/ui/input";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import {
  setIsDarkMode,
  setIsSidebarCollapsed,
} from "@/redux/reducers/global.reducer";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const dispatch = useAppDispatch();
  const { isSidebarCollapsed, isDarkMode } = useAppSelector(
    (state) => state.global,
  );

  const handleToggleSidebar = () =>
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));

  const handleToggleDarkMode = () => dispatch(setIsDarkMode(!isDarkMode));

  return (
    <div
      className={
        "flex items-center justify-between bg-white px-4 py-3 dark:bg-black"
      }
    >
      {
        //* Search
      }
      <div className={"flex items-center gap-8"}>
        {!isSidebarCollapsed ? null : (
          <button onClick={handleToggleSidebar}>
            <MenuIcon className={"h-8 w-8 dark:text-white"} />
          </button>
        )}
        <div className={"relative flex h-min w-[200px]"}>
          <Search
            className={
              "absolute left-[4px] top-1/2 mr-2 h-5 w-5 -translate-y-1/2 transform cursor-pointer dark:text-white"
            }
          />
          <Input
            className={
              "w-full border-none bg-gray-100 p-2 pl-8 placeholder-gray-500 focus:border-transparent focus:outline-none dark:bg-gray-700 dark:text-white dark:placeholder-white"
            }
            type={"search"}
            placeholder={"Search..."}
          />
        </div>
      </div>

      {
        //* Icons
      }
      <div className={"flex items-center"}>
        <button
          onClick={handleToggleDarkMode}
          className={cn("rounded p-2", {
            ["dark:hover:bg-gray-700"]: isDarkMode,
            ["hover:bg-gray-100"]: !isDarkMode,
          })}
        >
          {isDarkMode ? (
            <Sun className={"h-6 w-6 cursor-pointer dark:text-white"} />
          ) : (
            <Moon className={"h-6 w-6 cursor-pointer dark:text-white"} />
          )}
        </button>
        <Link
          href={"/settings"}
          className={cn("h-min w-min rounded p-2", {
            ["dark:hover:bg-gray-700"]: isDarkMode,
            ["hover:bg-gray-100"]: !isDarkMode,
          })}
        >
          <Settings className={"h-6 w-6 cursor-pointer dark:text-white"} />
        </Link>
        <div
          className={
            "ml-2 mr-5 hidden min-h-[2em] w-[0.1rem] bg-gray-200 md:inline-block"
          }
        />
      </div>
    </div>
  );
};
