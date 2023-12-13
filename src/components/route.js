import {
  createBrowserRouter,
} from "react-router-dom";
import Layout from "./Layout";

// PAGES
import HomePage from "../pages/Home/HomePage";

export const WooriRoutes = createBrowserRouter([
  {
    path: "/",
    name: '',
    element: <Layout/>,
    children: [
      {
        name: 'Home',
        path: "home",
        element: <HomePage/>,
      },      
    ]
  },
]);