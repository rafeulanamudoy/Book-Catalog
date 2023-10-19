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
    }),
  }),
});

export const { useCreateBookingMutation } = authApi;
