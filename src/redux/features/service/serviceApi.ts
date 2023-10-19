import { IFilterQuery, IReview, IService } from "../../../types/IService";
import { baseApi } from "../../api/baseApi";

export const serviceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAvailableService: build.query({
      query: () => "/service?serviceStatus=available",
      providesTags: ["Service"],
    }),
    getUpcomingService: build.query({
      query: () => "/service?serviceStatus=upcoming",
      providesTags: ["Service"],
    }),
    getAllService: build.query({
      query: () => "/service",
      providesTags: ["Service"],
    }),
    getServiceById: build.query({
      query: (id: string) => `/service/${id}`,
      providesTags: ["Service"],
    }),

    addService: build.mutation({
      query: (data: IService) => ({
        url: "/service",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Service"],
    }),
    createServiceReview: build.mutation({
      query: (data: IReview) => ({
        url: "/review",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Service"],
    }),
    updateService: build.mutation({
      query: ({ serviceId, updateData }) => ({
        url: `/service/${serviceId}`,
        method: "PATCH",
        body: updateData,
      }),
      invalidatesTags: ["Service"],
    }),
    deleteService: build.mutation({
      query: (id: string) => ({
        url: `/service/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Service"],
    }),

    filterBySearch: build.query({
      query: (search: string) => `/service?search=${search}`,
    }),

    filterByCategory: build.query({
      query: (category: string) => `/service?category=${category}`,
    }),
    filterByPrice: build.query({
      query: (params: IFilterQuery) => {
        const { minPrice, maxPrice } = params;
        const parseMinPrice = parseFloat(minPrice as unknown as string);
        const parseMaxPrice = parseFloat(maxPrice as unknown as string);
        return `/service/?minPrice=${parseMinPrice}&maxPrice=${parseMaxPrice}`;
      },
    }),
    filterByStatus: build.query({
      query: (status: string) => `/service?serviceStatus=${status}`,
    }),
    filterStatusAndPrice: build.query({
      query: (params: IFilterQuery) => {
        const { minPrice, maxPrice, serviceStatus } = params;
        const parseMinPrice = parseFloat(minPrice as unknown as string);
        const parseMaxPrice = parseFloat(maxPrice as unknown as string);
        return `/service/?minPrice=${parseMinPrice}&maxPrice=${parseMaxPrice}&serviceStatus=${serviceStatus}`;
      },
    }),
    filterByStatusCategory: build.query({
      query: (params: IFilterQuery) => {
        const { category, serviceStatus } = params;
        return `/service?serviceStatus=${serviceStatus}&category=${category}`;
      },
    }),
    filterByCategoryPrice: build.query({
      query: (params: IFilterQuery) => {
        const { category, minPrice, maxPrice } = params;
        const parseMinPrice = parseFloat(minPrice as unknown as string);
        const parseMaxPrice = parseFloat(maxPrice as unknown as string);
        return `/service?category=${category}&minPrice=${parseMinPrice}&maxPrice=${parseMaxPrice}`;
      },
    }),
    filterByCategoryPriceStatus: build.query({
      query: (params: IFilterQuery) => {
        const { category, minPrice, maxPrice, serviceStatus } = params;
        const parseMinPrice = parseFloat(minPrice as unknown as string);
        const parseMaxPrice = parseFloat(maxPrice as unknown as string);
        return `/service?category=${category}&minPrice=${parseMinPrice}&maxPrice=${parseMaxPrice}&serviceStatus=${serviceStatus}`;
      },
    }),
    filterBySearchPrice: build.query({
      query: (params: IFilterQuery) => {
        const { search, maxPrice, minPrice } = params;
        const parseMinPrice = parseFloat(minPrice as unknown as string);
        const parseMaxPrice = parseFloat(maxPrice as unknown as string);
        return `/service?search=${search}&minPrice=${parseMinPrice}&maxPrice=${parseMaxPrice}`;
      },
    }),
    filterbySearchCategory: build.query({
      query: (params: IFilterQuery) => {
        const { search, category } = params;
        return `/service?search=${search}&category=${category}`;
      },
    }),
    filterBySearchStatus: build.query({
      query: (params: IFilterQuery) => {
        const { search, serviceStatus } = params;
        return `/service?search=${search}&serviceStatus=${serviceStatus}`;
      },
    }),
    filterBySearchStatusCategory: build.query({
      query: (params: IFilterQuery) => {
        const { search, serviceStatus, category } = params;
        return `/service?search=${search}&serviceStatus=${serviceStatus}&category=${category}`;
      },
    }),

    filterBySearchStatusPrice: build.query({
      query: (params: IFilterQuery) => {
        const { search, serviceStatus, minPrice, maxPrice } = params;
        const parseMinPrice = parseFloat(minPrice as unknown as string);
        const parseMaxPrice = parseFloat(maxPrice as unknown as string);
        return `/service?search=${search}&serviceStatus=${serviceStatus}&minPrice=${parseMinPrice}&maxPrice=${parseMaxPrice}`;
      },
    }),
    filterBySearchCategoryPrice: build.query({
      query: (params: IFilterQuery) => {
        const { search, category, minPrice, maxPrice } = params;
        const parseMinPrice = parseFloat(minPrice as unknown as string);
        const parseMaxPrice = parseFloat(maxPrice as unknown as string);
        return `/service?search=${search}&category=${category}&minPrice=${parseMinPrice}&maxPrice=${parseMaxPrice}`;
      },
    }),

    filterBySearchStatusPriceCategory: build.query({
      query: (params: IFilterQuery) => {
        const { search, serviceStatus, category, minPrice, maxPrice } = params;
        const parseMinPrice = parseFloat(minPrice as unknown as string);
        const parseMaxPrice = parseFloat(maxPrice as unknown as string);
        return `/service?search=${search}&serviceStatus=${serviceStatus}&category=${category}&minPrice=${parseMinPrice}&maxPrice=${parseMaxPrice}`;
      },
    }),
  }),
});

export const {
  useGetAvailableServiceQuery,
  useGetUpcomingServiceQuery,
  useGetAllServiceQuery,
  useFilterBySearchQuery,
  useFilterByCategoryQuery,
  useFilterByPriceQuery,
  useFilterByStatusQuery,
  useFilterStatusAndPriceQuery,
  useFilterByStatusCategoryQuery,
  useFilterByCategoryPriceQuery,
  useFilterByCategoryPriceStatusQuery,
  useFilterBySearchPriceQuery,
  useFilterbySearchCategoryQuery,
  useFilterBySearchStatusQuery,
  useFilterBySearchStatusCategoryQuery,
  useFilterBySearchStatusPriceQuery,
  useFilterBySearchStatusPriceCategoryQuery,
  useFilterBySearchCategoryPriceQuery,
  useAddServiceMutation,
  useUpdateServiceMutation,
  useDeleteServiceMutation,
  useGetServiceByIdQuery,
  useCreateServiceReviewMutation,
} = serviceApi;
