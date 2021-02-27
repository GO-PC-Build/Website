import {
  CovidIcon,
  CovidMessage,
  CovidPeekWrapper,
  CovidSplitter,
  CovidText,
  CovidWrapper,
} from "./Covid.styled";

import { Link } from "react-router-dom";
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
      <CovidText>{"C O V I D".replaceAll(" ", "\n")}</CovidText>
    </CovidPeekWrapper>
    <CovidSplitter />
    <CovidMessage>
      Door de corona maatregelen zijn er wat dingen waaraan we ons moeten
      houden: <br />
      &nbsp;&nbsp;&nbsp;&nbsp;24 maart is voor de 2de graad
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;31 maart is voor de 1ste graad
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;15 leerlingen per workshop
      <br />
      De workshops beginnen om 12:30 dus je mag nog op school blijven om te
      eten!
      <br />
      Je kan ons draaiboek op <Link to="/draaiboek">gpb.go-ao.be/draaiboek</Link> vinden!
    </CovidMessage>
  </CovidWrapper>
);
