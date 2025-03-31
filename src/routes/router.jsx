import { createBrowserRouter } from "react-router-dom";
import Home from "@/components/pages/home";
import NewsInfo from "@/components/pages/info";
import Layout from "@/components/layout/layout";
import React from "react";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "info", element: <NewsInfo /> },
    ],
  },
];

export default createBrowserRouter(routes);
