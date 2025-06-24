import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Politics from "../Pages/Categories/Politics";
import Education from "../Pages/Categories/Education";
import Entertainment from "../Pages/Categories/Entertainment";
import World from "../Pages/Categories/World";
import Games from "../Pages/Categories/Games";
import NewsDetails from "../Pages/NewsDetails/NewsDetails";
import SingleNewsPage from "../Pages/NewsDetails/SingleNewsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "/categories/politics",
        element: <Politics />,
      },
      {
        path: "/categories/education",
        element: <Education />,
      },
      {
        path: "/categories/entertainment",
        element: <Entertainment />,
      },
      {
        path: "/categories/world",
        element: <World />,
      },
      {
        path: "/categories/games",
        element: <Games />,
      },
      {
        path: "/news",
        element: <NewsDetails />,
      },
      {
        path: "/news/:id",
        element: <SingleNewsPage />,
      },
    ],
  },
]);

export default router;
