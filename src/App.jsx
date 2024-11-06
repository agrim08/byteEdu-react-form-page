import React from "react";
import Home from "./components/Home";
import Signup from "./components/SignUp";
import Login from "./components/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
      <ToastContainer />
    </div>
  );
}

export default App;
