import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Politics from "../Pages/Categories/Politics";
import Education from "../Pages/Categories/Education";
import Entertainment from "../Pages/Categories/Entertainment";
import World from "../Pages/Categories/World";
import Games from "../Pages/Categories/Games";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
          path: "",
          element: <Home />
        },
        {
          path: "about",
          element: <About />
        },
        {
          path: "/categories/politics",
          element: <Politics />
        },
        {
          path: "/categories/education",
          element: <Education />
        },
        {
          path: "/categories/entertainment",
          element: <Entertainment />
        },
        {
          path: "/categories/world",
          element: <World />
        },
        {
          path: "/categories/games",
          element: <Games />
        }
    ]
  },
]);

export default router;