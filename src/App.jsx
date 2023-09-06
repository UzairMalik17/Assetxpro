import "./App.css";
import React from "react";
import Home from "./componenets/Pages/Home";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./componenets/Home/Root";
import ErrorPage from "./componenets/Pages/ErrorPage";
import Trading from "./componenets/Pages/Trading";
import Products from "./componenets/Pages/Products";
import AboutUs from "./componenets/Pages/AboutUs";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="/errorPage" errorElement={<ErrorPage />}></Route>
        <Route index element={<Home />}></Route>
        <Route path="/trading" element={<Trading />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
