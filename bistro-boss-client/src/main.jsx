import ReactDOM from "react-dom/client";
import "./index.css";
import React from "react";
import router from "./router/router";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./component/Provider/AuthProvider";





ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </AuthProvider>
);
