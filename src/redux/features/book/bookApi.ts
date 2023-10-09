import { IBook, IBookParms } from "../../../types/IBook";
import { baseApi } from "../../api/baseApi";

export const bookApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getBooks: build.query({
      query: () => "/books",
      providesTags: ["Book"],
    }),
    filterBooks: build.query({
      query: (filter: string) => `/books/?query=${filter}`,
      providesTags: ["Book"],
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

    postBook: build.mutation({
      query: (data: IBook) => ({
        url: "/books",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Book"],
    }),
    getSingleBook: build.query({
      query: (id) => `books/${id}`,
    }),

    updateReview: build.mutation({
      query: ({ bookId, userReview }) => ({
        url: `/books/${bookId}`,
        method: "PATCH",
        body: userReview,
      }),
    }),
    updateSingleBook: build.mutation({
      query: ({ bookId, updateData }) => ({
        url: `/books/updateBook/${bookId}`,
        method: "PATCH",
        body: updateData,
      }),
      invalidatesTags: ["Book"],
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
  usePostBookMutation,
  useGetSingleBookQuery,
  useUpdateReviewMutation,
  useUpdateSingleBookMutation,
} = bookApi;
