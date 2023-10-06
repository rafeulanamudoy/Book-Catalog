import { IBookParms } from "../../../types/IBook";
import { baseApi } from "../../api/baseApi";

export const bookApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getBooks: build.query({
      query: () => "/books",
    }),
    filterBooks: build.query({
      query: (filter: string) => `/books/?query=${filter}`,
    }),

    filterYear: build.query({
      query: (year: string) => `/books/?publicationYear=${year}`,
    }),
    filterGenre: build.query({
      query: (genre: string) => `/books/?Genre=${genre}`,
    }),
    filterGenreAndYear: build.query({
      query: (params: IBookParms) => {
        const { Genre, publicationYear } = params;
        return `/books/?Genre=${Genre}&publicationYear=${publicationYear}`;
      },
    }),
    filterSearchGenre: build.query({
      query: (params: IBookParms) => {
        const { Genre, query } = params;
        return `/books/?query=${query}&Genre=${Genre}`;
      },
    }),
    filterSearchYear: build.query({
      query: (params: IBookParms) => {
        const { publicationYear, query } = params;
        return `/books/?query=${query}&publicationYear=${publicationYear}`;
      },
    }),
    filterSearchGenreYear: build.query({
      query: (params: IBookParms) => {
        const { publicationYear, query, Genre } = params;
        console.log(params);
        return `/books/?Genre=${Genre}&query=${query}&publicationYear=${publicationYear}`;
      },
    }),
  }),
});

export const {
  useGetBooksQuery,
  useFilterBooksQuery,

  useFilterGenreQuery,
  useFilterYearQuery,
  useFilterGenreAndYearQuery,
  useFilterSearchGenreQuery,
  useFilterSearchYearQuery,
  useFilterSearchGenreYearQuery,
} = bookApi;
