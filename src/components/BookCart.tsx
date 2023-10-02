import { BookCartProps } from "../types/IBook";

export default function BookCart({ book }: BookCartProps) {
  const { Title, Author, Genre, PublicationDate, Image } = book;
  const formattedPublicationDate = new Date(
    PublicationDate
  ).toLocaleDateString();
  return (
    <div className="book-cart grid grid-cols-2  text-center ml-4 mr-4 text-white">
      <div className="">
        <img className="object-cover  " src={Image} alt="" />
      </div>

      <div className=" my-auto">
        <h1>Title:{Title}</h1>
        <h1>Author:{Author}</h1>
        <h1>Genre:{Genre}</h1>
        <h1>Publication Date:{formattedPublicationDate}</h1>
      </div>
    </div>
  );
}
