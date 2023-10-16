import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../hooks/hook";
import { setDashboardToggle } from "../../redux/features/toggole/toggleSlice";

export default function DashNav() {
  const dispatch = useAppDispatch();

  return (
    <div className="  grid grid-cols-12    leading-10  bg-red-600   extraSm:justify-between   customMid:justify-end">
      <div
        onClick={() => dispatch(setDashboardToggle())}
        className=" extraSm:block customMid:hidden ml-5 "
      >
        <FontAwesomeIcon icon={faBars} />
      </div>

      <div className=" extraSm:col-span-11 customMid:col-span-12 gap-5   flex justify-end ">
        <Link to="/home">Home</Link>
        <button>Logout</button>
        <div>
          <img className="rounded-full  mr-5  inline" src="dsyt" />
        </div>
      </div>
    </div>
  );
}
