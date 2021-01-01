import React, { Suspense } from "react";

import { Helmet } from "react-helmet";
import { Navigation } from "../components/navigation/Navigation.comp";

export interface DefaultLayoutProps {
  title?: string;
}

export const DefaultLayout: React.FC<DefaultLayoutProps> = (props) => (
  <Suspense fallback={<p>Loading</p>}>
      <Helmet>
          <title>GO-PC Build{props.title && ` | ${props.title}`}</title>
      </Helmet>
      <Navigation />
      <main>{props.children}</main>
  </Suspense>
);
