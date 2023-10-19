import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IServiceFilter } from "../../../types/IService";

const initialState: IServiceFilter = {
  filters: {
    category: "",
    minPrice: 0,
    maxPrice: 0,
    serviceStatus: "",
  },
  search: "",
};

export const ServiceSlice = createSlice({
  name: "serviceReducer",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<IServiceFilter>) => {
      //console.log(action.payload);

      const { category, minPrice, maxPrice, serviceStatus } =
        action.payload.filters;

      state.filters.category = category;
      state.filters.maxPrice = maxPrice;
      state.filters.minPrice = minPrice;
      state.filters.serviceStatus = serviceStatus;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      //console.log(action.payload);

      state.search = action.payload;
    },
  },
});

export const { setFilter, setSearch } = ServiceSlice.actions;
export default ServiceSlice.reducer;
