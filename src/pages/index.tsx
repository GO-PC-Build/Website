import { Cards } from "../components/cards/Cards.comp";
import { Intro } from "../components/intro/Intro.comp";
import React from "react";

export const IndexPage: React.FC = () => (
    <React.Fragment>
        <Intro />
        <Cards />
    </React.Fragment>
);

export default IndexPage;
