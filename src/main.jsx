import React from "react";
import ReactDOM from "react-dom/client";
import { Router, RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { router } from "./routes/Router";
import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <RecoilRoot>
      <Toaster />
      <RouterProvider router={router} />
    </RecoilRoot>
  // </React.StrictMode>
);
