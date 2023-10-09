import { Link } from "react-router-dom";
import { BookCartProps } from "../types/IBook";

export default function BookCart({ book }: BookCartProps) {
  const { Title, Author, Genre, PublicationDate, Image, _id } = book;

  const formattedPublicationDate = new Date(
    PublicationDate
  ).toLocaleDateString();
  return (
    <Link to={`/bookDetails/${_id}`}>
      <div className=" my-5 book-cart grid grid-cols-2  text-center ml-4 mr-4 text-white">
        <div className="">
          <img className="object-cover  " src={Image} alt="" />
        </div>

        <div className=" my-auto extraSm:text-sm  ">
          <h1>Title:{Title}</h1>
          <h1>Author:{Author}</h1>
          <h1>Genre:{Genre}</h1>
          <h1>Publication Date:{formattedPublicationDate}</h1>
          {/* <button className=" text-xs w-1/3 bg-orange-800 leading-8 text-white   mx-auto mt-5 ring-offset-2 ring-2 rounded-md extraSm:w-10/12 extraSm:mb-3">
            Book Details
          </button> */}
        </div>
      </div>
    </Link>
  );
}
