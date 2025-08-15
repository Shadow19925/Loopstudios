import { createBrowserRouter, RouterProvider } from "react-router";

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
