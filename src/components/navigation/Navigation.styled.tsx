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

  @media (min-width: 1024px) {
    width: 300px;
    height: 160px;
  }
`;

export const NavigationHeaderInnerWrapper = styled.div`
  width: calc(100% - 60px);

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1024px) {
    justify-content: center;
  }
`;

export const NavigationHeaderIcon = styled.img`
  width: 90px;
  height: 90px;

  user-select: none;

  @media (min-width: 1024px) {
    width: 142px;
    height: 142px;
  }
`;

export const NavigationHeaderIconUrl = styled(Link)`
  display: block;

  width: 90px;
  height: 90px;

  @media (min-width: 1024px) {
    width: 142px;
    height: 142px;
  }
`;

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

  @media (min-width: 1024px) {
    top: 150px;
    left: 0;
    width: 300px;
    height: calc((${(props) => props.window}px * 100) - 180px);
    padding: 0 0 30px 0;
  }
`;

export const NavigationInnerWrapper = styled.div`
  width: calc(100% - 20px);
  margin: 0 auto;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media (min-width: 1024px) {
    height: 80%;
  }
`;

export const NavigationTitle = styled.h2`
  text-align: center;
  font-size: 30px;
  user-select: none;
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

  &:hover {
    opacity: 0.8;
  }
`;

export const SocialsItem = styled.a`
  font-size: 24px;
  text-decoration: none;
  color: #fff;

  min-width: 60%;

  &:hover {
    opacity: 0.8;
  }
`;

export const ContentDarkener = styled.div<{ active: boolean }>`
  position: fixed;
  z-index: 0;
  right: 0;
  top: 90px;

  background-color: #000;
  height: 100vh;
  width: 100%;

  transition: all 0.5s ease-in-out;
  opacity: ${(props) => (props.active ? "0.10" : "0")};
  visibility: ${(props) => (props.active ? "visible" : "hidden")};
`;

export const HamburgerWrapper = styled.div`
  @media (min-width: 1024px) {
    display: none;
  }
`;
