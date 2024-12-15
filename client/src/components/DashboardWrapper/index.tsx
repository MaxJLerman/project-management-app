import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";

interface Props {
  children: React.ReactNode;
}

//? higher order component (HOC)
export const DashboardWrapper = ({ children }: Props) => {
  return (
    <div className={"flex min-h-screen w-full bg-gray-50 text-gray-900"}>
      <Sidebar />
      <main
        className={"dark:bg-dark-bg flex w-full flex-col bg-gray-50 md:pl-64"}
      >
        <Navbar />
        {children}
      </main>
    </div>
  );
};