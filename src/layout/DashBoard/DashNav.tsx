import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/hook";
import { setDashboardToggle } from "../../redux/features/toggole/toggleSlice";
import { logOut } from "../../redux/features/auth/authSlice";

export default function DashNav() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logOut());

    navigate("/home");
  };

  return (
    <div className="  grid grid-cols-12    bg-gray-950 text-white    leading-[5.5]    sideBar extraSm:justify-between   customMid:justify-end">
      <div
        onClick={() => dispatch(setDashboardToggle())}
        className=" extraSm:block customMid:hidden ml-5 "
      >
        <FontAwesomeIcon icon={faBars} />
      </div>

      <div className=" extraSm:col-span-11 customMid:col-span-12 gap-5   flex justify-end mr-5 ">
        <Link to="/home">Home</Link>
        <button onClick={handleLogout}> Logout</button>
      </div>
    </div>
  );
}
