import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <>
      <div className="flex flex-col gap-y-2 sm:mb-20">
        <Navbar />
      </div>
      <Outlet />
    </>
  );
};

export default MainLayout;
0;
