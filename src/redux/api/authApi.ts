import { baseApi } from "./baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    signUp: build.mutation({
      query: ({ ...data }) => ({
        url: "auth/signUp",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useSignUpMutation } = authApi;
