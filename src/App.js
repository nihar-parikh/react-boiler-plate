import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";

const App = () => {
  const routes = useRoutes([
    {
      path: "/login",
      element: <h1>Login</h1>,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/",
      element: <Home />,
    },
  ]);

  return routes;
};

export default App;
