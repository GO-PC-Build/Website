import {
  ContentDarkener,
  HamburgerWrapper,
  NavigationHeader,
  NavigationHeaderIcon,
  NavigationHeaderIconUrl,
  NavigationHeaderInnerWrapper,
  NavigationInnerWrapper,
  NavigationItem,
  NavigationRawItem,
  NavigationSplitter,
  NavigationTitle,
  NavigationWrapper,
  UserNameWrapper,
} from "./Navigation.styled";
import React, { useContext, useState } from "react";

import { AccountContext } from "../../layouts/DefaultLayout";
import { Divide } from "hamburger-react";
import GoPcBuildIcon from "../../assets/logo.png";

// import { socials } from "../../config";

const navigation = [
  ["Home", "/"],
  ["Doe de quiz", "/quiz", "_blanc"],
  ["Reservatie", "/reserveer"],
  // ["Verbinden", "/connect"],
];

interface NavigationProps {
  setCovidIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Navigation: React.FC<NavigationProps> = (props) => {
  const [innerHeight, setInnerHeight] = useState(window.innerHeight);
  const ctx = useContext(AccountContext);

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
          {navigation.map((item, index) =>
            !item?.[2] ? (
              <NavigationItem key={index} to={item[1]}>
                {item[0]}
              </NavigationItem>
            ) : (
              <NavigationRawItem key={index} href={item[1]} target={item[2]}>
                {item[0]}
              </NavigationRawItem>
            )
          )}
          {ctx.internalnr === 0 ? (
            <NavigationItem
              onClick={() =>
                localStorage.setItem("forward", window.location.href)
              }
              to="/login"
            >
              Aanmelden
            </NavigationItem>
          ) : (
            <NavigationItem to="/logout">Afmelden</NavigationItem>
          )}
        </NavigationInnerWrapper>
        {ctx.firstname !== "Loading" && (
          <UserNameWrapper>
            {ctx.firstname} {ctx.lastname}
          </UserNameWrapper>
        )}
      </NavigationWrapper>
      <ContentDarkener
        onClick={() => props.setOpen(false)}
        active={props.isOpen}
      />
    </React.Fragment>
  );
};
