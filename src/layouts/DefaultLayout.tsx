import React, { createContext, useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

import { Covid } from "../components/covid/Covid.comp";
import { Footer } from "../components/footer/Footer.comp";
import { Helmet } from "react-helmet";
import { Navigation } from "../components/navigation/Navigation.comp";
import { Redirect } from "react-router";
import axios from "axios";

export interface DefaultLayoutProps {
  title?: string;
  requiresLogin?: boolean;
}

const GlobalStyle = createGlobalStyle`
  #root {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #4A85B980;
  }

  ::-webkit-scrollbar-thumb {
    background: #0A142C;
    transition: background 0.5s ease-in-out;
    border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #0A142CF0;
  }
`;

const MainContent = styled.main`
  position: relative;
  margin: 150px 0 0 0;
  padding: 0 0 120px 0;
  height: 100%;

  font-family: "Roboto", sans-serif;

  @media (min-width: 1024px) {
    width: calc(100% - 300px);
    margin-left: 300px;
  }

  &::before {
    content: "";
    position: absolute;
    background-color: #0a142c;
    padding: 10px;

    bottom: 0;
    left: 0;
  }

  &::after {
    content: "";
    position: absolute;
    background-color: #fff;
    padding: 10px;

    border-radius: 0 0 0 14px;

    bottom: 0;
    left: 0;
  }
`;

export interface GoAoUser {
  internalnr: number;
  lastname: string;
  firstname: string;
  class: string;
}

const loadingUser: GoAoUser = {
  internalnr: 0,
  firstname: "Loading",
  lastname: "",
  class: ""
};

export const AccountContext = createContext<GoAoUser>(loadingUser);

const getCookie = (cname: string) => {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1);
    if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
  }
  return "";
};

export const DefaultLayout: React.FC<DefaultLayoutProps> = (props) => {
  const [covidIsOpen, setCovidIsOpen] = useState(true);
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [account, setAccount] = useState<GoAoUser>(loadingUser);
  const [proceedToLogin, setProceedToLogin] = useState(false);

  useEffect(() => {
    const fetchAccount = async () => {
      const login = () => {
        localStorage.setItem("forward", window.location.href);
        setProceedToLogin(true);
        return;
      };

      const session = getCookie("auth");
      if (!props.requiresLogin && session === "") return;
      else if (props.requiresLogin && session === "") login();

      const development = process.env.NODE_ENV === "development";
      const req = await axios.post(
        "https://www.go-atheneumoudenaarde.be/dashboard/OAuthGetJson.php",
        {
          app: development ? "test" : "gpb",
          session,
        }
      );

      if (req.data.length !== 0) {
        const user: GoAoUser = {
          internalnr: req.data?.internalnr,
          firstname: req.data?.firstname,
          lastname: req.data?.lastname,
          class: req.data.groepen?.[0].name,
        };

        setAccount(user);
      }
      else if (props.requiresLogin) login();
    };

    fetchAccount();
  }, [props.requiresLogin]);

  window.addEventListener("scroll", () => {
    setNavIsOpen(false);
    setCovidIsOpen(false);
  });

  return proceedToLogin ? (
    <Redirect to="/login" />
  ) : (
    <AccountContext.Provider value={account}>
      <Helmet>
        <title>GO-PC Build{props.title && ` | ${props.title}`}</title>
      </Helmet>
      <GlobalStyle />
      <Navigation
        isOpen={navIsOpen}
        setOpen={setNavIsOpen}
        setCovidIsOpen={setCovidIsOpen}
      />
      <Covid
        setNav={setNavIsOpen}
        isActive={covidIsOpen}
        setIsActive={setCovidIsOpen}
      />
      <MainContent
        onClick={() => {
          setNavIsOpen(false);
          setCovidIsOpen(false);
        }}
      >
        {props.children}
      </MainContent>
      <Footer />
    </AccountContext.Provider>
  );
};
