import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterWrapper = styled.footer`
  position: relative;
  background-color: #0a142c;
  width: 100%;

  margin: 0;
  padding: 40px;

  color: #fff;
  font-family: "Roboto", sans-serif;

  display: grid;
  width: calc(100% - 80px);
  grid-gap: 20px;

  @media (min-width: 1024px) {
    width: calc(100% - 380px);
    margin-left: 300px;

    grid-template-columns: 1fr auto 1fr;
  }
`;

export const SocialsWrapper = styled.section`
  width: 100%;
  margin: 0 0 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (min-width: 1024px) {
    max-width: 325px;
  }
`;

export const SocialsIconWrapper = styled.a`
  display: block;
  text-decoration: none;
  height: 45px;
  width: fit-content;
  margin: 0 auto;

  @media (min-width: 1024px) {
    margin: auto;
  }
`;

export const SocialsIcon = styled.img`
  width: 45px;
  height: 45px;
  user-select: none;
`;

export const FooterSplitter = styled.div<{ hide?: boolean }>`
  width: 100%;
  height: 3px;

  background-color: #4a85b9;
  margin: 0 auto;

  @media (min-width: 1024px) {
    width: 3px;
    height: 100%;
    ${(props) => (props.hide === undefined ? "" : "display: none;")}
  }
`;

export const QuickNavigationWrapper = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px 5px;

  @media (min-width: 1024px) {
    max-width: 325px;
  }
`;

export const QuickNavigationItem = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 24px;
`;

export const QuickNavigationItemLinked = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 24px;
`;

export const LegalWrapper = styled.section`
  width: 100%;
  display: grid;
  grid-gap: 10px;
`;

export const CopyrightNote = styled.section`
  display: flex;
  flex-direction: column;
  white-space: pre-wrap;
  font-size: 16px;

  @media (min-width: 1024px) {
    white-space: normal;
    text-align: center;

    grid-column-start: 1;
    grid-column-end: 7;

    width: 100%;
  }
`;
