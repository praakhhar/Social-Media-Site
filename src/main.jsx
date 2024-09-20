import React from "react";

import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./routes/App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import CreatePost from "../component/CreatePost.jsx";
import PostList from "../component/PostList.jsx";
import Login from "../component/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <PostList /> },
      { path: "/create-Post", element: <CreatePost /> },
      { path: "/login", element: <Login /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
