import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./Components/mainLayout";
import { Home } from "./Pages/Home";
import { Contact } from "./Pages/Contact";
import { Detail } from "./Pages/Detail";
import { Favs } from "./Pages/Favs";
import { Login } from "./Pages/Login";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
          {
              path: "/detail/:id",
              element: <Detail />,
          },
          {
              path: "/favs",
              element: <Favs />,
          },
          {
              path: "/login",
              element: <Login />,
          },
      ],
    },
  ]);
  return <RouterProvider router={appRouter} />;
}

export default App;
