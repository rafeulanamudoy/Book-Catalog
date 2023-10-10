import ListCart from "../components/ListCart";
import { useAppSelector } from "../hooks/hook";
import { IBook } from "../types/IBook";

export default function Wishlisht() {
  const wishList = useAppSelector((state) => state.choiceList.wishList);
  console.log(wishList);
  return (
    <div>
      <h1 className=" text-center text-2xl text-teal-900 ">Your WishList</h1>

      <div className=" flex flex-wrap ">
        {wishList.map((book: IBook) => (
          <ListCart
            key={Math.floor(new Date().valueOf() * Math.random())}
            book={book}
          />
        ))}
      </div>
    </div>
  );
}
