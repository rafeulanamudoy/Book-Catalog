import { ISignInData, ISignUpData } from "../../../types/IUser";
import { baseApi } from "../../api/baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    signUp: build.mutation({
      query: (data: ISignUpData) => ({
        url: "/auth/signUp",
        method: "POST",
        body: data,
      }),
    }),
    SignIn: build.mutation({
      query: (data: ISignInData) => ({
        url: "/auth/signin",
        method: "POST",
        body: data,
      }),
    }),
    getUserByEmail: build.query({
      query: (email: string) => `/auth/email/${email}`,
    }),
  }),
});

export const { useSignUpMutation, useSignInMutation, useGetUserByEmailQuery } =
  authApi;
