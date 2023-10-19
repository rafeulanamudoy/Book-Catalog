import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hook";
import { logOut } from "../../redux/features/auth/authSlice";
import { useState } from "react";

export default function Header() {
  const { user } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div
      className={` customMid:font-bold  customMid:text-sm uppercase flex justify-between bg-gray-700 text-white  extraSm:text-sm extraSm:font-normal     `}
    >
      <div
        className={` ${
          isMobileMenuOpen ? "hidden customMid:grid " : "block "
        }  ml-10 grid content-center leading-[7] `}
      >
        <span className=" text-fuchsia-400  text">Painting</span>
      </div>
      <nav className="hidden customMid:grid grid-cols-3 content-center    gap-x-8">
        {[
          ["Home", "/home"],
          ["Our Services", "/services"],

          ["Events", "/events"],
        ].map(([title, url]) => (
          <Link
            key={Math.floor(new Date().valueOf() * Math.random())}
            to={url}
            className=" leading-[4rem]    text-center hover:ring-2 hover:bg-amber-800 hover:rounded-lg "
          >
            {title}
          </Link>
        ))}
      </nav>
      {user.email ? (
        <>
          <div className=" hidden customMid:grid grid-cols-2   items-center  ">
            <Link to="/dashboard" className="uppercase">
              {" "}
              Dashboard
            </Link>
            <button onClick={() => dispatch(logOut())} className="uppercase">
              {" "}
              Logout
            </button>
          </div>
        </>
      ) : (
        <>
          <nav className="hidden mr-10 customMid:grid grid-cols-2   gap-x-8  content-center   ">
            {[
              ["Sign UP", "/signUp"],
              ["Sign In", "/signIn"],
            ].map(([title, url]) => (
              <Link
                key={Math.floor(new Date().valueOf() * Math.random())}
                to={url}
                className="  leading-[4rem]  w-28  text-center hover:ring-2 hover:bg-amber-800 hover:rounded-lg "
              >
                {title}
              </Link>
            ))}
          </nav>
        </>
      )}
      <div className="customMid:hidden flex  mx-5 ">
        <button className="text-xl text-white" onClick={toggleMobileMenu}>
          &#9776;
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="  customMid:hidden block mr-10 my-5">
          <nav className="grid grid-rows-3">
            {[
              ["Home", "/home"],
              ["Our Services", "/services"],

              ["Events", "/events"],
            ].map(([title, url]) => (
              <Link
                key={url}
                to={url}
                className="hover:underline text-white  mb-3"
              >
                {title}
              </Link>
            ))}

            {user.email ? (
              <>
                <Link
                  className="flex hover:underline mb-3 text-white uppercase "
                  to="/dashboard"
                >
                  Dashboard
                </Link>

                <button
                  onClick={() => dispatch(logOut())}
                  className="flex hover:underline text-white uppercase mb-3 "
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                {[
                  ["Sign Up", "/signUp"],
                  ["Sign In", "/signIn"],
                ].map(([title, url]) => (
                  <Link
                    key={url}
                    to={url}
                    className="text-white hover:underline mb-3"
                  >
                    {title}
                  </Link>
                ))}
              </>
            )}
          </nav>
        </div>
      )}
    </div>
  );
}
