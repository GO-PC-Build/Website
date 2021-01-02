import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavigationHeader = styled.header`
  background-color: #0a142c;

  position: fixed;
  top: 0;
  z-index: 11;

  width: 100%;
  height: 90px;
  
  display: flex;
  justify-content: center;
`;

export const NavigationHeaderInnerWrapper = styled.div`
  width: calc(100% - 60px);

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavigationHeaderIcon = styled.img`
  width: 90px;
  height: 90px;

  user-select: none;
`;

export const NavigationHeaderIconUrl = styled(Link)`
  display: block;
  
  width: 90px;
  height: 90px;
`

interface NavigationWrapperProps {
  active: boolean;
  window: number;
}

export const NavigationWrapper = styled.nav<NavigationWrapperProps>`
  background-color: #0a142c;
  color: #fff;

  position: fixed;
  z-index: 10;

  width: 80%;
  max-width: 300px;
  height: calc((${(props) => props.window}px * 100) - 100px);
  padding: 0 0 10px 0;

  font-family: "Roboto", sans-serif;
  font-weight: 700;

  transition: left 0.256s ease-in-out;
  left: ${(props) => (props.active ? "0" : "-300px")};
  top: 90px;

  display: grid;
  grid-template-rows: 1fr 1fr;
`;

export const NavigationInnerWrapper = styled.div`
  width: calc(100% - 20px);
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const NavigationTitle = styled.h2`
  text-align: center;
  font-size: 30px;
`;

export const NavigationSplitter = styled.div`
  height: 3px;
  
  max-width: 60%;
  width: 100%;

  background-color: #4a85b9;
  border-radius: 3px;

  margin: 5px 0;
`;

export const NavigationItem = styled(Link)`
  font-size: 24px;
  text-decoration: none;
  color: #fff;

  min-width: 60%;
`;

export const SocialsItem = styled.a`
  font-size: 24px;
  text-decoration: none;
  color: #fff;

  min-width: 60%;
`;

export const ContentDarkener = styled.div<NavigationWrapperProps>`
  position: fixed;
  z-index: 0;
  right: 0;
  top: 90px;
  
  background-color: #000;
  height: calc((${(props) => props.window}px * 100) - 90px);
  width: 100%;

  transition: all 0.5s ease-in-out;
  opacity: ${(props) => (props.active ? "0.10" : "0")};
  visibility: ${(props) => (props.active ? "visible" : "hidden")};
`;
