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
      className={`   w-full customMid:font-bold     bg-custom-black text-white extraSm:text-xs   customMid:text-sm uppercase grid lg:flex  lg:justify-between  items-center  lg:h-16  px-8`}
    >
      <div className="flex items-center justify-between extraSm:my-5 lg:my-0">
        <span className="text-custom-gold">wall-wizards</span>
        <div className="lg:hidden flex  mx-5 ">
          <button className="text-xl text-white" onClick={toggleMobileMenu}>
            &#9776;
          </button>
        </div>
      </div>
      <nav
        className={`${
          isMobileMenuOpen ? `lg:flex` : `hidden`
        } lg:flex  grid gap-y-2  extraSm:mb-2  lg:mb-0  lg:gap-8`}
      >
        {[
          ["Home", "/home"],
          ["Our Services", "/services"],
        ].map(([title, url]) => (
          <Link key={url} to={url} className="hover:text-custom-gold ">
            {title}
          </Link>
        ))}
      </nav>
      {user.email ? (
        <nav
          className={`${
            isMobileMenuOpen ? `lg:flex` : `hidden`
          } lg:flex  grid  gap-y-2  extraSm:mb-5  lg:mb-0 lg:gap-8`}
        >
          <Link to="/dashboard" className="uppercase hover:text-custom-red ">
            Dashboard
          </Link>
          <Link
            to=""
            onClick={() => dispatch(logOut())}
            className="uppercase hover:text-custom-gold "
          >
            Logout
          </Link>
        </nav>
      ) : (
        <nav
          className={`${
            isMobileMenuOpen ? `lg:flex` : `hidden`
          } lg:flex  grid  gap-y-2  extraSm:mb-5  lg:mb-0  lg:gap-8`}
        >
          {[
            ["Sign Up", "/signUp"],
            ["Sign In", "/signIn"],
          ].map(([title, url]) => (
            <Link key={url} to={url} className="  hover:text-custom-gold ">
              {title}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
}
