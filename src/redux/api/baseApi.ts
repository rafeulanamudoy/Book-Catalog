import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// initialize an empty api service that we'll inject endpoints into later as needed
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://book-catalog-redux-server.vercel.app/api/v1",
  }),
  tagTypes: ["Book", "updateReview"],
  endpoints: () => ({}),
});
