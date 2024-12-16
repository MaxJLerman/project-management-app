import { cn } from "@/lib/utils";
import { LockIcon } from "lucide-react";
import Image from "next/image";

export const Sidebar = () => {
  return (
    <div
      className={cn(
        "fixed z-40 flex h-full w-64 flex-col justify-between overflow-y-auto bg-white shadow-xl transition-all duration-300 dark:bg-black",
      )}
    >
      <div className={"flex h-full w-full flex-col justify-start"}>
        {/* TOP LOGO */}
        <div
          className={
            "z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-3 dark:bg-black"
          }
        >
          <div className={"text-xl font-bold text-gray-800 dark:text-white"}>
            PROJEKT
          </div>
        </div>

        {/* TEAM */}
        <div
          className={
            "flex items-center gap-5 border-y-[1.5px] border-gray-200 px-8 py-4 dark:border-gray-700"
          }
        >
          <Image src={"/logo.png"} alt={"logo"} width={40} height={40} />
          <div>
            <h3
              className={"text-base font-bold tracking-wide dark:text-gray-200"}
            >
              MntlRtdtn Team
            </h3>
            <div className={"mt-1 flex items-start gap-2"}>
              <LockIcon
                className={
                  "mt-[0.1rem] h-3 w-3 text-gray-500 dark:text-gray-400"
                }
              />
              <p className={"text-xs text-gray-500 dark:text-gray-400"}>
                Private
              </p>
            </div>
          </div>
        </div>

        {/* NAVBAR LINKS */}
      </div>
    </div>
  );
};
