import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterWrapper = styled.footer`
  position: relative;
  background-color: #0a142c;
  width: 100%;

  margin: 60px 0 0 0;
  padding: 40px;

  color: #fff;
  font-family: "Roboto", sans-serif;

  display: grid;
  width: calc(100% - 80px);
  grid-gap: 20px;
`;

export const SocialsWrapper = styled.section`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export const SocialsIconWrapper = styled(Link)`
  display: block;
  text-decoration: none;
  height: 45px;
  width: fit-content;
  margin: 0 auto;
`;

export const SocialsIcon = styled.img`
  width: 45px;
  height: 45px;
`;

export const FooterSplitter = styled.div`
  width: 100%;
  height: 3px;

  background-color: #4a85b9;
  margin: 0 auto;
`;

export const QuickNavigationWrapper = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px 5px;
`;

export const QuickNavigationItem = styled(Link)`
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
`
