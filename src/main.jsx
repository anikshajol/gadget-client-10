import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./Root.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./Components/ErrorPage/ErrorPage.jsx";
import Home from "./Components/Home/Home.jsx";
import AddProducts from "./Components/AddProducts/AddProducts.jsx";

import Login from "./Components/Login/Login.jsx";
import Register from "./Components/Register/Register.jsx";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";
import Products from "./Components/Products/Products.jsx";
import ProductDetails from "./Components/ProductDetails/ProductDetails.jsx";
import Cart from "./Components/Cart/Cart.jsx";
import PrivateRoute from "./PrivateRoute/PrivateRoute.jsx";
import UpdateProducts from "./Components/UpdateProducts/UpdateProducts.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch(
            `https://as-gadget-server-side-k3thwcd9r-anikshajol.vercel.app/brands`
          ),
      },
      {
        path: "/home",
        element: <Home></Home>,
        loader: () =>
          fetch(
            `https://as-gadget-server-side-k3thwcd9r-anikshajol.vercel.app/brands`
          ),
      },
      {
        path: "/add-products",
        element: (
          <PrivateRoute>
            <AddProducts></AddProducts>
          </PrivateRoute>
        ),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart></Cart>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            `https://as-gadget-server-side-k3thwcd9r-anikshajol.vercel.app/cart`
          ),
      },
      {
        path: "/products/:brand",
        element: <Products></Products>,
        loader: ({ params }) =>
          fetch(
            `https://as-gadget-server-side-k3thwcd9r-anikshajol.vercel.app/products/${params.brand}`
          ),
      },
      {
        path: "/products/:id",
        element: <UpdateProducts></UpdateProducts>,
        loader: ({ params }) =>
          fetch(
            `https://as-gadget-server-side-k3thwcd9r-anikshajol.vercel.app/products/${params.id}`
          ),
      },
      {
        path: "/products/:brand/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) =>
          fetch(
            `https://as-gadget-server-side-k3thwcd9r-anikshajol.vercel.app/products/${params.brand}/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      {" "}
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </AuthProvider>
  </React.StrictMode>
);
