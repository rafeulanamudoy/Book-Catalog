import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import DashBoard from "../layout/DashBoard/DashBoard";

import AllService from "../pages/AllService";
import ServiceBook from "../pages/ServiceBook";
import SuperSignUp from "../pages/SuperSignUp";
import Profile from "../pages/Profile";
import ProfileEdit from "../pages/ProfileEdit";
import BookingHistory from "../pages/BookingHistory";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/services",
        element: <AllService />,
      },
      {
        path: "/book",
        element: <ServiceBook />,
      },
      {
        path: "/createSuperAdmin",
        element: <SuperSignUp />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashBoard />,
    children: [
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "profileEdit",
        element: <ProfileEdit />,
      },
      {
        path: "bookingHistory",
        element: <BookingHistory />,
      },
    ],
  },
]);
