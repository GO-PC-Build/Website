import { Link } from "react-router-dom";
import styled from "styled-components";

export const IntroWrapper = styled.section`
  position: relative;

  width: 80%;
  margin: 60px auto 0 auto;

  display: grid;
  grid-row-gap: 50px;

  grid-template-areas:
    "intro"
    "desc"
    "reserve"
    "icon";

  @media (min-width: 1500px) {
    grid-template-areas:
      "intro intro icon"
      "desc desc icon"
      "reserve reserve icon";
  }
`;

export const Title = styled.h1`
  display: block;
  white-space: pre-wrap;

  color: #000;

  font-weight: 500;
  font-size: 42px;
  user-select: none;
  grid-area: intro;
`;

export const Description = styled.p`
  grid-area: desc;
  color: #000;

  font-weight: 300;
  font-size: 24px;

  @media (min-width: 1024px) {
    max-width: 60%;
  }
`;

export const Reserve = styled(Link)`
  grid-area: reserve;
  border: none;
  border-radius: 7px;
  display: block;

  background-color: #4a85b9;
  color: #fff;

  width: fit-content;
  padding: 10px 40px;
  margin: 0 auto;

  font-weight: 700;
  font-size: 30px;

  text-decoration: none;
  user-select: none;

  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #3e6e97;
  }

  &:active {
    background-color: #4b86b9;
  }

  @media (min-width: 1024px) {
    margin: 0 0 0 40px;
  }
`;

export const SideIcons = styled.div`
  grid-area: icon;
  display: flex;
  margin: auto;
  user-select: none;

  @media (max-width: 660px) {
    flex-direction: column;
    overflow: hidden;

    img {
      margin: 0 auto !important;
    }
  }
`;

export const IntroImage = styled.img`
  width: 266px;
  max-width: 80vw;
`;
