import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { About, Cart, Contact, Product, Products } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "products",
    element: <Products />,
  },
  { path: "products/:id", element: <Product /> },
]);
