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
import messages from "../../config";

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
    <CovidMessage>{messages.covid}</CovidMessage>
  </CovidWrapper>
);