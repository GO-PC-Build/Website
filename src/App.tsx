import React, { lazy } from "react";
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import { DefaultLayout } from "./layouts/DefaultLayout";

const IndexPage = lazy(() => import("./pages/index"));

const App = () => (
  <Router>
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <DefaultLayout title={"Home"}>
            <IndexPage />
          </DefaultLayout>
        )}
      />
      <Route
        exact
        path="/discord"
        render={() => (window.location.href = "https://discord.gg/qpQRqwY8Z8")}
      />
      <Redirect to="/" />
    </Switch>
  </Router>
);

export default App;
