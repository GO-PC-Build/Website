import React, { Suspense, useState } from "react";

import { Covid } from "../components/covid/Covid.comp";
import { Helmet } from "react-helmet";
import { Navigation } from "../components/navigation/Navigation.comp";
import styled from "styled-components";

export interface DefaultLayoutProps {
  title?: string;
}

const MainContent = styled.main`
  position: absolute;
  top: 90px;

  font-family: "Roboto", sans-serif;
`;

export const DefaultLayout: React.FC<DefaultLayoutProps> = (props) => {
  const [covidIsOpen, setCovidIsOpen] = useState(false);

  return (
    <Suspense fallback={<p>Loading</p>}>
      <Helmet>
        <title>GO-PC Build{props.title && ` | ${props.title}`}</title>
      </Helmet>
      <Navigation setCovidIsOpen={setCovidIsOpen} />
      <Covid isActive={covidIsOpen} setIsActive={setCovidIsOpen} />
      <MainContent onClick={() => setCovidIsOpen(false)}>{props.children}</MainContent>
    </Suspense>
  );
};
