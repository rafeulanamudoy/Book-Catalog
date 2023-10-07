import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/hook";
import { logOut } from "../redux/features/auth/authSlice";
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
      className={` font-bold uppercase flex justify-between bg-gray-700 text-white      `}
    >
      <div
        className={` ${
          isMobileMenuOpen ? "hidden lg:grid " : "block "
        }  ml-10 grid content-center leading-[7] `}
      >
        <span>Book Catalog</span>
      </div>
      <nav
        className={`hidden lg:grid ${
          user.email ? `grid-cols-3` : "grid-cols-2"
        }  content-center    gap-x-8 `}
      >
        {[
          ["Home", "/home"],
          ["All Books", "/allBooks"],
        ].map(([title, url]) => (
          <Link
            key={Math.floor(new Date().valueOf() * Math.random())}
            to={url}
            className=" leading-[4rem]  w-28  text-center hover:ring-2 hover:bg-amber-800 hover:rounded-lg "
          >
            {title}
          </Link>
        ))}
        {user?.email && (
          <Link
            className="   leading-[4rem]    text-center hover:ring-2 hover:bg-amber-800 hover:rounded-lg  "
            to="/addBook"
          >
            Add New Book
          </Link>
        )}
      </nav>
      {user.email ? (
        <>
          <div className=" hidden lg:grid grid-cols-2   ">
            <button className="uppercase">{user.email}</button>
            <button onClick={() => dispatch(logOut())} className="uppercase">
              {" "}
              Logout
            </button>
          </div>
        </>
      ) : (
        <>
          <nav className="hidden mr-10 lg:grid grid-cols-2   gap-x-8  content-center   ">
            {[
              ["Sign UP", "/signUp"],
              ["Sign In", "/SignIn"],
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
      <div className="lg:hidden flex  mx-5 ">
        <button className="text-xl text-white" onClick={toggleMobileMenu}>
          &#9776;
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="  lg:hidden block mr-10 my-5">
          <nav className="grid grid-rows-2">
            {[
              ["Home", "/home"],
              ["All Books", "/allBooks"],
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
                <Link to="addBook  ">Add New Book</Link>

                <button
                  onClick={() => dispatch(logOut())}
                  className="flex my-3 hover:underline text-white uppercase "
                >
                  Logout
                </button>
                <button className="text-white uppercase  hover:underline">
                  {user.email}
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
