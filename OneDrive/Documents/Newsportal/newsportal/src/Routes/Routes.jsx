import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import LatestPosts from "../Components/Home/Latest";
import Contact from "../Pages/Contact";
import Blog from "../Pages/Blog";
import Blogpage from "../Components/Blog/Blogpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "/Contact",
        element: <Contact/>,
      },
        {
        path: "/Blog",
        element: <Blogpage/>,
      },
    ],
  },
]);

export default router;
