import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import PageHome from "./pages/PageHome";
import PageAbout from "./pages/PageAbout";
import PagePrograms from "./pages/PagePrograms";
import PageTrainWithMe from "./pages/PageTrainWithMe";

import "bootstrap/dist/css/bootstrap.css";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
  },
  {
    path: "/PageHome",
    element: <PageHome />,
  },
  {
    path: "/PageAbout",
    element: <PageAbout />,
  },
  {
    path: "/PagePrograms",
    element: <PagePrograms />,
  },
  {
    path: "/PageTrainWithMe",
    element: <PageTrainWithMe />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
