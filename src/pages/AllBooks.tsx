import BookCart from "../components/BookCart";
import SearchBar from "../components/SearchBar";

import { IBook } from "../types/IBook";

import FilterGenre from "../components/FilterGenre";
import FilterYear from "../components/FilterYear";

import { useFilteredBooksQuery } from "../hooks/useFilterBookQuery";
import { useAppSelector } from "../hooks/hook";
import { useNavigate } from "react-router-dom";

export default function AllBooks() {
  const bookData = useFilteredBooksQuery();
  const { email } = useAppSelector((state) => state?.auth?.user);
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-center mb-5">All Books</h1>

      <div className="lg:flex lg:flex-row lg:items-center lg:gap-5 extraSm:grid extraSm:grid-rows-3  extraSm:justify-center ">
        <div className="flex gap-2   ">
          <FilterGenre />
          <FilterYear />
        </div>
        <SearchBar />
        {email && (
          <button
            onClick={() => navigate("/addBook")}
            className="extraSm:w-1/2  extraSm:mt-5 lg:mt-0 extraSm:mx-auto lg:mx-0  text-white bg-indigo-800 ring-offset-2 ring-4   lg:w-28 "
          >
            Add New
          </button>
        )}
      </div>

      <div className="   grid   xl:grid-cols-3 gap-y-4 items-center lg:grid-cols-2 md:grid-cols-1 extraSm:grid-cols-1">
        {bookData.map((book: IBook) => (
          <BookCart
            key={Math.floor(new Date().valueOf() * Math.random())}
            book={book}
          />
        ))}
      </div>
    </div>
  );
}
