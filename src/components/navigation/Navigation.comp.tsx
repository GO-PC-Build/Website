import {
  NavigationHeader,
  NavigationHeaderIcon,
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

export const Navigation: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  const [innerHeight, setInnerHeight] = useState(window.innerHeight);

  window.addEventListener("resize", () => setInnerHeight(window.innerHeight));

  return (
    <React.Fragment>
      <NavigationHeader>
        <NavigationHeaderInnerWrapper>
          <Divide
            color="#fff"
            toggled={isOpen}
            toggle={setOpen}
            size={50}
            rounded={true}
          />
          <NavigationHeaderIcon src={GoPcBuildIcon} alt="" />
        </NavigationHeaderInnerWrapper>
      </NavigationHeader>
      <NavigationWrapper active={isOpen} height={innerHeight * 0.01}>
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
    </React.Fragment>
  );
};
