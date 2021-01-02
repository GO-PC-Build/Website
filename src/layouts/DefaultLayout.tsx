import React, { Suspense } from "react";

import { Helmet } from "react-helmet";
import { Navigation } from "../components/navigation/Navigation.comp";
import styled from "styled-components";

export interface DefaultLayoutProps {
  title?: string;
}

const MainContent = styled.main`
  position: absolute;
  top: 90px;
`;

export const DefaultLayout: React.FC<DefaultLayoutProps> = (props) => (
  <Suspense fallback={<p>Loading</p>}>
    <Helmet>
      <title>GO-PC Build{props.title && ` | ${props.title}`}</title>
    </Helmet>
    <Navigation />
    <MainContent>{props.children}</MainContent>
  </Suspense>
);
