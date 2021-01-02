import {
  ContentDarkener,
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

import { Divide } from "hamburger-react";
import GoPcBuildIcon from "../../assets/logo.png";

const navigation = [
  ["Home", "/"],
  ["Doe de quiz", "/quiz"],
  ["Reserveer", "/reserveer"],
  ["Verbinden", "/connect"],
  ["Aanmelden", "/login"],
];

const socials = [
  ["Discord", "/discord"],
  ["Twitter", "https://twitter.com/GOPCBuild"],
  ["Facebook", "https://www.facebook.com/GOPCBuild"],
  ["Instagram", "https://www.instagram.com/gopcbuild/"],
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
          <Divide
            color="#fff"
            toggled={props.isOpen}
            toggle={props.setOpen}
            size={50}
            rounded={true}
          />
          <NavigationHeaderIconUrl to="/">
            <NavigationHeaderIcon src={GoPcBuildIcon} alt="" />
          </NavigationHeaderIconUrl>
        </NavigationHeaderInnerWrapper>
      </NavigationHeader>
      <NavigationWrapper active={props.isOpen} window={innerHeight * 0.01} onClick={() => props.setCovidIsOpen(false)}>
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
        window={innerHeight * 0.01}
      />
    </React.Fragment>
  );
};
