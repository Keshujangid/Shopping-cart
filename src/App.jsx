import { useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./components/home/home";
import Shop from "./components/shop/shop";
import Header from "./components/header/header";
import Cart from "./components/cart/cart";

const routesArray = [
  { path: "/",
    element: <Header />, 
    children: [
      {index: true, element: <Home />},
      { path: "shop",
        element: <Shop />
      },
      {path: "cart", element: <Cart />}

    ]
  }
];

export default routesArray;
