import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./client/App.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import ContextProvider from "./provider/ContextProvider.jsx";
import Home from "./client/pages/Home.jsx";
import Wishlist from "./client/pages/Wishlist.jsx";
import Productpage from "./client/pages/Productpage.jsx";
import Cart from "./client/pages/cart/Cart.jsx";
import Profile from "./client/pages/profile/page.jsx";
import ProductList from "./client/pages/ProductList.jsx";
import Checkout from "./client/pages/Checkout.jsx";
import PaymentDetails from "./client/pages/PaymentDetails.jsx";
import OrderSummary from "./client/pages/OrderSummary.jsx";
import AdminApp from "./admin/AdminApp.jsx";
import AdminDashboard from "./admin/pages/Dashboard.jsx";
import Users from "./admin/pages/Users.jsx";
import Products from "./admin/features/products/Products.jsx";
import Register from "./client/pages/Register.jsx";
import SignUp from "./client/components/form/SignUp.jsx";
import SignIn from "./client/components/form/SignIn.jsx";
import Categories from "./admin/features/categories/Categories.jsx";
import CategoryManagement from "./admin/features/categories/CategoryMangement.jsx";
import ProductManagement from "./admin/features/products/ProductManagement.jsx";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import AdminUI from "./admin/features/ui/AdminUI.jsx";
import { SearchResult } from "./client/pages/SearchResult.jsx";

// router is created, which handles various routes.
const router = createBrowserRouter([
  // client
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="home" />,
      },

      // client pages
      { path: "/home", element: <Home /> },
      { path: "/wishlist", element: <Wishlist /> },
      { path: "/product/:id", element: <Productpage /> },
      {
        path: "/category/:category",
        element: <ProductList />,
      },
      { path: "/search", element: <SearchResult /> },
      { path: "/cart", element: <Cart /> },
      { path: "/profile", element: <Profile /> },
      { path: "/checkout", element: <Checkout /> },
      { path: "/payment-details", element: <PaymentDetails /> },
      { path: "/order-summary", element: <OrderSummary /> },

      // Add a fallback for unrecognized routes:
      {
        path: "*",
        element: (
          <h1 className="text-center text-2xl mt-10">404 - Page Not Found</h1>
        ),
      },
    ],
  },
  // register
  {
    path: "/register",
    element: <Register />,
    children: [
      { path: "sign-up", element: <SignUp /> },
      { path: "log-in", element: <SignIn /> },
    ],
  },
  // admin routes
  {
    path: "/admin",
    element: <AdminApp />,
    children: [
      { index: true, element: <Navigate to="categories" replace /> },
      { path: "dashboard", element: <AdminDashboard /> },
      {
        path: "products",
        children: [
          { index: true, element: <Products /> },
          { path: "product-management", element: <ProductManagement /> },
        ],
      },
      {
        path: "categories",
        children: [
          { index: true, element: <Categories /> },
          { path: "category-management", element: <CategoryManagement /> },
        ],
      },
      { path: "users", element: <Users /> },
      { path: "ui", element: <AdminUI /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ContextProvider>
    <Theme>
      <RouterProvider router={router} />
    </Theme>
  </ContextProvider>
);
