import {
   Route,
   createBrowserRouter,
   createRoutesFromElements,
} from "react-router-dom";

import Header from "../components/Header/Header.jsx";
import Verbs from "../components/Categories/Verbs/Verbs.jsx";
import Nomens from "../components/Categories/Nomens/Nomens.jsx";
import App from "../App.jsx";
import VerbGenerate from "../components/Categories/Verbs/Verb/Verb.jsx";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <App />,
   },
   {
      path: "/verbs",
      element: <Verbs />,
   },
   {
      path: "/nomens",
      element: <Nomens />,
   },
   {
      path: "verbs/:id",
      element: <VerbGenerate />,
   },
]);
