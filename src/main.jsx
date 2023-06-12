import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./routing/routing";
import { RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

import { Data } from "./Context";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <Data>
         <RouterProvider router={router} />
      </Data>
   </React.StrictMode>
);
