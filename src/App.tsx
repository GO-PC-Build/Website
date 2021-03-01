import React, { useEffect } from "react";
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
  useLocation,
} from "react-router-dom";

import { DefaultLayout } from "./layouts/DefaultLayout";
import IndexPage from "./pages";
import ReservationPage from "./pages/reservation";
import ReservePage from "./pages/reserve";

const Draaiboek = () => {
  useEffect(() => {
    window.location.reload();
  }, []);

  return <Redirect to="/static/draaiboek.pdf" />;
};

const SignIn: React.FC = () => {
  const token = new URLSearchParams(useLocation().search).get("code");

  const date = new Date();
  date.setDate(date.getDate() + 7);
  document.cookie = `auth=${token}; expires=${date}; path=/; samesite=strict`;

  window.location.href = localStorage.getItem("forward") ?? "/";
  localStorage.removeItem("forward");
  return (
    <>
      Redirect to <a href="/">home</a>
    </>
  );
};

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
          <DefaultLayout requiresLogin title={"Reserveer"}>
            <ReservePage />
          </DefaultLayout>
        )}
      />
      <Route
        exact
        path="/reservatie"
        render={() => (
          <DefaultLayout requiresLogin title={"Mijn reservatie"}>
            <ReservationPage />
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
        path="/login"
        render={() =>
          (window.location.href = `https://www.go-atheneumoudenaarde.be/dashboard/QAuthLogin.php?app=${
            process.env.NODE_ENV === "development" ? "test" : "gpb"
          }`)
        }
      />
      <Route exact path="/sign/:leerlingId" render={() => <SignIn />} />
      <Route exact path="/draaiboek" render={() => <Draaiboek />} />
      <Route
        exact
        path="/logout"
        render={() => {
          document.cookie = "auth=; expires=;";
          return <Redirect to="/" />;
        }}
      />
      <Redirect to="/" />
    </Switch>
  </Router>
);

export default App;
