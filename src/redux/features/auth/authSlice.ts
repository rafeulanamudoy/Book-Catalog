import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../../types/IUser";

const initialState: IUser = {
  user: {
    email: "",
  },
  isLoading: false,
  isError: false,
  error: "",
};

export const authSlice = createSlice({
  name: "authReducer",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string>) => {
      console.log(action, "i am from authSlice");
      state.user.email = action.payload;
    },
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
