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
    getAllUsers: build.query({
      query: () => `/auth/users`,
      providesTags: ["Profile"],
    }),
    getUserByEmail: build.query({
      query: (email: string) => `/auth/email/${email}`,
      providesTags: ["Profile"],
    }),
    updateUser: build.mutation({
      query: ({ userId, updateData }) => ({
        url: `/auth/${userId}`,
        method: "PATCH",
        body: updateData,
      }),
      invalidatesTags: ["Profile"],
    }),
    deleteuser: build.mutation({
      query: (id: string) => ({
        url: `/auth/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Profile"],
    }),
  }),
});

export const {
  useSignUpMutation,
  useSignInMutation,
  useGetUserByEmailQuery,
  useUpdateUserMutation,
  useGetAllUsersQuery,
  useDeleteuserMutation,
} = authApi;
