import { baseApi } from "../../api/baseApi";

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getCategories: build.query({
      query: () => "/category",
    }),
  }),
});

export const { useGetCategoriesQuery } = categoryApi;
