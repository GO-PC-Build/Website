import {
  CopyrightNote,
  FooterSplitter,
  FooterWrapper,
  QuickNavigationItem,
  QuickNavigationWrapper,
  SocialsIcon,
  SocialsIconWrapper,
  SocialsWrapper,
} from "./Footer.styled";

import React from "react";
import { socials } from "../../config";

const navigation = [
  ["Home", "/"],
  ["Doe de quiz", "/quiz"],
  ["Reserveer", "/reserveer"],
  ["Aanmelden", "/login"],
];

export const Footer: React.FC = () => (
  <FooterWrapper>
    <SocialsWrapper>
      {socials.map((item, index) => (
        <SocialsIconWrapper key={index} href={item[1]}>
          <SocialsIcon src={item[2]} alt={item[0]} />
        </SocialsIconWrapper>
      ))}
    </SocialsWrapper>
    <FooterSplitter />
    <QuickNavigationWrapper>
      {navigation.map((item, index) => (
        <QuickNavigationItem key={index} to={item[1]}>
          {item[0]}
        </QuickNavigationItem>
      ))}
    </QuickNavigationWrapper>
    {/* <FooterSplitter />
    <LegalWrapper>
      <QuickNavigationItemLinked to="/tos">Service Voorwaarden</QuickNavigationItemLinked>
      <QuickNavigationItemLinked to="/privacy">Privacybeleid</QuickNavigationItemLinked>
    </LegalWrapper> */}
    <FooterSplitter hide={true} />
    <CopyrightNote>
      ©2020-2021 GO-PC Build{"\n"}
      Fortstraat 49, 9700 Oudenaarde
    </CopyrightNote>
  </FooterWrapper>
);
