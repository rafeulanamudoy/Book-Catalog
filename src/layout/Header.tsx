import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks/hook";

export default function Header() {
  const { user } = useAppSelector((state) => state.auth);

  console.log(user);

  return (
    <div className="  font-bold uppercase flex justify-between bg-gray-700 text-white   leading-[7rem]    ">
      <div className="   ml-10   grid content-center ">
        <span>Book Catalog</span>
      </div>
      <nav className="  grid grid-cols-3  content-center    gap-x-8 ">
        {[
          ["Home", "/home"],
          ["All Books", "/books"],
          ["Add Book", "/addBook"],
        ].map(([title, url]) => (
          <Link
            key={Math.floor(new Date().valueOf() * Math.random())}
            to={url}
            className="   leading-[4rem]   w-28 text-center  hover:ring-2 hover:bg-amber-800  hover:rounded-lg"
          >
            {title}
          </Link>
        ))}
      </nav>
      {user.email ? (
        <>
          <div className="  grid grid-cols-2   ">
            <span>{user.email}</span>
            <button className="uppercase"> Logout</button>
          </div>
        </>
      ) : (
        <>
          <nav className=" mr-10 grid grid-cols-2   gap-x-8  content-center   ">
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
    </div>
  );
}
