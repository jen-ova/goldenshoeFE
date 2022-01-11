import "./App.css";
import React from "react";
import Homepage from "./pages/Homepage";
import ProductOverview from "./pages/ProductOverview";
import ProductPage from "./pages/ProductPage";
import Track from "./pages/Track";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/track">
            <Track />
          </Route>
          <Route exact path="/product-overview/:category">
            <ProductOverview />
          </Route>
          <Route exact path="/product-page">
            <ProductPage />
          </Route>
          <Route exact path="/product-page/:id">
            <ProductPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
