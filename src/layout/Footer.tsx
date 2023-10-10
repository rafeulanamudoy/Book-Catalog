import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-gray-800 text-gray-300 py-4  bottom-0 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p className="text-xl font-semibold">Refeul anam Udoy</p>
          <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
        </div>
        <div>
          <ul className="md:flex   extraSm:grid extraSm:grid-rows-5 md:space-x-4">
            <li>
              <Link to="/home" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link to="/allBooks" className="hover:text-white">
                All Books
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
