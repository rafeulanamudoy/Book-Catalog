import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import { useAppSelector } from "../../hooks/hook";

import DashNav from "./DashNav";

export default function DashBoard() {
  const { dashBoardToggle } = useAppSelector((state) => state.toggle);
  return (
    <div
      className={`grid xl:text-sm extraSm:text-xs  ${
        dashBoardToggle ? "grid-cols-26" : "grid-cols-8"
      }`}
    >
      <SideBar />
      <div
        className={` w-full   ${
          dashBoardToggle ? " col-span-25" : " col-span-7"
        }   bg-slate-400`}
      >
        <DashNav />
        <Outlet />
      </div>
    </div>
  );
}
