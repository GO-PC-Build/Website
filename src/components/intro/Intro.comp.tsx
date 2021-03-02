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
      Leer bij ons professioneel een pc bouwen. Van het samenstellen tot het
      bestuuringssysteem installeren.
    </Description>
    <SideIcons>
      <img
        style={{ width: 266, marginRight: 20, maxWidth: "80vw" }}
        src="/static/stube.jpg"
        alt=""
      />
      <img
        style={{ width: 266, margin: "auto", maxWidth: "80vw" }}
        src="/static/go-ao.png"
        alt=""
      />
    </SideIcons>
    <Reserve to="/reserveer">Reserveer nu</Reserve>
  </IntroWrapper>
);
