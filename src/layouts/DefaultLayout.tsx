import React, { Suspense, useState } from "react";

import { Covid } from "../components/covid/Covid.comp";
import { Footer } from "../components/footer/Footer.comp";
import { Helmet } from "react-helmet";
import { Navigation } from "../components/navigation/Navigation.comp";
import styled from "styled-components";

export interface DefaultLayoutProps {
  title?: string;
}

const MainContent = styled.main`
  position: relative;
  margin: 150px 0 0 0;

  font-family: "Roboto", sans-serif;
  
  @media (min-width: 1024px) {
    width: calc(100% - 300px);
    margin-left: 300px;
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
    <Suspense fallback={<p>Loading</p>}>
      <Helmet>
        <title>GO-PC Build{props.title && ` | ${props.title}`}</title>
      </Helmet>
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
    </Suspense>
  );
};
