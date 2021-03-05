import { DefaultLayout, Loader } from "./layouts/DefaultLayout";
import React, { lazy, useEffect } from "react";
import {
  Redirect,
  Route,
  RouteProps,
  BrowserRouter as Router,
  Switch,
  useLocation,
} from "react-router-dom";

import { Helmet } from "react-helmet";

// import IndexPage from "./pages";
// import ReservationPage from "./pages/reservation";
// import ReservePage from "./pages/reserve";

const IndexPage = lazy(() => import("./pages/index"));
const ReservationPage = lazy(() => import("./pages/reservation"));
const ReservePage = lazy(() => import("./pages/reserve"));

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
  return <></>;
};

interface CustomRouteProps extends RouteProps {
  content: Function;
  title: string;
  onlyShowLoading?: boolean;
}

const CustomRoute: React.FC<CustomRouteProps> = (props) => (
  <Route {...props}>
    {!!props.onlyShowLoading ? (
      <Loader>
        <Helmet>
          <title>GO-PC Build{props.title && ` | ${props.title}`}</title>
        </Helmet>
        {props.content()}
      </Loader>
    ) : (
      <DefaultLayout title={props.title}>{props.content()}</DefaultLayout>
    )}
  </Route>
);

const CustomRedirect: React.FC<{
  path: string;
  redirect: string;
  title: string;
}> = (props) => (
  <CustomRoute
    exact
    path={props.path}
    title={props.title}
    content={() => (window.location.href = props.redirect)}
    onlyShowLoading
  />
);

const App = () => (
  <Router>
    <Switch>
      <CustomRoute exact path="/" title="Home" content={() => <IndexPage />} />
      <CustomRoute
        exact
        path="/reserveer"
        title="Reserveer"
        content={() => <ReservePage />}
      />
      <CustomRoute
        exact
        path="/reservatie"
        title="Mijn reservatie"
        content={() => <ReservationPage />}
      />
      <CustomRedirect
        path="/discord"
        title="Discord"
        redirect="https://discord.gg/qpQRqwY8Z8"
      />
      <CustomRedirect
        path="/quiz"
        title="Quiz"
        redirect="https://docs.google.com/forms/d/e/1FAIpQLSdVXqprKxwSRa2nz0gpJOhmr7gHpv4YUI8OMWqCDf-zI9RsNQ/viewform?usp=sf_link"
      />
      <CustomRoute
        exact
        path="/login"
        title="Login"
        content={() =>
          (window.location.href = `https://www.go-atheneumoudenaarde.be/dashboard/QAuthLogin.php?app=${
            process.env.NODE_ENV === "development" ? "test" : "gpb"
          }`)
        }
        onlyShowLoading
      />
      <CustomRoute
        exact
        path="/sign/:leerlingId"
        title="Login"
        content={() => <SignIn />}
      />
      <CustomRoute
        exact
        path="/draaiboek"
        title="Draaiboek"
        content={() => <Draaiboek />}
      />
      <CustomRoute
        exact
        path="/logout"
        title="Logout"
        content={() => {
          document.cookie = "accepted_cookies=; expires=;";
          document.cookie = "auth=; expires=;";
          return <Redirect to="/" />;
        }}
      />
      <Redirect to="/" />
    </Switch>
  </Router>
);

export default App;
