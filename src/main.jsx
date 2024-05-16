import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Post, { postAction } from "./components/Post.jsx";
import Feed, { postLoader } from "./components/Feed.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Feed />, loader: postLoader },
      { path: "create-post", element: <Post />, action: postAction },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
