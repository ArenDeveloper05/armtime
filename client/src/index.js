import React, { Suspense } from "react";
import { ROUTER } from "./router/router";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./redux/store";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import WatchesPage from "./pages/WatchesPage";
import SingleWatchPage from "./pages/SingleWatchPage";
import BeltsPage from "./pages/BeltsPage";
import CheckoutPage from "./pages/CheckoutPage";
import BeltsSinglePage from "./pages/BeltsSinglePage";
import DeliveryPage from "./pages/DeliveryPage";
import "./i18n";

import "./index.css";
import Loading from "./components/loading/Loading";

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
  {
    path: ROUTER.BELTS_PAGE_ROUTE,
    element: <BeltsPage />,
  },
  {
    path: ROUTER.SINGLE_WATCH_PAGE_ROUTE,
    element: <SingleWatchPage />,
  },
  {
    path: ROUTER.CHECKOUT_PAGE_ROUTE,
    element: <CheckoutPage />,
  },
  ,
  { path: ROUTER.BELTS_SINGLE_PAGE_ROUTE, element: <BeltsSinglePage /> },
  {
    path: ROUTER.DELIVERY_PAGE_ROUTE,
    element: <DeliveryPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <Suspense fallback={<Loading bg />}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </Suspense>
);
