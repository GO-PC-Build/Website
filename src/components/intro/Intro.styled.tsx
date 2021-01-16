import { Link } from "react-router-dom";
import styled from "styled-components";

export const IntroWrapper = styled.section`
  position: relative;

  width: 80%;
  margin: 60px auto 0 auto;

  display: grid;
  grid-gap: 50px;
`;

export const Title = styled.h1`
  display: block;
  white-space: pre-wrap;

  color: #000;

  font-weight: 500;
  font-size: 42px;
  user-select: none;
`;

export const Description = styled.p`
  color: #000;

  font-weight: 300;
  font-size: 24px;
`;

export const Reserve = styled(Link)`
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
`;
