import ListCart from "../components/ListCart";
import { useAppSelector } from "../hooks/hook";
import { IBook } from "../types/IBook";

export default function ReadingList() {
  const readingList = useAppSelector((state) => state.choiceList.readingList);
  return (
    <div>
      <h1 className=" text-center text-2xl text-teal-900 ">Your ReadingList</h1>

      <div className=" flex flex-wrap ">
        {readingList.map((book: IBook) => (
          <ListCart
            key={Math.floor(new Date().valueOf() * Math.random())}
            book={book}
          />
        ))}
      </div>
    </div>
  );
}
