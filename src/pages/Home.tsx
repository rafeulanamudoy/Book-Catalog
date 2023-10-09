import BookCart from "../components/BookCart";
import { useGetBooksQuery } from "../redux/features/book/bookApi";

import { IBook } from "../types/IBook";

export default function Home() {
  const { data, isLoading } = useGetBooksQuery(undefined);

  console.log(data);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  //console.log(error, "api error");

  return (
    <div>
      <h1 className=" text-center ">Recently Added Book</h1>

      <div className="  grid    xl:grid-cols-3 gap-y-4 items-center lg:grid-cols-2 md:grid-cols-1 extraSm:grid-cols-1">
        {data?.data?.data
          ?.filter((_: IBook, index: number) => index < 10)
          .map((book: IBook) => (
            <BookCart
              key={Math.floor(new Date().valueOf() * Math.random())}
              book={book}
            />
          ))}
      </div>
    </div>
  );
}
