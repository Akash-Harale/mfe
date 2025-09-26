import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Pricing from "./components/Pricing.js";
import Landing from "./components/Landing.js";

export default () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/pricing" component={Pricing} />
          <Route path="/" component={Landing} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
