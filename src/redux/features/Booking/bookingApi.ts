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
    getAllBooking: build.query({
      query: () => "/booking",
      providesTags: ["Profile", "Booking"],
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
    updateBooking: build.mutation({
      query: ({ bookingId, updateData }) => ({
        url: `/booking/book/${bookingId}`,
        method: "PATCH",
        body: updateData,
      }),
      invalidatesTags: ["Booking"],
    }),
  }),
});

export const {
  useCreateBookingMutation,
  useGetBookByIdQuery,
  useDeleteBookingByIdMutation,
  useGetAllBookingQuery,
  useUpdateBookingMutation,
} = authApi;
