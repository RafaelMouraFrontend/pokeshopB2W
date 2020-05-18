import React from "react";
import { Switch, Route } from "react-router-dom";

import MarketPlace from "../pages/MarketPlace";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={MarketPlace} />
    </Switch>
  );
}
