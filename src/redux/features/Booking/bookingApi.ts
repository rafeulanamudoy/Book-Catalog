import { IBookingService } from "../../../types/IBooking";

import { baseApi } from "../../api/baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createBooking: build.mutation({
      query: (data: IBookingService) => ({
        url: "/booking",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Booking"],
    }),
    getBookById: build.query({
      query: (id: string) => `/booking/book/${id}`,
      providesTags: ["Profile", "Booking"],
    }),
    deleteBookingById: build.mutation({
      query: (id: string) => ({
        url: `booking/book/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Booking"],
    }),
  }),
});

export const {
  useCreateBookingMutation,
  useGetBookByIdQuery,
  useDeleteBookingByIdMutation,
} = authApi;
