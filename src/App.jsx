import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayout from "./ui/appLayout/AppLayout";
import Home from "./ui/home/Home";
import About from "./features/about/About";
import Services from "./features/appServices/appService";
import Events from "./features/events/Events";
import Products from "./features/products/Products";
import Support from "./features/support/Support";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/support",
        element: <Support />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
