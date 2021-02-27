import {
  Description,
  IntroWrapper,
  Reserve,
  SideIcons,
  Title,
} from "./Intro.styled";

import React from "react";

export const Intro: React.FC = () => (
  <IntroWrapper>
    <Title>Welkom bij{"\n"}GO-PC Build</Title>
    <div />
    <Description>
      Leer bij ons professioneel een pc bouwen! Van het samenstellen tot het
      bestuurings systeem installeren!
    </Description>
    <SideIcons>
      <img style={{ height: 174, width: 128, marginRight: 20 }} src="/static/stube.jpg" alt="" />
      <img style={{ height: 127, width: 266 }} src="/static/go-ao.png" alt="" />
    </SideIcons>
    <Reserve to="/reserveer">Reserveer nu</Reserve>
  </IntroWrapper>
);
