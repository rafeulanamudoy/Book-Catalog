import BookCart from "../components/BookCart";
import SearchBar from "../components/SearchBar";

import { IBook } from "../types/IBook";

import FilterGenre from "../components/FilterGenre";
import FilterYear from "../components/FilterYear";

import { useFilteredBooksQuery } from "../hooks/useFilterBookQuery";

export default function AllBooks() {
  const bookData = useFilteredBooksQuery();

  return (
    <div>
      <h1 className="text-center">All Books</h1>
      <SearchBar />

      <div className="flex gap-3 justify-end mr-4 ">
        <FilterGenre />
        <FilterYear />
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
