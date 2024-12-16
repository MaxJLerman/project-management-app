"use client";

import { useEffect } from "react";

import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import StoreProvider from "@/redux/provider";
import { useAppSelector } from "@/redux/store";
import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
}

//? higher order component (HOC)
const DashboardLayout = ({ children }: Props) => {
  const { isSidebarCollapsed, isDarkMode } = useAppSelector(
    (state) => state.global,
  );

  //? done in this manner because no other way to check the redux state then change the dark/light style without being inside a client component
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  return (
    <div className={"flex min-h-screen w-full bg-gray-50 text-gray-900"}>
      <Sidebar />
      <main
        className={cn("dark:bg-dark-bg flex w-full flex-col bg-gray-50", {
          ["md:pl-64"]: !isSidebarCollapsed,
        })}
      >
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export const DashboardWrapper = ({ children }: Props) => {
  return (
    <StoreProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </StoreProvider>
  );
};
