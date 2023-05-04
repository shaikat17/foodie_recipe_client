import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { ContextProvider } from "./context/Context.jsx";
import Error from "./pages/Error.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Home from "./pages/Home.jsx";
import Layout from "./layout/Layout.jsx";
import ChefRecipes from "./components/ChefRecipes.jsx";
import Blog from "./pages/Blog.jsx";
import PrivateRoute from "./privateRoute/PrivateRoute.jsx";
import Pdf from "./pages/Pdf.jsx";
import FavouriteRecipes from "./components/FavouriteRecipes.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <Layout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/register",
    element: <Layout />,
    children: [
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/chef-recipes",
    element: <Layout />,
    children: [
      {
        path: "/chef-recipes/:id",
        element: <PrivateRoute><ChefRecipes /></PrivateRoute>,
      },
    ],
  },
  {
    path: "/blog",
    element: <Layout />,
    children: [
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
  {
    path: "/pdf",
    element: <Pdf />
  },
  {
    path: "/favourite_recipes",
    element: <Layout />,
    children: [
      {
        path: "/favourite_recipes",
        element: <FavouriteRecipes />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
);
