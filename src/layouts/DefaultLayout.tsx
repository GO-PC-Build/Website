import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

import { Covid } from "../components/covid/Covid.comp";
import { Footer } from "../components/footer/Footer.comp";
import { Helmet } from "react-helmet";
import { Navigation } from "../components/navigation/Navigation.comp";

export interface DefaultLayoutProps {
  title?: string;
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

export const DefaultLayout: React.FC<DefaultLayoutProps> = (props) => {
  const [covidIsOpen, setCovidIsOpen] = useState(false);
  const [navIsOpen, setNavIsOpen] = useState(false);

  window.addEventListener("scroll", () => {
    setNavIsOpen(false);
    setCovidIsOpen(false);
  });

  return (
    // <Suspense fallback={<p>Loading</p>}>
    <>
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
    </>
    // </Suspense>
  );
};
