import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home/Home";

const App = () => {
  const routes = useRoutes([
    {
      path: "/login",
      element: <h1>Login</h1>,
    },
    {
      path: "/register",
      element: <h1>Register</h1>,
    },
    {
      path: "/",
      element: <Home />,
    },
  ]);

  return routes;
};

export default App;
