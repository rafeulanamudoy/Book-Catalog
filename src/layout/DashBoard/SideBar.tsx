import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faCircleChevronLeft,
  faCompass,
  faCircleRadiation,
} from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch, useAppSelector } from "../../hooks/hook";
import { setDashboardToggle } from "../../redux/features/toggole/toggleSlice";

export default function SideBar() {
  const { dashBoardToggle } = useAppSelector((state) => state.toggle);
  const dispatch = useAppDispatch();
  const toggleSidebar = () => {
    dispatch(setDashboardToggle());
  };

  return (
    <div className={`h-screen bg-green-950 text-white col-span-1    `}>
      <div className="flex flex-col  h-full  ">
        <div
          className={
            dashBoardToggle
              ? ``
              : `grid justify-center items-center text-orange-900 bg-white h-10 `
          }
        >
          <span>{dashBoardToggle ? "" : "Painting Service"} </span>
        </div>
        <div
          className={`flex  mx-auto mt-5   items-center  ${
            dashBoardToggle
              ? " w-full justify-center"
              : "w-10/12     justify-between "
          } `}
        >
          <div
            className={dashBoardToggle ? "hidden" : "  flex items-center gap-3"}
          >
            <FontAwesomeIcon icon={faCircleRadiation} />
            <span>DashBoard</span>
          </div>

          <FontAwesomeIcon
            className=" justify-self-end "
            onClick={toggleSidebar}
            icon={faCircleChevronLeft}
          />
        </div>

        <div className=" flex flex-col     gap-y-3  mt-3">
          {[
            { title: "Profile", url: "/profile", icon: faAddressCard },
            { title: "Booking", url: "/Booking", icon: faCompass },
          ].map(({ title, url, icon }) => (
            <Link
              key={title}
              className={`flex mx-auto mt-5   items-center   ${
                dashBoardToggle ? " w-full justify-center " : "w-10/12 gap-x-3 "
              } `}
              to={url}
            >
              <FontAwesomeIcon icon={icon} />
              <span>{dashBoardToggle ? "" : title}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
