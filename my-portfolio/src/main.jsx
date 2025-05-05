import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import App from "./App.jsx";
import Medicio from "./pages/medicio.jsx";
import Yummy from "./pages/yummy.jsx";
import Dashboard from "./pages/dashboard.jsx";
import EstateAgency from "./pages/estateagency.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/medicio",
    element: <Medicio />,
  },
  {
    path: "/yummy",
    element: <Yummy />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/estateagency",
    element: <EstateAgency />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />{" "}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
