import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Badges from "../pages/Badges";
import BadgeNew from "../pages/BadgeNew";
import Layout from "./Layout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
