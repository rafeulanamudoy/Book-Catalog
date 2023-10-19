import { ICategory } from "../../../types/ICategory";
import { baseApi } from "../../api/baseApi";

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getCategories: build.query({
      query: () => "/category",
    }),
    createCategory: build.mutation({
      query: (data: ICategory) => ({
        url: `/category`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Profile"],
    }),
  }),
});

export const { useGetCategoriesQuery, useCreateCategoryMutation } = categoryApi;
