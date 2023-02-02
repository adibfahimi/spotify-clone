import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Discover from "./pages/Discover";

import "./index.css";

const colors: string[] = ["#4820b0", "#535353"];
const color: string = colors[Math.floor(Math.random() * colors.length)];

const router = createBrowserRouter([
  {
    path: "/",
    element: <Discover color={color} />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="grid h-full w-full text-sm text-white">
      <Sidebar />
      <Footer />
      <Header color={color} />
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
