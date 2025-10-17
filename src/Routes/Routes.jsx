import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
// import Root from "../Root/Root";
// import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root, 
    children: [
      {index: true, path: '/', Component: Home}
    ]
  },
]);