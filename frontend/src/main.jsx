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
import Cart from "./client/pages/Cart.jsx";
import Profile from "./client/pages/Profile.jsx";
import Userdata from "./data/userdata.js";
import ProductList from "./client/pages/ProductList.jsx";
import Checkout from "./client/pages/Checkout.jsx"; // add this at top
import PaymentDetails from "./client/pages/PaymentDetails.jsx";
import OrderSummary from "./client/pages/OrderSummary.jsx";
import Contact from "./client/pages/Contact.jsx";
import About from "./client/pages/About.jsx";
import CancellationReturn from "./client/pages/CancellationReturn.jsx";
import PaymentPolicy from "./client/pages/PaymentPolicy.jsx";
import ShippingPolicy from "./client/pages/ShippingPolicy.jsx";
import TermsOfUse from "./client/pages/TermsOfUse.jsx";
import PrivacyPolicy from "./client/pages/PrivacyPolicy.jsx";
import FAQ from "./client/pages/FAQ.jsx";
import SecurityPolicy from "./client/pages/SecurityPolicy.jsx";
import Career from "./client/pages/Career.jsx";
import Store from "./client/pages/Store.jsx";
import SiteMap from "./client/pages/SiteMap.jsx";
import AdminApp from "./admin/AdminApp.jsx";
import AdminDashboard from "./admin/pages/Dashboard.jsx";
import Users from "./admin/pages/Users.jsx";
import Products from "./admin/features/products/Products.jsx";
import Register from "./client/pages/Register.jsx";
import SignUp from "./client/components/form/SignUp.jsx";
import SignIn from "./client/components/form/SignIn.jsx";
import UI from "./admin/pages/UI.jsx";
import Categories from "./admin/features/categories/Categories.jsx";
import ProductMgt from "./admin/features/products/ProductMgt.jsx";
import CategoryManagement from "./admin/features/categories/CategoryMangement.jsx";
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
      { path: "home", element: <Home /> },
      { path: "wishlist", element: <Wishlist /> },
      { path: "product/:productid", element: <Productpage /> },
      {
        path: "/:category/:sub_category/:sub_category_2",
        element: <ProductList />,
      },
      { path: "cart", element: <Cart /> },
      { path: "profile", element: <Profile /> },
      { path: "checkout", element: <Checkout /> },
      { path: "payment-details", element: <PaymentDetails /> },
      { path: "order-summary", element: <OrderSummary /> },
      { path: "contact", element: <Contact /> },
      { path: "about", element: <About /> },
      { path: "cancellation-return", element: <CancellationReturn /> },
      { path: "payment-policy", element: <PaymentPolicy /> },
      { path: "shipping-policy", element: <ShippingPolicy /> },
      { path: "terms-of-use", element: <TermsOfUse /> },
      { path: "privacy-policy", element: <PrivacyPolicy /> },
      { path: "faq", element: <FAQ /> },
      { path: "security-policy", element: <SecurityPolicy /> },
      { path: "career", element: <Career /> },
      { path: "store", element: <Store /> },
      { path: "sitemap", element: <SiteMap /> },

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
      { index: true, element: <Navigate to="dashboard" replace /> },
      { path: "dashboard", element: <AdminDashboard /> },
      {
        path: "product-management",
        children: [
          { index: true, element: <Products /> },
          { path: "new", element: <ProductMgt /> },
        ],
      },
      {
        path: "category-management",
        children: [
          { index: true, element: <Categories /> },
          { path: "manage-category", element: <CategoryManagement /> },
        ],
      },
      { path: "user-management", element: <Users /> },
      { path: "ui-management", element: <UI /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </StrictMode>
);
