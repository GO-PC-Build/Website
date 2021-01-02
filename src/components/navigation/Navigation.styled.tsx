import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavigationHeader = styled.header`
  background-color: #0a142c;

  position: relative;
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

interface NavigationWrapperProps {
  active: boolean;
  height: number;
}

export const NavigationWrapper = styled.nav<NavigationWrapperProps>`
  background-color: #0a142c;
  color: #fff;

  position: fixed;

  width: 80%;
  max-width: 300px;
  height: calc((${(props) => props.height}px * 100) - 100px);
  padding: 0 0 10px 0;

  font-family: "Roboto", sans-serif;
  font-weight: 700;

  transition: left 0.256s ease-in-out;
  left: ${(props) => (props.active ? "0" : "-300px")};

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
