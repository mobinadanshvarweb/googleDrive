import { createBrowserRouter } from "react-router";
import Layout from "../Layout";
import ErrorPage from "./ErrorPage";
import Home from "../pages/home/Home";
import Trash from "../pages/trash/Trash";
import Star from "../pages/stared/Star";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "star",
        element: <Star />,
      },
      {
        path: "trash",
        element: <Trash />,
      },
    ],
  },
]);
