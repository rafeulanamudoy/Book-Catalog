import { BookCartProps } from "../types/IBook";
import { useAppDispatch } from "../hooks/hook";
import {
  deleteReadingList,
  deleteWishList,
} from "../redux/features/choiceList/choiceSlice";
import { useLocation } from "react-router-dom";

export default function WishListCart({ book }: BookCartProps) {
  const { Genre, Title, PublicationDate, Author, Image } = book;
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  console.log(pathname);
  const formattedPublicationDate = new Date(
    PublicationDate
  ).toLocaleDateString();
  const handleWishlist = () => {
    dispatch(deleteWishList(book));
  };
  const handleReadingList = () => {
    dispatch(deleteReadingList(book));
  };
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 my-4">
      <div className="bg-white rounded-lg shadow-lg">
        <img
          src={Image}
          alt="Book"
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold">Title:{Title}</h2>
          <span className="text-gray-600">Author:{Author}</span>
          <p className="text-gray-600">Genre:{Genre}</p>
          <p className="text-gray-600">
            Publication Date:{formattedPublicationDate}
          </p>
          <div className="mt-4">
            {pathname === "/wishList" ? (
              <>
                <button
                  onClick={handleWishlist}
                  className=" block mx-auto b bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  Delete
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={handleReadingList}
                  className=" block mx-auto b bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  Finish Reading
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
