import { baseApi } from "../../api/baseApi";

export const bookApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getBooks: build.query({
      query: () => "/books",
    }),
    filterBooks: build.query({
      query: (filter: string) => `/books/?query=${filter}`,
    }),
  }),
});

export const { useGetBooksQuery, useFilterBooksQuery } = bookApi;
