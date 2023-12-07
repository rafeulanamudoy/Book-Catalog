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
import AllBooking from "../pages/AllBooking";
import CreateAdmin from "../pages/CreateAdmin";
import UserManagement from "../pages/UserManagement";
import AddService from "../pages/AddService";
import UpdateService from "../pages/UpdateService";
import ManageService from "../pages/ManageService";
import ServiceDetails from "../pages/ServiceDetails";
import CreateCategory from "../pages/CreateCategory";

import AllCategory from "../pages/AllCategory";

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
      {
        path: "/serviceDetails/:id",
        element: <ServiceDetails />,
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
      {
        path: "allBooking",
        element: <AllBooking />,
      },
      {
        path: "createAdmin",
        element: <CreateAdmin />,
      },
      {
        path: "userManagement",
        element: <UserManagement />,
      },
      {
        path: "addService",
        element: <AddService />,
      },
      {
        path: "updateService",
        element: <UpdateService />,
      },
      {
        path: "allService",
        element: <ManageService />,
      },
      {
        path: "createCategory",
        element: <CreateCategory />,
      },
      {
        path: "allCategory",
        element: <AllCategory />,
      },
    ],
  },
]);
