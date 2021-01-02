import {
  CopyrightNote,
  FooterSplitter,
  FooterWrapper,
  LegalWrapper,
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
        <SocialsIconWrapper key={index} to={item[1]}>
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
    <FooterSplitter />
    <LegalWrapper>
      <QuickNavigationItem to="/tos">Service Voorwaarden</QuickNavigationItem>
      <QuickNavigationItem to="/privacy">Privacybeleid</QuickNavigationItem>
    </LegalWrapper>
    <FooterSplitter />
    <CopyrightNote>
      ©2020-2021 GO-PC Build{"\n"}
      Fortstraat 49, 9700 Oudenaarde
    </CopyrightNote>
  </FooterWrapper>
);
