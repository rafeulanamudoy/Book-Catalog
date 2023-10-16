import { createSlice } from "@reduxjs/toolkit";

type Itoggle = {
  dashBoardToggle: boolean;
};
const initialState: Itoggle = {
  dashBoardToggle: false,
};

export const toggleSlice = createSlice({
  name: "toggleReducer",
  initialState,
  reducers: {
    setDashboardToggle: (state) => {
      state.dashBoardToggle = !state.dashBoardToggle;
    },
  },
});

export const { setDashboardToggle } = toggleSlice.actions;
export default toggleSlice.reducer;
