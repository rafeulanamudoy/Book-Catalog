import {
  useFilterBooksQuery,
  useGetBooksQuery,
} from "../redux/features/book/bookApi";

function useBooks(searchBook: string) {
  return searchBook
    ? // eslint-disable-next-line react-hooks/rules-of-hooks
      useFilterBooksQuery(searchBook)
    : // eslint-disable-next-line react-hooks/rules-of-hooks
      useGetBooksQuery(undefined);
}

export default useBooks;
