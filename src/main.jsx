import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Error from './pages/Error.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Home from './pages/Home.jsx'
import { ContextProvider } from './context/Context.jsx';
import Layout from './layout/Layout.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />
      }
    ]
  },
  {
    path: "/login",
    element: <Layout />,
    children: [
      {
        path: "/login",
        element: <Login/>
      }
    ]
  },
  {
    path: "/register",
    element: <Layout />,
    children: [
      {
        path: "/register",
        element: <Register/>
      }
    ]
  },
  {
    path: "chefs-recipes"
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
    <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>,
)
