import { createBrowserRouter, Outlet } from "react-router-dom";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import { Footer } from "./Components/Footer";
import { Navbar } from "./Components/NavBar";
import { Home } from "./Pages/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <></>,
    },
  ]);
  return (
    <>
      <Home />
    </>
  );
}

export default App;
