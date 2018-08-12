import React from "react";
import { Switch, Route } from "react-router-dom";

import PartI from "./Components/PartI/PartI";
import PartII from "./Components/PartII/PartII";
import PartIII from "./Components/PartIII/PartIII";

export default (
  <Switch>
    <Route exact path="/" component={PartI} />
    <Route path="/part2" component={PartII} />
    <Route path="/part3" component={PartIII} />
  </Switch>
);
