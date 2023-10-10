import { Link } from "react-router-dom";
import { BookCartProps } from "../types/IBook";
import { useAppDispatch, useAppSelector } from "../hooks/hook";
import {
  setReadingList,
  setWishList,
} from "../redux/features/choiceList/choiceSlice";

export default function BookCart({ book }: BookCartProps) {
  const { Title, Author, Genre, PublicationDate, Image, _id } = book;
  const dispatch = useAppDispatch();

  const { email } = useAppSelector((state) => state.auth.user);

  const formattedPublicationDate = new Date(
    PublicationDate
  ).toLocaleDateString();

  const handleWishList = () => {
    dispatch(setWishList(book));

    // handle result here
  };
  const handleReadingList = () => {
    dispatch(setReadingList(book));
  };
  return (
    <div className=" my-5 book-cart grid grid-cols-2  text-center ml-4 mr-4 text-white">
      <Link to={`/bookDetails/${_id}`}>
        <div className="">
          <img className="object-cover  " src={Image} alt="" />
        </div>
      </Link>

      <div className=" my-auto extraSm:text-sm  ">
        <Link to={`/bookDetails/${_id}`}>
          {" "}
          <h1>Title:{Title}</h1>
          <h1>Author:{Author}</h1>
          <h1>Genre:{Genre}</h1>
          <h1>Publication Date:{formattedPublicationDate}</h1>
        </Link>
        {email && (
          <div className="grid w-1/2 mx-auto">
            <button
              onClick={handleWishList}
              className=" text-xs bg-orange-800 leading-8 text-white   mx-auto mt-5 ring-offset-2 ring-2 rounded-md extraSm:w-10/12 extraSm:mb-3"
            >
              WishList
            </button>
            <button
              onClick={handleReadingList}
              className=" text-xs  bg-orange-800 leading-8 text-white   mx-auto mt-5 ring-offset-2 ring-2 rounded-md extraSm:w-10/12 extraSm:mb-3"
            >
              ReadingList
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
