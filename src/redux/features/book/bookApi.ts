import { baseApi } from "../../api/baseApi";

export const bookApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getBooks: build.query({
      query: () => "/books",
    }),
  }),
});

export const { useGetBooksQuery } = bookApi;
