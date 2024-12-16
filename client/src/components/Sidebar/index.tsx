import { cn } from "@/lib/utils";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { Home, Icon, LockIcon, LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
        <nav className={"z-10 w-full"}>
          <SidebarLink icon={Home} label={"Home"} href={"/"} />
        </nav>
      </div>
    </div>
  );
};

interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  // isCollapsed: boolean;
}

const SidebarLink = ({
  href,
  icon: Icon,
  label,
  // isCollapsed,
}: SidebarLinkProps) => {
  const pathname = usePathname();
  const isActive =
    pathname === href || (pathname === "/" && href === "/dashboard");
  const screenWidth = window.innerWidth;

  const dispatch = useAppDispatch();
  const { isSidebarCollapsed } = useAppSelector((state) => state.global);

  return (
    <Link href={href} className={"w-full"}>
      <div
        className={cn(
          "relative flex cursor-pointer items-center gap-3 transition-colors hover:bg-gray-100 dark:bg-black dark:hover:bg-gray-700",
          {
            ["bg-gray-100 text-white dark:bg-gray-600"]: isActive,
          },
        )}
      >
        {isActive && (
          <div className={"absolute left-0 top-0 h-full w-[5px] bg-blue-200"} />
        )}
        <Icon className={"h-6 w-6 text-gray-800 dark:text-gray-100"} />
        <span className={"font-medium text-gray-800 dark:text-gray-100"}>
          {label}
        </span>
      </div>
    </Link>
  );
};
