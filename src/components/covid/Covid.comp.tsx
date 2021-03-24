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
      {/* Door de coronamaatregelen zijn er regels waaraan we ons moeten
      houden binnen het GO onderwijs: <br />
      &nbsp;&nbsp;&nbsp;&nbsp;31 maart: (1ste & 3de graad op school)
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;21 april: (1ste & 2de graad op school)
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;15 leerlingen per workshop
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;12:30u - 14:00u
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;eten kan nog buiten van 12:00u - 12:30u */}
      Door gewijzigde Corona maatregelen zijn de huidige workshop datums
      onbekend. We houden jullie op de hoogte via onze smartschool.
      <br />
      <br />
      Je kan ons draaiboek op{" "}
      <a href="/draaiboek" target="_blanc">
        gpb.go-ao.be/draaiboek
      </a>{" "}
      vinden.
    </CovidMessage>
  </CovidWrapper>
);
