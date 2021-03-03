import {
  Description,
  IntroImage,
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
      <IntroImage src="/static/stube.jpg" alt="" style={{ marginRight: 20 }} />
      <IntroImage src="/static/go-ao.png" alt="" style={{ margin: "auto" }} />
    </SideIcons>
    <Reserve to="/reserveer">Reserveer nu</Reserve>
  </IntroWrapper>
);
