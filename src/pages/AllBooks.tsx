import BookCart from "../components/BookCart";
import SearchBar from "../components/SearchBar";
import { useGetBooksQuery } from "../redux/features/book/bookApi";
import { IBook } from "../types/IBook";

export default function AllBooks() {
  const { data, isLoading } = useGetBooksQuery(undefined);

  console.log(data);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1 className="text-center">All Books</h1>
      <SearchBar />
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