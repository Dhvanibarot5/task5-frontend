import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage.jsx";
import AboutPage from "./components/AboutPage.jsx";
import RecipesPage from "./components/RecipesPage.jsx";
import HomePage from "./components/HomePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/recipes",
        element: <RecipesPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
