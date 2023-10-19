import {
  useFilterByCategoryPriceQuery,
  useFilterByCategoryPriceStatusQuery,
  useFilterByCategoryQuery,
  useFilterByPriceQuery,
  useFilterBySearchCategoryPriceQuery,
  useFilterBySearchPriceQuery,
  useFilterBySearchQuery,
  useFilterBySearchStatusCategoryQuery,
  useFilterBySearchStatusPriceCategoryQuery,
  useFilterBySearchStatusPriceQuery,
  useFilterBySearchStatusQuery,
  useFilterByStatusCategoryQuery,
  useFilterByStatusQuery,
  useFilterStatusAndPriceQuery,
  useFilterbySearchCategoryQuery,
  useGetAllServiceQuery,
} from "../redux/features/service/serviceApi";
import { useAppSelector } from "./hook";

export const useFilterQuery = () => {
  const {
    filters: { category, minPrice, maxPrice, serviceStatus },
    search,
  } = useAppSelector((state) => state.service);

  const { data: allData } = useGetAllServiceQuery(undefined);

  const { data: searchBaseData } = useFilterBySearchQuery(search as string);
  const { data: priceBaseData } = useFilterByPriceQuery({
    minPrice: minPrice || 0, // Provide a default value if minPrice is undefined
    maxPrice: maxPrice || 0, // Provide a default value if maxPrice is undefined
  });

  const { data: CategoryBaseData } = useFilterByCategoryQuery(
    category as string
  );
  const { data: statusBaseData } = useFilterByStatusQuery(
    serviceStatus as string
  );

  const { data: statusPriceData } = useFilterStatusAndPriceQuery({
    serviceStatus,
    minPrice,
    maxPrice,
  });

  const { data: statusCategoryData } = useFilterByStatusCategoryQuery({
    serviceStatus,
    category,
  });
  const { data: categoryPriceData } = useFilterByCategoryPriceQuery({
    minPrice,
    maxPrice,
    category,
  });
  const { data: categoryPriceStatusData } = useFilterByCategoryPriceStatusQuery(
    {
      category,
      serviceStatus,
      minPrice,
      maxPrice,
    }
  );

  const { data: searchPriceData } = useFilterBySearchPriceQuery({
    search,
    minPrice,
    maxPrice,
  });
  const { data: searchCategoryData } = useFilterbySearchCategoryQuery({
    search,
    category,
  });
  const { data: searchStatusData } = useFilterBySearchStatusQuery({
    search,
    serviceStatus,
  });
  const { data: searchStatusCategory } = useFilterBySearchStatusCategoryQuery({
    search,
    serviceStatus,
    category,
  });
  const { data: searchStatusPrice } = useFilterBySearchStatusPriceQuery({
    search,
    serviceStatus,
    minPrice,
    maxPrice,
  });

  const { data: allFilterData } = useFilterBySearchStatusPriceCategoryQuery({
    search,
    serviceStatus,
    category,
    minPrice,
    maxPrice,
  });
  const { data: categorySearchPrice } = useFilterBySearchCategoryPriceQuery({
    category,
    minPrice,
    maxPrice,
    search,
  });

  const getQueryToUse = () => {
    if (
      !search &&
      !category &&
      minPrice === 0 &&
      maxPrice === 0 &&
      !serviceStatus
    ) {
      console.log("allData");
      return allData;
    } else if (
      search &&
      !category &&
      minPrice === 0 &&
      maxPrice === 0 &&
      !serviceStatus
    ) {
      console.log("searchBase");
      return searchBaseData;
    } else if (
      !search &&
      !category &&
      minPrice !== undefined && // Check if minPrice is defined
      maxPrice !== undefined && // Check if maxPrice is defined
      ((minPrice === 0 && maxPrice > 0) ||
        (minPrice > 0 && maxPrice === 0) ||
        (minPrice > 0 && maxPrice > 0)) &&
      !serviceStatus
    ) {
      console.log("pricebase");
      return priceBaseData;
    } else if (
      category &&
      !search &&
      minPrice === 0 &&
      maxPrice === 0 &&
      !serviceStatus
    ) {
      console.log("categoryBase");
      return CategoryBaseData;
    } else if (
      serviceStatus &&
      minPrice === 0 &&
      maxPrice === 0 &&
      !search &&
      !category
    ) {
      console.log("statusBase");
      return statusBaseData;
    } else if (
      serviceStatus &&
      minPrice !== undefined && // Check if minPrice is defined
      maxPrice !== undefined && // Check if maxPrice is defined
      ((minPrice === 0 && maxPrice > 0) ||
        (minPrice > 0 && maxPrice === 0) ||
        (minPrice > 0 && maxPrice > 0)) &&
      !category &&
      !search
    ) {
      console.log("statusPRiceData");
      return statusPriceData;
    } else if (
      serviceStatus &&
      minPrice === 0 &&
      maxPrice === 0 &&
      category &&
      !search
    ) {
      console.log("statusCategoryData");
      return statusCategoryData;
    } else if (
      !serviceStatus &&
      minPrice !== undefined && // Check if minPrice is defined
      maxPrice !== undefined && // Check if maxPrice is defined
      ((minPrice === 0 && maxPrice > 0) ||
        (minPrice > 0 && maxPrice === 0) ||
        (minPrice > 0 && maxPrice > 0)) &&
      category &&
      !search
    ) {
      console.log("categoryPriceData");
      return categoryPriceData;
    } else if (
      serviceStatus &&
      minPrice !== undefined && // Check if minPrice is defined
      maxPrice !== undefined && // Check if maxPrice is defined
      ((minPrice === 0 && maxPrice > 0) ||
        (minPrice > 0 && maxPrice === 0) ||
        (minPrice > 0 && maxPrice > 0)) && // Allow minPrice 0 or minPrice >= 0
      category &&
      !search
    ) {
      console.log("categoryPriceStatusData");
      return categoryPriceStatusData;
    } else if (
      !serviceStatus &&
      !category &&
      minPrice !== undefined && // Check if minPrice is defined
      maxPrice !== undefined && // Check if maxPrice is defined
      ((minPrice === 0 && maxPrice > 0) ||
        (minPrice > 0 && maxPrice === 0) ||
        (minPrice > 0 && maxPrice > 0)) && // Check if maxPrice is defined
      search
    ) {
      console.log("searchPriceData");
      return searchPriceData;
    } else if (
      search &&
      category &&
      !serviceStatus &&
      minPrice === 0 &&
      maxPrice === 0
    ) {
      console.log("searchCategoryData");
      return searchCategoryData;
    } else if (
      search &&
      !category &&
      serviceStatus &&
      minPrice === 0 &&
      maxPrice === 0
    ) {
      console.log("searchStatusData");
      return searchStatusData;
    } else if (
      search &&
      category &&
      serviceStatus &&
      minPrice === 0 &&
      maxPrice === 0
    ) {
      console.log("searchStatusCategory");
      return searchStatusCategory;
    } else if (
      search &&
      category &&
      !serviceStatus &&
      minPrice !== undefined && // Check if minPrice is defined
      maxPrice !== undefined && // Check if maxPrice is defined
      ((minPrice === 0 && maxPrice > 0) ||
        (minPrice > 0 && maxPrice === 0) ||
        (minPrice > 0 && maxPrice > 0))
    ) {
      console.log("categorySearchPrice");
      return categorySearchPrice;
    } else if (
      search &&
      !category &&
      serviceStatus &&
      minPrice !== undefined && // Check if minPrice is defined
      maxPrice !== undefined && // Check if maxPrice is defined
      ((minPrice === 0 && maxPrice > 0) ||
        (minPrice === 0 && maxPrice > 0) ||
        (minPrice > 0 && maxPrice > 0))
    ) {
      console.log("searchStatusPrice");
      return searchStatusPrice;
    } else if (
      search &&
      category &&
      serviceStatus &&
      minPrice !== undefined && // Check if minPrice is defined
      maxPrice !== undefined && // Check if maxPrice is defined
      ((minPrice === 0 && maxPrice > 0) ||
        (minPrice === 0 && maxPrice > 0) ||
        (minPrice > 0 && maxPrice > 0))
    ) {
      console.log("allFilterData");
      return allFilterData;
    }
  };

  const data = getQueryToUse();
  return data || [];
};
