import React from "react";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import HomePage from "./pages/HomePage";
import { ROUTER } from "./router/router";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import WatchesPage from "./pages/WatchesPage";

const router = createBrowserRouter([
  {
    path: ROUTER.HOME_PAGE_ROUTE,
    element: <HomePage />,
  },
  {
    path: ROUTER.ABOUTUS_PAGE_ROUTE,
    element: <AboutUsPage />,
  },
  {
    path: ROUTER.CONTACTUS_PAGE_ROUTE,
    element: <ContactUsPage />,
  },
  {
    path: ROUTER.WATCHES_PAGE_ROUTE,
    element: <WatchesPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
