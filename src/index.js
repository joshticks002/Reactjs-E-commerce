import React from "react";
import { render } from "react-dom";

import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/user.context";
import { ProductProvider } from "./context/products.context";
import { CartProvider } from "./context/cart.context";
import App from "./App";
import "./index.scss";

const rootElement = document.getElementById("root");

render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
