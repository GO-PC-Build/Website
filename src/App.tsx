import React, { useEffect } from "react";
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import { DefaultLayout } from "./layouts/DefaultLayout";
import IndexPage from "./pages";
import ReservePage from "./pages/reserve";

const Draaiboek = () => {
  useEffect(() => {
    window.location.reload();
  }, [])

  return <Redirect to="/static/draaiboek.pdf" />;
}

// const IndexPage = lazy(() => import("./pages/index"));
// const ReservePage = lazy(() => import("./pages/reserve"));

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
        path="/reserveer"
        render={() => (
          <DefaultLayout title={"Reserveer"}>
            <ReservePage />
          </DefaultLayout>
        )}
      />
      <Route
        exact
        path="/discord"
        render={() => (window.location.href = "https://discord.gg/qpQRqwY8Z8")}
      />
      <Route
        exact
        path="/draaiboek"
        render={() => <Draaiboek />}
      />
      <Redirect to="/" />
    </Switch>
  </Router>
);

export default App;
