import React from "react";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { CartProvider } from "./ContextReducer";
import { ContactUs } from "../screens/Contactus";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/createuser" element={<Signup />} />
      <Route path="/contactus" element={<ContactUs/>} />
    </>
  )
);

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
