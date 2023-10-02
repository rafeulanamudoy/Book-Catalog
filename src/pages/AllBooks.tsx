import { useState } from "react";
import BookCart from "../components/BookCart";
import SearchBar from "../components/SearchBar";

import {
  useGetBooksQuery,
  useFilterBooksQuery,
} from "../redux/features/book/bookApi";

import { IBook } from "../types/IBook";

function useBooks(searchBook: string) {
  return searchBook
    ? // eslint-disable-next-line react-hooks/rules-of-hooks
      useFilterBooksQuery(searchBook)
    : // eslint-disable-next-line react-hooks/rules-of-hooks
      useGetBooksQuery(undefined);
}

export default function AllBooks() {
  // const { searchBook } = useAppSelector((state) => state.book);

  // const { data, isLoading } = useGetBooksQuery(undefined);
  // const { data, isLoading } = useGetBooksQuery(undefined);

  const [searchBook, setSearchBook] = useState("");

  const handleSearchData = (data: string) => {
    setSearchBook(data);
  };
  const { data, isLoading } = useBooks(searchBook);

  console.log("allbooks", searchBook);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1 className="text-center">All Books</h1>
      <SearchBar handleSearchData={handleSearchData} />
      <div className="   grid   xl:grid-cols-3 gap-y-4 items-center lg:grid-cols-2 md:grid-cols-1 extraSm:grid-cols-1">
        {data?.data?.data.map((book: IBook) => (
          <BookCart
            key={Math.floor(new Date().valueOf() * Math.random())}
            book={book}
          />
        ))}
      </div>
    </div>
  );
}
