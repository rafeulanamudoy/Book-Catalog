import {
  useFilterBooksQuery,
  useFilterGenreAndYearQuery,
  useFilterGenreQuery,
  useFilterSearchGenreQuery,
  useFilterSearchGenreYearQuery,
  useFilterSearchYearQuery,
  useFilterYearQuery,
  useGetBooksQuery,
} from "../redux/features/book/bookApi";
import { useAppSelector } from "./hook";

export const useFilteredBooksQuery = () => {
  const {
    publicationYear = "",
    genre = "",
    searchBook = "",
  } = useAppSelector((state) => state?.book);

  const getBooksQuery = useGetBooksQuery(undefined);
  const genreQuery = useFilterGenreQuery(genre);
  const yearQuery = useFilterYearQuery(publicationYear);
  const genreAndYearQuery = useFilterGenreAndYearQuery({
    Genre: genre,
    publicationYear: publicationYear,
  });
  const searchQuery = useFilterBooksQuery(searchBook);
  const searchGenreQuery = useFilterSearchGenreQuery({
    Genre: genre,
    query: searchBook,
  });

  const searchYearQury = useFilterSearchYearQuery({
    publicationYear: publicationYear,
    query: searchBook,
  });

  const searchGenreYearQuery = useFilterSearchGenreYearQuery({
    publicationYear: publicationYear,
    query: searchBook,
    Genre: genre,
  });

  const getQueryToUse = () => {
    if (searchBook && !genre && !publicationYear!) {
      return searchQuery;
    } else if (genre && !publicationYear && !searchBook) {
      return genreQuery;
    } else if (publicationYear && !genre && !searchBook) {
      return yearQuery;
    } else if (genre && publicationYear && !searchBook) {
      return genreAndYearQuery;
    } else if (genre && searchBook && !publicationYear) {
      return searchGenreQuery;
    } else if (publicationYear && searchBook && !genre) {
      return searchYearQury;
    } else if (searchBook && publicationYear && genre) {
      return searchGenreYearQuery;
    } else {
      return getBooksQuery;
    }
  };

  const { data } = getQueryToUse();

  return data?.data?.data || [];
};
