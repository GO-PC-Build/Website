import { Description, IntroWrapper, Reserve, Title } from "./Intro.styled";

import React from "react";

export const Intro: React.FC = () => (
  <IntroWrapper>
    <Title>Welkom bij{'\n'}GO-PC Build</Title>
    <Description>
      Leer bij ons professioneel een pc bouwen! Van het samenstellen tot het
      bestuurings systeem installeren!
    </Description>
    <Reserve to="/reserveer">Reserveer nu</Reserve>
  </IntroWrapper>
);
