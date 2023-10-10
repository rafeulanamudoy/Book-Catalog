import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import AllBooks from "../pages/AllBooks";
import AddNewBook from "../pages/AddNewBook";
import BookDetails from "../pages/BookDetails";
import BookEdit from "../pages/BookEdit";
import Wishlisht from "../pages/Wishlisht";
import ReadingList from "../pages/ReadingList";

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
        path: "/allBooks",
        element: <AllBooks />,
      },
      {
        path: "/addBook",
        element: <AddNewBook />,
      },
      {
        path: "/bookDetails/:id",
        element: <BookDetails />,
      },
      {
        path: "/bookEdit",
        element: <BookEdit />,
      },
      {
        path: "/wishList",
        element: <Wishlisht />,
      },
      {
        path: "/readingList",
        element: <ReadingList />,
      },
    ],
  },
]);
