import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './components/pages/Home/Home';
import Blogs from './components/pages/Bolgs/Blogs';
import Root from './components/Root/Root';
import Bookmarks from './components/pages/Bookmarks/Bookmarks';
import SingleBlog from './components/pages/SingleBlog/SingleBlog';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
        loader: () => fetch('https://dev.to/api/articles?per_page=20&top=7'),
      },
      {
        path: "/singleBlog/:id",
        element: <SingleBlog></SingleBlog>,
        loader: ({ params }) =>
          fetch(`https://dev.to/api/articles/${params?.id}`),
      },
      {
        path: "/bookmarks",
        element: <Bookmarks></Bookmarks>
      },


    ]
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);