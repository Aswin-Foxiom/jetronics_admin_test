import React, { useState } from "react";
import { Route, Routes } from "react-router-dom/dist";
import RouterConnection from "./connection/RouterConnection";
import PageLogin from "./pages/public/PageLogin";
import PageDashboard from "./pages/private/Dasboard/PageDashboard";
import Table from "./components/Table";
import { basePath, managerPath } from "./services/UrlPaths";
import PageManagerListing from "./pages/private/Manager/PageManagerListing";

import ErrorBoundary from "./utils/ErrorBoundary";
import PageNotFound from "./pages/specialPages/PageNotFound";
import AddProduct from "./pages/private/Product/AddProduct";
import ProductListing from "./pages/private/Product/ProductListing";
import Home from "./pages/private/Language&Country/Home";
import StatusHome from "./pages/private/Status&City/Home";

function App() {
  return (
    <div>
      <ErrorBoundary>
        <Routes>
          <Route path="/login" element={<PageLogin />} />
          <Route path={basePath} element={<RouterConnection />}>
            <Route index element={<PageDashboard />} />
            <Route
              path={basePath + managerPath}
              element={<PageManagerListing />}
            />
            <Route path="add-product" element={<AddProduct />} />
            <Route path="products" element={<ProductListing />} />
            <Route path="language-and-country" element={<Home />} />
            <Route path="status-and-city" element={<StatusHome />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
