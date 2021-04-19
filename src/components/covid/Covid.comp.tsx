import {
  CovidIcon,
  CovidMessage,
  CovidPeekWrapper,
  CovidSplitter,
  CovidText,
  CovidWrapper,
} from "./Covid.styled";

import React from "react";
import VirusIcon from "../../assets/virus.svg";

interface CovidProps {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  setNav: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Covid: React.FC<CovidProps> = (props) => (
  <CovidWrapper
    active={props.isActive}
    onClick={() => {
      props.setNav(false);
      props.setIsActive(!props.isActive);
    }}
  >
    <CovidPeekWrapper>
      <CovidIcon src={VirusIcon} alt="" />
      <CovidText>{"C O V I D".replace(/ /g, "\n")}</CovidText>
    </CovidPeekWrapper>
    <CovidSplitter />
    <CovidMessage>
      {/* Door de coronamaatregelen zijn er regels waaraan we ons moeten houden
      binnen het GO onderwijs: <br />
      &nbsp;&nbsp;&nbsp;&nbsp;Workshop 1: 28 april 
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;Workshop 2: 5 mei
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;Workshop 3: 12 mei
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;10 leerlingen per workshop
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;12:30u - 14:00u
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;eten kan nog buiten van 12:00u - 12:30u
      <br />
      <br /> */}
      Je kan ons draaiboek op{" "}
      <a href="/draaiboek" target="_blanc">
        gpb.go-ao.be/draaiboek
      </a>{" "}
      vinden.
    </CovidMessage>
  </CovidWrapper>
);
