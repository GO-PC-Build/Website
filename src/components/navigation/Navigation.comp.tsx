import {
  ContentDarkener,
  HamburgerWrapper,
  NavigationHeader,
  NavigationHeaderIcon,
  NavigationHeaderIconUrl,
  NavigationHeaderInnerWrapper,
  NavigationInnerWrapper,
  NavigationItem,
  NavigationSplitter,
  NavigationTitle,
  NavigationWrapper,
  SocialsItem,
} from "./Navigation.styled";
import React, { useState } from "react";

import GoPcBuildIcon from "../../assets/logo.png";
import { socials } from "../../config";
import { Divide } from "hamburger-react";

const navigation = [
  ["Home", "/"],
  ["Doe de quiz", "/quiz"],
  ["Reserveer", "/reserveer"],
  ["Verbinden", "/connect"],
  ["Aanmelden", "/login"],
];

interface NavigationProps {
  setCovidIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Navigation: React.FC<NavigationProps> = (props) => {
  const [innerHeight, setInnerHeight] = useState(window.innerHeight);

  window.addEventListener("resize", () => setInnerHeight(window.innerHeight));

  return (
    <React.Fragment>
      <NavigationHeader onClick={() => props.setCovidIsOpen(false)}>
        <NavigationHeaderInnerWrapper>
          <HamburgerWrapper>
            <Divide
              color="#fff"
              toggled={props.isOpen}
              toggle={props.setOpen}
              size={50}
              rounded={true}
            />
          </HamburgerWrapper>
          <NavigationHeaderIconUrl to="/">
            <NavigationHeaderIcon src={GoPcBuildIcon} alt="" />
          </NavigationHeaderIconUrl>
        </NavigationHeaderInnerWrapper>
      </NavigationHeader>
      <NavigationWrapper
        active={props.isOpen}
        window={innerHeight * 0.01}
        onClick={() => props.setCovidIsOpen(false)}
      >
        <NavigationInnerWrapper>
          <NavigationTitle>GO-PC Build</NavigationTitle>
          <NavigationSplitter />
          {navigation.map((item, index) => (
            <NavigationItem key={index} to={item[1]}>
              {item[0]}
            </NavigationItem>
          ))}
        </NavigationInnerWrapper>
        <NavigationInnerWrapper>
          <NavigationTitle>Socials</NavigationTitle>
          <NavigationSplitter />
          {socials.map((item, index) => (
            <SocialsItem key={index} href={item[1]} target="_blanc">
              {item[0]}
            </SocialsItem>
          ))}
        </NavigationInnerWrapper>
      </NavigationWrapper>
      <ContentDarkener
        onClick={() => props.setOpen(false)}
        active={props.isOpen}
      />
    </React.Fragment>
  );
};
